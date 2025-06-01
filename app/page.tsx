"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import {
    Bot,
    RefreshCw,
    DollarSign,
    MapPin,
    ExternalLink,
    X,
    ArrowRight,
} from "lucide-react"

export default function Peak3Website() {
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false)
    const [animatedStats, setAnimatedStats] = useState({
        glowup: 0,
        forkreport: 0,
        ledgerpro: 0,
    })
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

    const toggleCard = (id: string) => {
        setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
    }

    // for rotating words
    const rotatingWords = ["busy", "slow", "boring"]
    const [displayWord, setDisplayWord] = useState("")
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = rotatingWords[wordIndex];

        const timeout = setTimeout(() => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex(charIndex - 1);
                    setDisplayWord(currentWord.substring(0, charIndex - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % rotatingWords.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    setCharIndex(charIndex + 1);
                    setDisplayWord(currentWord.substring(0, charIndex + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

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
                                if (count >= 96) clearInterval(timer)
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
                                if (count >= 182) clearInterval(timer)
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
        { name: "Meeting Summarization", example: "Instantly turns meetings into shareable notes" },
        { name: "Document Extraction", example: "Pulls key data from contracts and PDFs automatically" },
        { name: "Smart CRM Updates", example: "Logs calls and emails to your CRM with zero effort" },
        { name: "Sentiment Analysis", example: "Detects customer tone to prioritize urgent tickets" },
    ]

    const techLogos = [
        { name: "HubSpot", icon: "https://api.iconify.design/simple-icons/hubspot.svg" },
        { name: "Notion", icon: "https://api.iconify.design/simple-icons/notion.svg" },
        { name: "Slack", icon: "https://api.iconify.design/simple-icons/slack.svg" },
        { name: "Stripe", icon: "https://api.iconify.design/simple-icons/stripe.svg" },
        { name: "Airtable", icon: "https://api.iconify.design/simple-icons/airtable.svg" },
        { name: "Google", icon: "https://api.iconify.design/simple-icons/google.svg" },
        { name: "Linkedin", icon: "https://api.iconify.design/simple-icons/linkedin.svg" },
        { name: "Shopify", icon: "https://api.iconify.design/simple-icons/shopify.svg" },
        { name: "QuickBooks", icon: "https://api.iconify.design/simple-icons/quickbooks.svg" },
        { name: "Zapier", icon: "https://api.iconify.design/simple-icons/zapier.svg" },
        { name: "Intercom", icon: "https://api.iconify.design/simple-icons/intercom.svg" },
        { name: "Calendly", icon: "https://api.iconify.design/simple-icons/calendly.svg" },
        { name: "Dropbox", icon: "https://api.iconify.design/simple-icons/dropbox.svg" },
        { name: "Figma", icon: "https://api.iconify.design/simple-icons/figma.svg" },
        { name: "Trello", icon: "https://api.iconify.design/simple-icons/trello.svg" },
        { name: "Asana", icon: "https://api.iconify.design/simple-icons/asana.svg" },
        { name: "Zendesk", icon: "https://api.iconify.design/simple-icons/zendesk.svg" },
        { name: "Github", icon: "https://api.iconify.design/simple-icons/github.svg" },
        { name: "Salesforce", icon: "https://api.iconify.design/simple-icons/salesforce.svg" },
        { name: "Teams", icon: "https://api.iconify.design/simple-icons/microsoftteams.svg" },
        { name: "Jira", icon: "https://api.iconify.design/simple-icons/jira.svg" },
        { name: "ClickUp", icon: "https://api.iconify.design/simple-icons/clickup.svg" },
        { name: "Basecamp", icon: "https://api.iconify.design/simple-icons/basecamp.svg" },
        { name: "Loom", icon: "https://api.iconify.design/simple-icons/loom.svg" },
        { name: "Miro", icon: "https://api.iconify.design/simple-icons/miro.svg" },
        { name: "Typeform", icon: "https://api.iconify.design/simple-icons/typeform.svg" },
        { name: "Confluence", icon: "https://api.iconify.design/simple-icons/confluence.svg" }
    ]

    const techLogos1a = techLogos.slice(0, 8)
    const techLogos2a = techLogos.slice(8, 16)
    const techLogos3a = techLogos.slice(16, 24)

    const techLogoRowsDesktop = [
        { logos: techLogos1a, animation: "animate-scroll" },
        { logos: techLogos2a, animation: "animate-scroll-reverse" },
        { logos: techLogos3a, animation: "animate-scroll" }
    ]

    const techLogos1b = techLogos.slice(0, 4)
    const techLogos2b = techLogos.slice(4, 8)
    const techLogos3b = techLogos.slice(8, 12)
    const techLogos4b = techLogos.slice(12, 16)
    const techLogos5b = techLogos.slice(16, 20)
    const techLogos6b = techLogos.slice(20, 24)

    const techLogoRowsMobile = [
        { logos: techLogos1b, animation: "animate-scroll" },
        { logos: techLogos2b, animation: "animate-scroll-reverse" },
        { logos: techLogos3b, animation: "animate-scroll" },
        { logos: techLogos4b, animation: "animate-scroll" },
        { logos: techLogos5b, animation: "animate-scroll-reverse" },
        { logos: techLogos6b, animation: "animate-scroll" }
    ]

    const caseStudies = [
        {
            id: "glowup",
            title: "Food & beverage",
            subtitle: "Restaurant review platform",
            problem: "Online platform with restaurant reviews needed more curated content at scale.",
            solution: "Designed & implemented an automated web scraper API, collected & parsed results, cross-verified data with external sources, pushed into database, served into web platform daily.",
            technology: "GPT-4o, RAG, Vector Database, Postgres, Sanity CMS, Next.js, Node Express, Vercel, Auth0, PostHog analytics",
            stat: animatedStats.glowup,
        },
        {
            id: "forkreport",
            title: "Administration",
            subtitle: "CRM integration",
            problem: "Fireflies to Notion connection required but the standard integration did not meet their requirements.",
            solution: "Architected & created a custom workflow pipeline & content watchers including 2-way sync to connect the 2 systems.",
            technology: "Fireflies API, Notion API, Node Express.js, CRON, Webhook handlers, Supabase, Vercel",
            stat: animatedStats.forkreport,
        },
        {
            id: "ledgerpro",
            title: "Banking",
            subtitle: "Transaction monitoring",
            problem: "Client with mobile payments app needed in-house transaction monitoring where they could layer on their own custom ruleset.",
            solution: "Built a modular event-driven pipeline with rule-based filters, fraud scoring, and real-time alerts — allowing the client to define and update rules without redeploying code.",
            technology: "GPT-4o, Node Express, Kafka, Postgres, Redis, TypeScript, Grafana, Docker, GCP",
            stat: animatedStats.ledgerpro,
        },
    ]

    return (
        <div className="min-h-screen bg-[#111111] text-[rgb(11,30,64)]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#111111] to-[#111111]/90 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c16a]/10 to-transparent animate-pulse"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-9 items-center">
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                                Turn <span className="text-[#00c16a]">
                                    {displayWord}
                                    <span className="blink-cursor"></span>
                                </span>
                                <p>work into</p>
                                <p>autonomous growth</p>
                            </h1>
                            <p className="text-xl lg:text-2xl mb-8 mt-8 text-gray-300 leading-relaxed">
                                We design AI agents & automations that slash costs and give you back your time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Button
                                    size="lg"
                                    href="#audit"
                                    className="bg-[#00c16a] hover:bg-[#00c16a]/90 text-white text-lg px-8 py-4"
                                >
                                    Get a free audit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    href="#case-studies"
                                    className="border-white text-[#111111] hover:bg-white hover:text-[#0B1E40] text-lg px-8 py-4"
                                >
                                    See case studies
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-20 lg:mt-0">
                            <div className="w-80 h-80 bg-gradient-to-br from-[#00c16a]/20 to-[#FFB383]/20 rounded-full flex items-center justify-center">
                                <img
                                    src="images/rocket.svg"
                                    className="w-4/5 lg:w-full lg:max-w-xs relative bottom-[40px] left-[40px]"
                                />
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
                        <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#00c16a]">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#00c16a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Bot className="w-8 h-8 text-[#00c16a]" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">AI Agents</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    24/7 chat, lead qualification & internal co-pilots fine tuned on your data.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#00c16a]">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#00c16a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <RefreshCw className="w-8 h-8 text-[#00c16a]" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Automated Workflows</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    End-to-end glue that replaces brittle Zapier chains & manual spreadsheets.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-[#00c16a]">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#00c16a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="w-8 h-8 text-[#00c16a]" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">SaaS Consolidation</h3>
                                <p className="text-gray-600 leading-relaxed">Bespoke tools that retire $2–5k/mo of licenses.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Use-Case Strip */}
            <section
                className="py-16 bg-[#111111] bg-fixed overflow-hidden"
                style={{
                    backgroundImage: "url('/images/logo-repeat.png')",
                    backgroundRepeat: "space",
                    backgroundSize: "70px 50px",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="overflow-x-hidden">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 pb-4">
                            {useCases.map((useCase, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="whitespace-nowrap px-3 py-3 text-[12px] sm:text-xs lg:px-6 lg:py-3 lg:text-sm bg-white hover:bg-[#00c16a] hover:text-white transition-colors cursor-pointer group relative"

                                    title={useCase.example}
                                >
                                    {useCase.name}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#0B1E40] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal w-[90vw] sm:w-64 max-w-xs text-center z-10">
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
                        {caseStudies.map((study) => {
                            const isExpanded = expandedCards[study.id]

                            return (
                                <Card key={study.id} className="group hover:shadow-xl transition-all duration-300">
                                    {/* Header always visible */}
                                    <div className="h-48 bg-gradient-to-br from-black to-[#00c16a]/60 rounded-t-lg flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <h4 className="text-2xl font-bold">{study.title}</h4>
                                            <p className="text-lg opacity-90">{study.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-semibold text-[#111111] mb-2">Problem:</h5>
                                        <p className="text-gray-600">{study.problem}</p>
                                    </div>

                                    {/* Toggle button (only on mobile) */}
                                    <div className="block lg:hidden px-6 pt-4">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="text-[#ffffff] bg-[#111111] flex items-center gap-2 mb-8"
                                            onClick={() => toggleCard(study.id)}
                                        >
                                            {isExpanded ? "Hide study" : "Show study"}
                                            <ChevronDown
                                                className={`h-4 w-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                                                    }`}
                                            />
                                        </Button>
                                    </div>

                                    {/* Content — always visible on desktop, toggled on mobile */}
                                    <CardContent
                                        className={`p-6 ${isExpanded ? "block" : "hidden"} lg:block`}
                                    >

                                        <div className="mb-4">
                                            <h5 className="font-semibold text-[#111111] mb-2">Solution:</h5>
                                            <p className="text-gray-600">{study.solution}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="font-semibold text-[#111111] mb-2">Technology:</h5>
                                            <p className="text-gray-600">{study.technology}</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="font-semibold text-[#111111] mb-2">Hours saved (p/m):</h5>
                                            <div id={`${study.id}-stats`} className="text-gray-600">
                                                <div className="text-4xl font-bold text-[#00c16a]">{study.stat}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>


                </div>
            </section>

            {/* Quote */}
            <section id="quote" className="py-10 bg-[#00c16a]">
                <div className="max-w-4xl mx-auto px-2 text-center">
                    <p className="text-2xl text-[#ffffff] mb-6 leading-snug font-mono">
                        &ldquo;AI has changed the game for business, as we can now automate just about anything&rdquo;
                    </p>
                    <span className="block mt-4 text-gray-600 text-lg font-semibold">— Jack David</span>
                </div>
            </section>

            {/* Founders Section */}
            <section id="founders" className="py-24 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Meet the Founders</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Jack David */}
                        <Card className="p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="w-32 h-32 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                                    <img src="images/jack.jpg" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="flex-1 w-full min-w-0">
                                    <div className="mb-4 flex items-center gap-2">
                                        <h3 className="text-2xl font-bold">Jack David</h3>
                                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">co-founder</span>
                                    </div>

                                    {/* This is the full-width black background block */}
                                    <div className="bg-[#00c16a] text-white sm:text-black sm:bg-transparent -mx-8 px-8 py-2 mb-4">
                                        <p className="font-semibold">Product & AI Strategy</p>
                                    </div>

                                    <ul className="text-gray-600 space-y-2 mb-4">
                                        <li>• 7 yrs crafting AI-first products & data pipelines</li>
                                        <li>• 9fin head of ESG SaaS for investors</li>
                                        <li>• PwC tech consulting</li>
                                    </ul>
                                    <div className="text-sm text-gray-500">
                                        <strong>Toolbelt:</strong> n8n, Supabase, Python LLMs, APIs
                                    </div>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="mt-4 p-0"
                                    >
                                        <a
                                            href="https://www.linkedin.com/in/jack-david-6225847a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 bg-gray-300 mt-8"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Brett Spradbury */}
                        <Card className="p-8">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="w-32 h-32 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                                    <img src="images/brett.jpg" className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div className="flex-1 w-full min-w-0">
                                    <div className="mb-4 flex items-center gap-2">
                                        <h3 className="text-2xl font-bold -ml-5 sm:ml-0">Brett Spradbury</h3>
                                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">co-founder</span>
                                    </div>

                                    {/* This is the full-width black background block */}
                                    <div className="bg-[#111111] text-white sm:text-black sm:bg-transparent -mx-8 px-8 py-2 mb-4">
                                        <p className="font-semibold">Engineering Lead</p>
                                    </div>

                                    <ul className="text-gray-600 space-y-2 mb-4">
                                        <li>• 12+ yrs full-stack dev, AI agents & automation</li>
                                        <li>• Startups, banks & Fortune 500 projects</li>
                                        <li>• Delivered apps across mobile, web & cloud</li>
                                    </ul>
                                    <div className="text-sm text-gray-500">
                                        <strong>Toolbelt: </strong>React, Next, Vue, Node, GCP, AWS, Supabase, Docker, Playwright, LangChain, Pinecone
                                    </div>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="sm"
                                        className="mt-4 p-0"
                                    >
                                        <a
                                            href="https://www.linkedin.com/in/brett-spradbury"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-4 py-2 bg-gray-300 mt-8"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Clients */}
            <section id="clients" className="py-24 bg-[#ffffff]">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-center text-2xl font-semibold mb-20 text-[#111111]">
                        Businesses that trust us:
                    </h3>
                    <div className="flex flex-wrap justify-around gap-x-8 gap-y-8 sm:gap-x-10 sm:gap-y-6">
                        <img src="images/clients/9fin.svg" alt="9fin" className="h-12 object-contain" />
                        <img src="images/clients/bpm.png" alt="BPM" className="h-12 object-contain" />
                        <img src="images/clients/h&s.jpg" alt="H&S" className="h-12 object-contain" />
                        <img src="images/clients/lyka.svg" alt="Lyka" className="h-12 object-contain" />
                        <img src="images/clients/pwc.svg" alt="PwC" className="h-12 object-contain" />
                        <img src="images/clients/quantium.svg" alt="Quantium" className="h-12 object-contain" />
                        <img src="images/clients/t3.png" alt="T3" className="h-12 object-contain" />
                    </div>
                </div>
            </section>

            {/* Free Audit Banner */}
            <section id="audit" className="py-16 bg-[#111111]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#ffffff]">Claim your free audit:</h2>
                    </div>
                    <p className="text-xl text-[#ffffff]/80 mb-8">
                        "Want to see how we can automate your boring business tasks? We'll map every manual step in your business, estimate ROI, and deliver a blueprint — 100% free with no charge."
                    </p>

                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="p-6">
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        autoComplete="name"
                                        className="border-gray-300"
                                        required
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Work Email"
                                        autoComplete="email"
                                        className="border-gray-300"
                                        required
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <select
                                        name="companySize"
                                        required
                                        defaultValue=""
                                        className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-700"
                                    >
                                        <option value="" disabled>Company Size</option>
                                        <option value="1-10">1–10 employees</option>
                                        <option value="11-50">11–50 employees</option>
                                        <option value="51-250">51–250 employees</option>
                                        <option value="250+">250+ employees</option>
                                    </select>
                                    <Input
                                        type="text"
                                        name="bottleneck"
                                        placeholder="Biggest Bottleneck"
                                        className="border-gray-300"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-[#00c16a] hover:bg-[#00c16a]/90 text-white text-lg py-3"
                                >
                                    Get your free audit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                </div>
            </section>

            {/* Tech Logo Carousel */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-center text-2xl font-semibold mb-12 text-[#111111]">
                        We integrate into everything:
                    </h3>

                    {/* Desktop Version */}
                    <div className="hidden sm:block">
                        {techLogoRowsDesktop.map((row, rowIndex) => (
                            <div key={rowIndex} className="overflow-hidden mb-7">
                                <div className={`flex items-center ${row.animation}`}>
                                    {[...row.logos, ...row.logos].map((logo, index) => (
                                        <div
                                            key={`${rowIndex}-${index}`}
                                            className={`flex items-center space-x-2 text-lg font-semibold ${index === 0 ? 'ml-[5vw]' : 'ml-20'}`}
                                        >
                                            <img src={logo.icon} alt={logo.name} className="h-6 w-6 opacity-40" />
                                            <span className="text-gray-500">{logo.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Version */}
                    <div className="block sm:hidden">
                        {techLogoRowsMobile.map((row, rowIndex) => (
                            <div key={rowIndex} className="overflow-hidden mb-7">
                                <div className={`flex items-center ${row.animation}`}>
                                    {[...row.logos, ...row.logos].map((logo, index) => (
                                        <div
                                            key={`${rowIndex}-${index}`}
                                            className={`flex items-center space-x-2 text-lg font-semibold ${index === 0 ? 'ml-[5vw]' : 'ml-20'}`}
                                        >
                                            <img src={logo.icon} alt={logo.name} className="h-6 w-6 opacity-40" />
                                            <span className="text-gray-500">{logo.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-[#F9FAFB]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-600">Ready to automate your business? Let's talk.</p>
                    </div>

                    <div className="px-4 lg:px-0 grid lg:grid-cols-2 gap-12">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                                <form className="space-y-6">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        autoComplete="name"
                                        required
                                        className="border-gray-300"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        autoComplete="email"
                                        required
                                        className="border-gray-300"
                                    />
                                    <Textarea
                                        name="message"
                                        placeholder="Tell us about your automation needs..."
                                        rows={6}
                                        autoComplete="off"
                                        required
                                        className="border-gray-300"
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#00c16a] hover:bg-[#00c16a]/90 text-white"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>


                        <div className="space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Our locations</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-[#00c16a] flex-shrink-0" />
                                        <p className="text-gray-600">
                                            44 Montgomery St, San Francisco, CA 94104, USA
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-[#00c16a] flex-shrink-0" />
                                        <p className="text-gray-600">
                                            Rua Visconde de Pirajá 495, Ipanema 22410-002, Rio de Janeiro, Brazil
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-[#00c16a] flex-shrink-0" />
                                        <p className="text-gray-600">
                                            90 York Way, London N1 9AG, UK
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#00c16a]/10 to-[#FFB383]/10 p-6 rounded-lg">
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

            <Footer />

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
                                <Button className="w-full bg-[#00c16a] hover:bg-[#00c16a]/90 text-white">Join Waitlist</Button>
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
