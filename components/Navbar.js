import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X, Github, Mail, ExternalLink } from "lucide-react"

export default function Navbar() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const navLinks = [
    { href: "/", label: "Overview" },
    { href: "/projects", label: "Repositories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://github.com/karoobuks", icon: Github, label: "GitHub" },
    { href: "mailto:manuelobukevwo@gmail.com", icon: Mail, label: "Email" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-default bg-canvas/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis flex items-center justify-center">
              <span className="text-sm font-bold text-white">EO</span>
            </div>
            <span className="hidden sm:block font-semibold text-lg">Emmanuel Obukevwo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  router.pathname === href
                    ? "nav-link-active"
                    : "nav-link"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-default">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    router.pathname === href
                      ? "bg-github-accent-subtle dark:bg-github-dark-accent-subtle text-github-accent-fg dark:text-github-dark-accent-fg"
                      : "nav-link hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted"
                  }`}
                >
                  {label}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
