import { NextResponse } from 'next/server'

interface YahooFinanceResponse {
  chart: {
    result: Array<{
      meta: {
        regularMarketPrice: number
        previousClose: number
        currency: string
        symbol: string
        exchangeName: string
        marketState: string
      }
      timestamp: number[]
      indicators: {
        quote: Array<{
          close: number[]
        }>
      }
    }>
    error: any
  }
}

export async function GET() {
  try {
    // Cocoa futures symbol on Yahoo Finance (CC=F)
    const symbol = 'CC=F'
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
    
    const response = await fetch(yahooUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      next: { revalidate: 900 } // Cache for 15 minutes
    })

    if (!response.ok) {
      throw new Error(`Yahoo Finance API error: ${response.status}`)
    }

    const data: YahooFinanceResponse = await response.json()

    if (data.chart.error) {
      throw new Error(`Yahoo Finance error: ${data.chart.error}`)
    }

    const result = data.chart.result[0]
    if (!result) {
      throw new Error('No data returned from Yahoo Finance')
    }

    const currentPrice = result.meta.regularMarketPrice
    const previousClose = result.meta.previousClose
    const change = currentPrice - previousClose
    const changePercent = (change / previousClose) * 100

    return NextResponse.json({
      price: Math.round(currentPrice), // Round to nearest dollar
      previousClose: Math.round(previousClose),
      change: Math.round(change * 100) / 100, // Round to 2 decimal places
      changePercent: Math.round(changePercent * 100) / 100,
      currency: result.meta.currency || 'USD',
      symbol: result.meta.symbol,
      marketState: result.meta.marketState,
      lastUpdated: new Date().toISOString(),
      source: 'Yahoo Finance'
    })

  } catch (error) {
    console.error('Cocoa price API error:', error)
    
    // Return fallback data if API fails
    return NextResponse.json({
      price: 2847,
      previousClose: 2830,
      change: 17,
      changePercent: 0.6,
      currency: 'USD',
      symbol: 'CC=F',
      marketState: 'CLOSED',
      lastUpdated: new Date().toISOString(),
      source: 'Fallback',
      error: 'Unable to fetch live data'
    }, { status: 200 }) // Still return 200 so frontend doesn't break
  }
}
