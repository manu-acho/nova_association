"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Shield, Globe, Coins, TrendingUp, Users, CheckCircle, ExternalLink, Menu, X, Zap, Hexagon, BarChart3, Activity, Wallet, Network, Clock, FileText, Building } from "lucide-react"
import Link from "next/link"
import { useCocoaPrice } from "@/hooks/use-cocoa-price"

export default function NovaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [developmentProgress, setDevelopmentProgress] = useState(65) // Development completion percentage
  const [tokenizedValue, setTokenizedValue] = useState(0) // Current tokenized value in USD
  const [targetTokenizedValue] = useState(21000000) // Target $21M

  // Use real cocoa price data
  const { data: cocoaPriceData, loading: priceLoading, error: priceError } = useCocoaPrice()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-purple-950 to-emerald-900 animate-gradient-shift relative overflow-hidden">
      {/* Blockchain Background Pattern */}
      <div className="absolute inset-0 bg-web3-grid opacity-30"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/6 particle w-2 h-2 animation-delay-200"></div>
      <div className="absolute top-3/4 right-1/4 particle particle-purple w-3 h-3 animation-delay-600"></div>
      <div className="absolute bottom-1/3 left-1/3 particle w-1 h-1 animation-delay-400"></div>

      {/* Header with CacaoX Branding */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/20 border-b border-emerald-500/20 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-slow border-neon">
              <span className="text-black font-bold text-sm">🍫</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg blur-sm opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-300 animate-blockchain-pulse"></div>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl transition-colors duration-300 group-hover:text-emerald-200">
              CacaoX
            </span>
            <Badge className="ml-2 bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs px-2 py-1 animate-pulse-slow">
              IN DEVELOPMENT
            </Badge>
          </div>
          
          {/* Project Status Indicator with Real Price */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 glassmorphism px-3 py-1 rounded-lg">
              <Building className="w-4 h-4 text-emerald-400 animate-pulse-slow" />
              <span className="text-emerald-200">Nova Association</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow"></div>
            </div>
            
            <div className="glassmorphism px-3 py-1 rounded-lg min-w-[140px]">
              {priceLoading ? (
                <div className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-emerald-200">Cocoa:</span>
                  <span className="text-white font-semibold">Loading...</span>
                </div>
              ) : priceError ? (
                <div className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-purple-400" />
                  <span className="text-emerald-200">Cocoa:</span>
                  <span className="text-white font-semibold">$2,847/t</span>
                </div>
              ) : (
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex items-center space-x-2">
                    <Coins className="w-4 h-4 text-purple-400" />
                    <span className="text-emerald-200">Cocoa:</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-semibold">${cocoaPriceData?.price.toLocaleString()}/t</span>
                    {cocoaPriceData && (
                      <span className={`text-xs ${cocoaPriceData.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {cocoaPriceData.changePercent >= 0 ? '+' : ''}{cocoaPriceData.changePercent}%
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {cocoaPriceData?.marketState && (
              <div className="glassmorphism px-3 py-1 rounded-lg">
                <div className={`flex items-center space-x-2 ${
                  cocoaPriceData.marketState === 'REGULAR' ? 'text-emerald-400' : 'text-gray-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    cocoaPriceData.marketState === 'REGULAR' ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-xs font-medium">
                    {cocoaPriceData.marketState === 'REGULAR' ? 'LIVE' : cocoaPriceData.marketState}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="#about"
              className="relative px-4 py-2 text-emerald-200 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative flex items-center space-x-1">
                <Hexagon className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span>About</span>
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link
              href="#tokenomics"
              className="relative px-4 py-2 text-emerald-200 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative flex items-center space-x-1">
                <Coins className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Tokenomics</span>
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link
              href="#governance"
              className="relative px-4 py-2 text-emerald-200 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative flex items-center space-x-1">
                <Shield className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Governance</span>
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link
              href="#team"
              className="relative px-4 py-2 text-emerald-200 hover:text-white transition-all duration-300 group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="absolute inset-0 border border-emerald-500/20 group-hover:border-emerald-400/40 transition-colors duration-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative flex items-center space-x-1">
                <Users className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Team</span>
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 text-emerald-200 hover:text-emerald-100 transition-colors duration-300 rounded-lg border border-emerald-500/30 hover:border-emerald-400/50 bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-sm"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          {/* Realistic CTA Button */}
          <Button className="hidden md:flex relative bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 text-white border-0 transition-all duration-300 hover:scale-105 animate-gradient-x group overflow-hidden rounded-lg px-6 py-2 border-neon hover-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            <div className="relative flex items-center space-x-2">
              <FileText className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-semibold">Read Whitepaper</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-emerald-500/20 md:hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-purple-500/5"></div>
            <nav className="relative container mx-auto px-4 py-6 space-y-3">
              <Link
                href="#about"
                className="block relative p-3 text-emerald-200 hover:text-white transition-all duration-300 group rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 bg-emerald-500/5 hover:bg-emerald-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Hexagon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>About</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Link
                href="#tokenomics"
                className="block relative p-3 text-emerald-200 hover:text-white transition-all duration-300 group rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 bg-emerald-500/5 hover:bg-emerald-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Coins className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Tokenomics</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Link
                href="#governance"
                className="block relative p-3 text-emerald-200 hover:text-white transition-all duration-300 group rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 bg-emerald-500/5 hover:bg-emerald-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Governance</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Link
                href="#team"
                className="block relative p-3 text-emerald-200 hover:text-white transition-all duration-300 group rounded-lg border border-emerald-500/20 hover:border-emerald-400/40 bg-emerald-500/5 hover:bg-emerald-500/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Team</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              <Button className="w-full relative bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-400 hover:to-purple-400 text-white border-0 transition-all duration-300 animate-gradient-x group overflow-hidden rounded-lg py-3 mt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-semibold">Join DAO</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Real Price Data */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-3xl animate-gradient-shift-slow"></div>
        
        {/* Project Status Ticker with Real Data */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="glassmorphism px-6 py-2 rounded-full border-neon">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-emerald-200">Status:</span>
                <span className="text-white font-bold">Pre-Launch</span>
              </div>
              <div className="w-px h-4 bg-emerald-500/30"></div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-200">Progress:</span>
                <span className="text-white font-bold">{developmentProgress}%</span>
              </div>
              <div className="w-px h-4 bg-emerald-500/30"></div>
              <div className="flex items-center space-x-2">
                <Coins className="w-4 h-4 text-purple-400" />
                <span className="text-emerald-200">Cocoa:</span>
                {priceLoading ? (
                  <span className="text-white font-bold">Loading...</span>
                ) : (
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-bold">
                      ${cocoaPriceData?.price.toLocaleString() || '2,847'}/t
                    </span>
                    {cocoaPriceData && (
                      <span className={`text-xs ${cocoaPriceData.changePercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {cocoaPriceData.changePercent >= 0 ? '↗' : '↘'}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {cocoaPriceData?.source === 'Yahoo Finance' && (
                <>
                  <div className="w-px h-4 bg-emerald-500/30"></div>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-emerald-300">LIVE</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-16">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 sm:mb-6 bg-emerald-500/20 text-emerald-200 border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105 animate-bounce-slow text-xs sm:text-sm glassmorphism">
              🇨🇭 Swiss DAO • Canton Zug • Legal Framework Established
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Tokenizing the Future of{" "}
              <span className="text-holographic animate-neon-glow">
                Cocoa 
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-400 px-2">
              Building traceable, ethical, and fair trade commodity systems through 
              <span className="text-emerald-300 font-semibold"> blockchain technology</span> and
              structured financial innovation.
            </p>
            
            {/* Realistic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-600 px-4 sm:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-gradient-x group border-neon hover-lift"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download Whitepaper
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 group glassmorphism hover-lift"
              >
                <Building className="mr-2 h-4 w-4" />
                Legal Documentation
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </div>

            {/* Updated Project Metrics */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="glassmorphism p-4 rounded-lg border-neon hover-lift">
                <div className="text-2xl font-bold text-emerald-400 animate-counter">{developmentProgress}%</div>
                <div className="text-emerald-200 text-sm">Development Complete</div>
                <Progress value={developmentProgress} className="mt-2 progress-glow" />
              </div>
              <div className="glassmorphism p-4 rounded-lg border-neon hover-lift">
                <div className="text-2xl font-bold text-purple-400 animate-counter">Q3 2025</div>
                <div className="text-emerald-200 text-sm">Expected Launch</div>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse-slow mr-2"></div>
                  <span className="text-xs text-orange-300">In Progress</span>
                </div>
              </div>
              <div className="glassmorphism p-4 rounded-lg border-neon hover-lift">
                <div className="text-2xl font-bold text-emerald-400 animate-counter">${(tokenizedValue / 1000000).toFixed(1)}M</div>
                <div className="text-emerald-200 text-sm">Tokenized Value</div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-emerald-300 mb-1">
                    <span>Current</span>
                    <span>Target: $21M</span>
                  </div>
                  <Progress value={(tokenizedValue / targetTokenizedValue) * 100} className="progress-glow" />
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse-slow mr-2"></div>
                    <span className="text-xs text-red-300">Not Started</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements with Blockchain Theme */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-purple-400/20 rounded-full blur-xl animate-float">
          <Hexagon className="w-8 h-8 text-emerald-400/50 animate-hexagon-rotate absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-emerald-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-300/15 to-purple-300/15 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-300/15 to-emerald-300/15 rounded-full blur-lg animate-float-reverse"></div>
        
        {/* Data Flow Animation */}
        <div className="absolute top-0 left-0 w-full h-1 opacity-30">
          <div className="data-bar h-full"></div>
        </div>
      </section>

      {/* Updated Stats Section */}
      <section className="py-12 sm:py-16 bg-black/20 backdrop-blur-sm border-y border-emerald-500/20 transition-all duration-500 hover:bg-black/30 cyber-grid">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="group transition-all duration-300 hover:scale-105 glassmorphism p-4 rounded-lg border-neon hover-lift">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-1 sm:mb-2 transition-all duration-300 group-hover:text-emerald-300 animate-counter terminal-text">
                $21M
              </div>
              <div className="text-sm sm:text-base text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                Target Tokenized Value
              </div>
              <div className="mt-2 text-xs text-emerald-400">💰 Initial Capacity</div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105 glassmorphism p-4 rounded-lg border-neon hover-lift">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 transition-all duration-300 group-hover:text-purple-300 animate-counter animation-delay-200 terminal-text">
                3
              </div>
              <div className="text-sm sm:text-base text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                Origin Countries
              </div>
              <div className="mt-2 text-xs text-purple-400">🌍 Cameroon, Côte d'Ivoire, Ghana</div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105 glassmorphism p-4 rounded-lg border-neon hover-lift">
              <div className="text-2xl font-bold text-emerald-400 mb-1 sm:mb-2 transition-all duration-300 group-hover:text-emerald-300 animate-counter animation-delay-400 terminal-text">
                Q3
              </div>
              <div className="text-sm sm:text-base text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                2025 Launch Target
              </div>
              <div className="mt-2 text-xs text-emerald-400">⏰ Platform Development</div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105 glassmorphism p-4 rounded-lg border-neon hover-lift">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 transition-all duration-300 group-hover:text-purple-300 animate-counter animation-delay-600 terminal-text">
                1:1
              </div>
              <div className="text-sm sm:text-base text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                CCR to Cocoa Kg
              </div>
              <div className="mt-2 text-xs text-purple-400">🎯 Tokenomics Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Tokenomics Roadmap */}
      <section
        id="tokenomics"
        className="py-12 sm:py-20 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 animate-gradient-shift-slow"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">CCR Token Design</h2>
            <p className="text-lg sm:text-xl text-emerald-200 max-w-3xl mx-auto px-2">
              Each CCR token will represent 1kg of certified, warehouse-backed cocoa with full redemption rights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    1:1 Asset Backing (Planned)
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    Each CCR token will be directly pegged to 1 kilogram of certified, warehouse-backed cocoa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x animation-delay-200">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    Physical Redemption Rights
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    Token holders will be able to redeem CCR tokens for equivalent physical cocoa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x animation-delay-400">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    Governance Participation
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    CCR tokens will provide voting rights in association governance decisions
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-900/30 to-purple-900/30 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Development Roadmap</CardTitle>
                <CardDescription className="text-emerald-200">
                  Current progress and upcoming milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Acquired 3000 metric tons of cocoa
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Registered DAO as Swiss Verein
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Legal Framework
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Tokenomics Design
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-orange-200 transition-colors duration-300 group-hover:text-orange-100">
                      Platform Development
                    </span>
                    <Clock className="h-4 w-4 text-orange-400 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      Token Launch (Q3 2025)
                    </span>
                    <Clock className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Algorithmic Governance</h2>
            <p className="text-lg sm:text-xl text-emerald-200 max-w-3xl mx-auto px-2">
              Member-driven decision making with transparent voting and Swiss regulatory oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gradient-to-br from-emerald-900/50 to-purple-900/50 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 group animate-fade-in-up">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  DAO Voting
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  All CCR holders vote proportionally on proposals with 10% quorum requirement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-emerald-900/50 border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in-up animation-delay-200">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  Council Oversight
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  3-7 elected stewards with execution authority overseeing treasury and operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-purple-900/50 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 group animate-fade-in-up animation-delay-400">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  Swiss Legal Framework
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  Registered as Swiss Verein in Canton Zug with full legal capacity
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-12 sm:py-20 bg-gradient-to-r from-purple-900/20 to-emerald-900/20 animate-gradient-shift-slow"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Leadership Team</h2>
            <p className="text-lg sm:text-xl text-emerald-200 max-w-3xl mx-auto px-2">
              Experienced leaders driving innovation in commodity finance and blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-emerald-900/50 to-purple-900/50 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 group animate-fade-in-up">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 animate-gradient-x">
                  <span className="text-black font-bold text-2xl">YM</span>
                </div>
                <CardTitle className="text-white text-xl transition-colors duration-300 group-hover:text-emerald-200">
                  Yves Messy
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  President & Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-emerald-200 mb-4 transition-colors duration-300 group-hover:text-emerald-100">
                  Leading the vision for tokenized commodity trading and blockchain innovation
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-emerald-400"
                >
                  yves@govtech.network
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-emerald-900/50 border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group animate-fade-in-up animation-delay-200">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 animate-gradient-x animation-delay-200">
                  <span className="text-black font-bold text-2xl">MA</span>
                </div>
                <CardTitle className="text-white text-xl transition-colors duration-300 group-hover:text-emerald-200">
                  Emmanuel Acho, Phd
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  Vice President 
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-emerald-200 mb-4 transition-colors duration-300 group-hover:text-emerald-100">
                  Overseeing Swiss operations and regulatory compliance for the association
                </p>
                <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105">
                  Swiss Operations
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-sm animate-gradient-shift-slow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            Join the Future of Commodity Trading
          </h2>
          <p className="text-lg sm:text-xl text-emerald-200 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-2">
            Be part of the revolution in ethical, traceable, and transparent cocoa trading through blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-gradient-x group"
            >
              Get CCR Tokens
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              Contact Investor Relations
            </Button>
          </div>
        </div>
      </section>

      {/* Updated Footer with CacaoX Branding */}
      <footer className="py-8 sm:py-12 bg-black/40 backdrop-blur-sm border-t border-emerald-500/20 transition-all duration-300 hover:bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="group">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 animate-pulse-slow">
                  <span className="text-black font-bold text-sm">🍫</span>
                </div>
                <span className="text-white font-bold transition-colors duration-300 group-hover:text-emerald-200">
                  CacaoX
                </span>
              </div>
              <p className="text-emerald-200 text-sm transition-colors duration-300 group-hover:text-emerald-100">
                Powered by Nova Association - Swiss DAO advancing ethical commodity trading through blockchain technology
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    CacaoX Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    CCR Tokens
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Tokenization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Governance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Articles of Association
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li className="transition-colors duration-300 hover:text-emerald-100">Canton Zug, Switzerland</li>
                <li className="transition-colors duration-300 hover:text-emerald-100">yves@govtech.network</li>
                <li className="transition-colors duration-300 hover:text-emerald-100">www.govtech.network</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-emerald-200 text-xs sm:text-sm transition-colors duration-300 hover:text-emerald-100 px-2">
              © 2025 Nova Association. All rights reserved. | Swiss Verein, Canton Zug
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

