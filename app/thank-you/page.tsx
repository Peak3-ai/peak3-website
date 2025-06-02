"use client"

import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import "../page.css"

export default function ThankYouPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#ffffff] text-[rgb(11,30,64)]">
            <Navbar />

            <div className="page flex-1 w-full max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <h1>Thank you!</h1>
                <p>We have received your message & will be in contact shortly.</p>
            </div>

            <Footer />
        </div>

    )
}