import Link from 'next/link'
import { Github, Mail, ExternalLink, Code, Database, Globe, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const stats = [
    { label: 'Projects Built', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Years Learning', value: '3+' },
    { label: 'Coffee Consumed', value: '∞' }
  ]

  const skills = [
    { icon: Code, label: 'Frontend Development', desc: 'React, Next.js, TypeScript' },
    { icon: Database, label: 'Backend Development', desc: 'Node.js, Express, APIs' },
    { icon: Globe, label: 'Full-Stack Solutions', desc: 'End-to-end web applications' },
    { icon: Zap, label: 'Performance Optimization', desc: 'Fast, scalable applications' }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-github-success-subtle dark:bg-github-dark-success-subtle text-github-success-fg dark:text-github-dark-success-fg border border-github-success-muted dark:border-github-dark-success-muted">
              <div className="w-2 h-2 bg-github-success-fg dark:bg-github-dark-success-fg rounded-full mr-2 animate-pulse-subtle"></div>
              Available for opportunities
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-github-accent-fg dark:text-github-dark-accent-fg">Emmanuel</span>.
              <br />I build web apps & tools.
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Full-Stack Developer (backend-focused) passionate about creating clean, user-friendly applications. 
              I specialize in modern web technologies and ship features fast. Currently seeking junior roles or freelance projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="btn-primary px-6 py-3">
              <Github className="h-4 w-4" />
              View Repositories
            </Link>
            <Link href="/contact" className="btn-secondary px-6 py-3">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-github-accent-fg dark:text-github-dark-accent-fg">{value}</div>
                <div className="text-sm text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl border border-github-border-default dark:border-github-dark-border-default overflow-hidden">
              <Image
                src="/manuelobuks.jpg"
                alt="Emmanuel Obukevwo"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-github-success-emphasis dark:bg-github-dark-success-emphasis rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">What I Do</h2>
          <p className="text-muted max-w-2xl mx-auto">
            I specialize in building modern web applications with a focus on performance, 
            user experience, and clean code architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="card-hover p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-github-accent-subtle dark:bg-github-dark-accent-subtle flex items-center justify-center">
                <Icon className="h-6 w-6 text-github-accent-fg dark:text-github-dark-accent-fg" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{label}</h3>
                <p className="text-sm text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Ready to work together?</h2>
          <p className="text-muted max-w-md mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary px-6 py-3">
            Start a Conversation
          </Link>
          <a 
            href="https://github.com/karoobuks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary px-6 py-3"
          >
            <ExternalLink className="h-4 w-4" />
            View GitHub Profile
          </a>
        </div>
      </section>
    </div>
  )
}