import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Globe, Coins, TrendingUp, Users, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function NovaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-purple-950 to-emerald-900 animate-gradient-shift">
      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/20 border-b border-emerald-500/20 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-pulse-slow">
              <span className="text-black font-bold text-sm">N</span>
            </div>
            <span className="text-white font-bold text-xl transition-colors duration-300 group-hover:text-emerald-200">
              Nova Association
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#tokenomics"
              className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105 relative group"
            >
              Tokenomics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#governance"
              className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105 relative group"
            >
              Governance
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#team"
              className="text-emerald-200 hover:text-emerald-100 transition-all duration-300 hover:scale-105 relative group"
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 animate-gradient-x">
            Join DAO
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-3xl animate-gradient-shift-slow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-6 bg-emerald-500/20 text-emerald-200 border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/30 hover:scale-105 animate-bounce-slow">
              Swiss DAO • Canton Zug
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Tokenizing the Future of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x bg-300% animate-text-shimmer">
                Cocoa 
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Advancing traceable, ethical, and fair trade commodity systems through decentralized technologies and
              structured financial strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-gradient-x group"
              >
                Explore CacaoX Platform
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 group"
              >
                Read Whitepaper
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-emerald-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-300/15 to-purple-300/15 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-300/15 to-emerald-300/15 rounded-full blur-lg animate-float-reverse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-y border-emerald-500/20 transition-all duration-500 hover:bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 transition-all duration-300 group-hover:text-emerald-300 animate-counter">
                3,000
              </div>
              <div className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                Metric Tonnes Secured
              </div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 transition-all duration-300 group-hover:text-purple-300 animate-counter animation-delay-200">
                3
              </div>
              <div className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                Origin Countries
              </div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2 transition-all duration-300 group-hover:text-emerald-300 animate-counter animation-delay-400">
                80%
              </div>
              <div className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                Max LTV Ratio
              </div>
            </div>
            <div className="group transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 transition-all duration-300 group-hover:text-purple-300 animate-counter animation-delay-600">
                1:1
              </div>
              <div className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                CCR to Cocoa Kg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Revolutionizing Commodity Finance</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              From illiquid cocoa markets to dynamic, accessible, and transparent ecosystem for institutional investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-emerald-900/50 to-purple-900/50 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-400/50 group animate-fade-in-up">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  Tokenized Warehouse Receipts
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  Transform physical cocoa into digital assets backed by certified warehouse receipts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-emerald-900/50 border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-400/50 group animate-fade-in-up animation-delay-200">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  Enhanced Liquidity
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  Fractional ownership and easier transferability of cocoa assets through blockchain technology
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/50 to-purple-900/50 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-400/50 group animate-fade-in-up animation-delay-400">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                <CardTitle className="text-white transition-colors duration-300 group-hover:text-emerald-100">
                  Full Traceability
                </CardTitle>
                <CardDescription className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                  Complete transparency from farm to token with blockchain-verified supply chain
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        id="tokenomics"
        className="py-20 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 animate-gradient-shift-slow"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">CCR Token Economics</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Each CCR token represents 1kg of certified, warehouse-backed cocoa with full redemption rights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    1:1 Asset Backing
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    Each CCR token is directly pegged to 1 kilogram of certified, warehouse-backed cocoa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x animation-delay-200">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    Physical Redemption
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    Token holders can redeem CCR tokens for equivalent physical cocoa at any time
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transition-all duration-300 hover:translate-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 animate-gradient-x animation-delay-400">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-200">
                    Staking & Yield
                  </h3>
                  <p className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                    Stake CCR tokens for yield opportunities and governance participation
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-900/30 to-purple-900/30 border-emerald-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="text-white text-2xl">NAV Calculation</CardTitle>
                <CardDescription className="text-emerald-200">
                  Quarterly Net Asset Value calculation verified by DAO vote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/30 p-4 rounded-lg font-mono text-emerald-300 text-center transition-all duration-300 hover:bg-black/40 hover:text-emerald-200 animate-pulse-slow">
                  NAVₜ = (Market Price + Carry Spread - Costs) ÷ Tokens Issuedₜ
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Published via smart contract
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      Oracle verification
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                  <div className="flex justify-between text-sm group transition-all duration-300 hover:translate-x-1">
                    <span className="text-emerald-200 transition-colors duration-300 group-hover:text-emerald-100">
                      DAO governance
                    </span>
                    <CheckCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Decentralized Governance</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Community-driven decision making with transparent voting and council oversight
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        className="py-20 bg-gradient-to-r from-purple-900/20 to-emerald-900/20 animate-gradient-shift-slow"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Leadership Team</h2>
            <p className="text-xl text-emerald-200 max-w-3xl mx-auto">
              Experienced leaders driving innovation in commodity finance and blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-sm animate-gradient-shift-slow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Join the Future of Commodity Trading
          </h2>
          <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Be part of the revolution in ethical, traceable, and transparent cocoa trading through blockchain technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-purple-500 hover:from-emerald-600 hover:to-purple-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-gradient-x group"
            >
              Get CCR Tokens
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              Contact Investor Relations
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 backdrop-blur-sm border-t border-emerald-500/20 transition-all duration-300 hover:bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 animate-pulse-slow">
                  <span className="text-black font-bold text-sm">N</span>
                </div>
                <span className="text-white font-bold transition-colors duration-300 group-hover:text-emerald-200">
                  Nova Association
                </span>
              </div>
              <p className="text-emerald-200 text-sm transition-colors duration-300 group-hover:text-emerald-100">
                Swiss DAO advancing ethical commodity trading through blockchain technology
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
                    Staking
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

          <div className="border-t border-emerald-500/20 mt-8 pt-8 text-center">
            <p className="text-emerald-200 text-sm transition-colors duration-300 hover:text-emerald-100">
              © 2025 Nova Network Association. All rights reserved. | Swiss Verein, Canton Zug
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
