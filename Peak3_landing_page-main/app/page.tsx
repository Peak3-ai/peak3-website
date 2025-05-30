"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  RefreshCw,
  DollarSign,
  CheckCircle,
  Users,
  Mail,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"

export default function Peak3Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    glowup: 0,
    forkreport: 0,
    ledgerpro: 0,
  })

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate GlowUp stats
            if (entry.target.id === "glowup-stats") {
              let count = 0
              const timer = setInterval(() => {
                count += 2
                setAnimatedStats((prev) => ({ ...prev, glowup: count }))
                if (count >= 88) clearInterval(timer)
              }, 20)
            }
            // Animate ForkReport stats
            if (entry.target.id === "forkreport-stats") {
              let count = 0
              const timer = setInterval(() => {
                count += 1
                setAnimatedStats((prev) => ({ ...prev, forkreport: count }))
                if (count >= 75) clearInterval(timer)
              }, 30)
            }
            // Animate LedgerPro stats
            if (entry.target.id === "ledgerpro-stats") {
              let count = 0
              const timer = setInterval(() => {
                count += 1
                setAnimatedStats((prev) => ({ ...prev, ledgerpro: count }))
                if (count >= 70) clearInterval(timer)
              }, 25)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const statElements = document.querySelectorAll('[id$="-stats"]')
    statElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const useCases = [
    { name: "Customer Support", example: "AI chatbot resolves 90% of tickets instantly" },
    { name: "Invoice Reconciliation", example: "Auto-match invoices to POs in seconds" },
    { name: "Sales Email Sequencing", example: "Personalized follow-ups based on prospect behavior" },
    { name: "KPI Reporting", example: "Real-time dashboards that update automatically" },
    { name: "Content Repurposing", example: "Turn one blog into 10 social media posts" },
    { name: "Lead Scoring", example: "AI ranks prospects by conversion probability" },
  ]

  const techLogos = [
    "HubSpot",
    "Notion",
    "Slack",
    "Stripe",
    "Airtable",
    "Google Workspace",
    "Shopify",
    "QuickBooks",
    "Webflow",
  ]

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0B1E40]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-[#0B1E40] tracking-tight">Peak3</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-700 hover:text-[#1FB2A5] transition-colors">
                Solutions
              </a>
              <a href="#case-studies" className="text-gray-700 hover:text-[#1FB2A5] transition-colors">
                Case Studies
              </a>
              <a href="#founders" className="text-gray-700 hover:text-[#1FB2A5] transition-colors">
                Founders
              </a>
              <a href="#audit" className="text-gray-700 hover:text-[#1FB2A5] transition-colors">
                Audit
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#1FB2A5] transition-colors">
                Contact
              </a>
              <Button
                onClick={() => setIsWaitlistModalOpen(true)}
                className="bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-[#1FB2A5]">
                Solutions
              </a>
              <a href="#case-studies" className="block px-3 py-2 text-gray-700 hover:text-[#1FB2A5]">
                Case Studies
              </a>
              <a href="#founders" className="block px-3 py-2 text-gray-700 hover:text-[#1FB2A5]">
                Founders
              </a>
              <a href="#audit" className="block px-3 py-2 text-gray-700 hover:text-[#1FB2A5]">
                Audit
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#1FB2A5]">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="w-full bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1E40] to-[#0B1E40]/90 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1FB2A5]/10 to-transparent animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Turn busywork into autonomous growth.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                Peak3 designs AI agents & automations that slash costs and give you back your time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsWaitlistModalOpen(true)}
                  className="bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white text-lg px-8 py-4"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0B1E40] text-lg px-8 py-4"
                >
                  Book Free Audit
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#1FB2A5]/20 to-[#FFB383]/20 rounded-full flex items-center justify-center">
                <Bot className="w-32 h-32 text-[#1FB2A5]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build three types of AI-powered solutions that transform how your business operates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#1FB2A5]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1FB2A5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-[#1FB2A5]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI Agents</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 chat, lead-qual & internal copilots fine-tuned on your data.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#1FB2A5]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1FB2A5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-[#1FB2A5]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Automated Workflows</h3>
                <p className="text-gray-600 leading-relaxed">
                  End-to-end glue that replaces brittle Zapier chains & manual spreadsheets.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#1FB2A5]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#1FB2A5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-[#1FB2A5]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">SaaS Consolidation</h3>
                <p className="text-gray-600 leading-relaxed">Bespoke tools that retire $2–5k/mo of licenses.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use-Case Strip */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {useCases.map((useCase, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="whitespace-nowrap px-6 py-3 text-sm bg-white hover:bg-[#1FB2A5] hover:text-white transition-colors cursor-pointer group relative"
                  title={useCase.example}
                >
                  {useCase.name}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#0B1E40] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal w-64 text-center">
                    {useCase.example}
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses that trusted us to transform their operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* GlowUp D2C */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#1FB2A5] to-[#1FB2A5]/70 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold">GlowUp D2C</h4>
                  <p className="text-lg opacity-90">Beauty & Skincare</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-red-600 mb-2">Problem:</h5>
                  <p className="text-gray-600">1,200 support tickets/mo overwhelming team</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-blue-600 mb-2">Solution:</h5>
                  <p className="text-gray-600">GPT-4o RAG chatbot + Shopify API integration</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-600 mb-2">Result:</h5>
                  <div id="glowup-stats" className="text-gray-600">
                    <div className="text-3xl font-bold text-[#1FB2A5]">{animatedStats.glowup}%</div>
                    <p>tickets auto-resolved, 120 hrs saved monthly</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ForkReport Media */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#FFB383] to-[#FFB383]/70 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold">ForkReport Media</h4>
                  <p className="text-lg opacity-90">Food & Restaurant</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-red-600 mb-2">Problem:</h5>
                  <p className="text-gray-600">Manual research for restaurant trends</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-blue-600 mb-2">Solution:</h5>
                  <p className="text-gray-600">Scraper + LangChain summarizer + Supabase DB (10k reviews/day)</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-600 mb-2">Result:</h5>
                  <div id="forkreport-stats" className="text-gray-600">
                    <div className="text-3xl font-bold text-[#1FB2A5]">{animatedStats.forkreport}%</div>
                    <p>cost reduction, launched paid insights in 6 weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LedgerPro Accounting */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-[#0B1E40] to-[#0B1E40]/70 rounded-t-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold">LedgerPro</h4>
                  <p className="text-lg opacity-90">Accounting Services</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h5 className="font-semibold text-red-600 mb-2">Problem:</h5>
                  <p className="text-gray-600">5-day month-end close process</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-blue-600 mb-2">Solution:</h5>
                  <p className="text-gray-600">Vision-OCR agent + QuickBooks API auto-reconcile</p>
                </div>
                <div className="mb-4">
                  <h5 className="font-semibold text-green-600 mb-2">Result:</h5>
                  <div id="ledgerpro-stats" className="text-gray-600">
                    <div className="text-3xl font-bold text-[#1FB2A5]">{animatedStats.ledgerpro}%</div>
                    <p>faster close (1.5 days), cut $2k SaaS fees</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Meet the Founders</h2>
            <div className="bg-[#FFB383] text-[#0B1E40] p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-medium italic">"Your first digital coworker should cost less than coffee."</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Jack David */}
            <Card className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#1FB2A5] to-[#1FB2A5]/70 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Jack David</h3>
                  <p className="text-[#1FB2A5] font-semibold mb-4">Co-Founder / Product & AI Strategy</p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• 7 yrs crafting AI-first products & data pipelines</li>
                    <li>• 9fin head of ESG SaaS for investors</li>
                    <li>• PwC tech consulting</li>
                  </ul>
                  <div className="text-sm text-gray-500">
                    <strong>Toolbelt:</strong> n8n, Supabase, Python LLMs, APIs
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 p-0">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Card>

            {/* Brett Spradbury */}
            <Card className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFB383] to-[#FFB383]/70 rounded-full flex items-center justify-center">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Brett Spradbury</h3>
                  <p className="text-[#1FB2A5] font-semibold mb-4">Co-Founder / Engineering Lead</p>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    <li>• 8 yrs full-stack & ML engineer</li>
                    <li>• Led Fortune 500 automation saving $4M/yr</li>
                    <li>• Architected 50+ production agents</li>
                  </ul>
                  <div className="text-sm text-gray-500">
                    <strong>Toolbelt:</strong> AWS CDK, Kafka, Pinecone, Playwright, Airbyte
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 p-0">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Audit Banner */}
      <section id="audit" className="py-16 bg-[#FFB383]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-[#0B1E40] mr-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1E40]">
              Not sure where to start? Claim a free AI & Automation Audit.
            </h2>
          </div>
          <p className="text-xl text-[#0B1E40]/80 mb-8 italic">
            "We'll map every manual step in your org, estimate ROI, and deliver a blueprint—100% free."
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="border-gray-300" />
                  <Input placeholder="Work Email" type="email" className="border-gray-300" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Company Size</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-250 employees</option>
                    <option>250+ employees</option>
                  </select>
                  <Input placeholder="Biggest Bottleneck" className="border-gray-300" />
                </div>
                <Button className="w-full bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white text-lg py-3">
                  Request Free Audit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Logo Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold mb-12 text-gray-600">
            Integrates with your existing tools
          </h3>
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 text-gray-400 font-semibold text-lg">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to automate your business? Let's talk.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <Input placeholder="Your Name" className="border-gray-300" />
                  <Input placeholder="Email Address" type="email" className="border-gray-300" />
                  <Textarea placeholder="Tell us about your automation needs..." rows={6} className="border-gray-300" />
                  <Button className="w-full bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-[#1FB2A5] mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">jack@peak3.ai</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-[#1FB2A5] mr-4" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">Global • Remote-first</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1FB2A5]/10 to-[#FFB383]/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours. For urgent automation needs, we're available for same-day
                  consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1E40] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Peak3 — AI & Automation Studio</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isWaitlistModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Join Our Waitlist</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsWaitlistModalOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Work Email" type="email" />
                <input type="hidden" name="current-page" value="homepage" />
                <input type="text" name="data-bait" style={{ display: "none" }} />
                <Button className="w-full bg-[#1FB2A5] hover:bg-[#1FB2A5]/90 text-white">Join Waitlist</Button>
              </form>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Be the first to know when we launch new automation solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
