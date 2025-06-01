import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="sticky top-0 z-50 py-2 backdrop-blur-sm bg-[#111111] border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/">
                        <img src="images/logo.png" style={{ height: '35px' }} />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#solutions" className="text-[#ffffff] hover:text-[#00c16a] transition-colors">
                            Solutions
                        </a>
                        <a href="/#case-studies" className="text-[#ffffff] hover:text-[#00c16a] transition-colors">
                            Case Studies
                        </a>
                        <a href="/#founders" className="text-[#ffffff] hover:text-[#00c16a] transition-colors">
                            Our team
                        </a>
                        <a href="/#contact" className="text-[#ffffff] hover:text-[#00c16a] transition-colors">
                            Contact
                        </a>
                        <Button href="/#audit" className="bg-[#00c16a] hover:bg-[#00c16a]/90 text-white">
                            Get a free audit
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-transparent focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="!h-8 !w-8 text-white" /> : <Menu className="!h-8 !w-8 text-white" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#111111] border-t border-[#333]">
                    <div className="px-2 pt-5 pb-5 space-y-1">
                        <a href="/#solutions" onClick={closeMenu} className="block px-3 py-3 text-white hover:text-[#00c16a]">Solutions</a>
                        <a href="/#case-studies" onClick={closeMenu} className="block px-3 py-3 text-white hover:text-[#00c16a]">Case Studies</a>
                        <a href="/#founders" onClick={closeMenu} className="block px-3 py-3 text-white hover:text-[#00c16a]">Our team</a>
                        <a href="/#audit" onClick={closeMenu} className="block px-3 py-3 text-white hover:text-[#00c16a]">Audit</a>
                        <a href="/#contact" onClick={closeMenu} className="block px-3 py-3 text-white hover:text-[#00c16a]">Contact</a>
                        <div className="px-3 py-5">
                            <Button className="w-full bg-[#00c16a] hover:bg-[#00c16a]/90 text-white" onClick={closeMenu}>
                                Get a free audit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
