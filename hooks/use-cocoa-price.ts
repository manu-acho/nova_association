"use client"

import { useState, useEffect } from 'react'

interface CocoaPriceData {
  price: number
  previousClose: number
  change: number
  changePercent: number
  currency: string
  symbol: string
  marketState: string
  lastUpdated: string
  source: string
  error?: string
}

const CACHE_KEY = 'cocoa_price_cache'
const CACHE_DURATION = 15 * 60 * 1000 // 15 minutes in milliseconds

export function useCocoaPrice() {
  const [data, setData] = useState<CocoaPriceData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCocoaPrice = async () => {
    try {
      // Check cache first
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data: cachedData, timestamp } = JSON.parse(cached)
        const isStale = Date.now() - timestamp > CACHE_DURATION
        
        if (!isStale) {
          setData(cachedData)
          setLoading(false)
          return
        }
      }

      const response = await fetch('/api/cocoa-price')
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }
      
      const priceData = await response.json()
      
      // Cache the data
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: priceData,
        timestamp: Date.now()
      }))
      
      setData(priceData)
      setError(null)
    } catch (err) {
      console.error('Failed to fetch cocoa price:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
      
      // Try to use cached data even if stale
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data: cachedData } = JSON.parse(cached)
        setData({ ...cachedData, error: 'Using cached data' })
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCocoaPrice()

    // Set up periodic refresh every 15 minutes
    const interval = setInterval(fetchCocoaPrice, CACHE_DURATION)
    
    // Refresh when page becomes visible (user switches back to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCocoaPrice()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return { data, loading, error, refresh: fetchCocoaPrice }
}
