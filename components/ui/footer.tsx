export default function Footer() {

    return (
        <footer className="bg-[#111111] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400">© 2025 Peak3 — AI & Automation Studio</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="privacy" className="text-gray-400 hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
