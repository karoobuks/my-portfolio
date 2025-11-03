import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      href: "https://github.com/karoobuks",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "mailto:manuelobukevwo@gmail.com",
      icon: Mail,
      label: "Email"
    },
    {
      href: "https://linkedin.com/in/emmanuel-obukevwo",
      icon: Linkedin,
      label: "LinkedIn"
    }
  ]

  const quickLinks = [
    { href: "/", label: "Overview" },
    { href: "/projects", label: "Repositories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <footer className="border-t border-default bg-canvas-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis flex items-center justify-center">
                <span className="text-sm font-bold text-white">EO</span>
              </div>
              <span className="font-semibold text-lg">Emmanuel Obukevwo</span>
            </div>
            <p className="text-muted max-w-md mb-4">
              Full-Stack Developer passionate about creating clean, user-friendly applications. 
              Specializing in modern web technologies and always learning new tools.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted group-hover:text-github-accent-fg dark:group-hover:text-github-dark-accent-fg transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-muted hover:text-github-accent-fg dark:hover:text-github-dark-accent-fg transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Next.js & React</li>
              <li>Node.js & Express</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>MongoDB & PostgreSQL</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-default flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear} Emmanuel Obukevwo. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/karoobuks/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-github-accent-fg dark:hover:text-github-dark-accent-fg transition-colors text-sm flex items-center gap-1"
            >
              View Source
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}