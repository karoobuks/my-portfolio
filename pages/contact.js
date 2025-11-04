import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manuelobukevwo@gmail.com',
      href: 'mailto:manuelobukevwo@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@karoobuks',
      href: 'https://github.com/karoobuks',
      description: 'Check out my repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Emmanuel Obukevwo',
      href: 'https://linkedin.com/in/emmanuel-obukevwo',
      description: 'Connect with me professionally'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      description: 'Available for remote work'
    }
  ]

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'I usually respond to emails within 24 hours during weekdays.'
    },
    {
      question: 'Are you available for freelance projects?',
      answer: 'Yes! I\'m currently accepting freelance projects and would love to discuss your requirements.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'I specialize in React, Next.js, Node.js, and modern web technologies. Check out my projects page for more details.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones.'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          I'm always interested in new opportunities, interesting projects, or just having a chat about technology. 
          Feel free to reach out through any of the methods below.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Send me a message
            </h2>
            
            {showSuccess ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="h-12 w-12 mx-auto text-github-success-fg dark:text-github-dark-success-fg" />
                <h3 className="text-lg font-semibold">Message sent successfully!</h3>
                <p className="text-muted">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => {
                    setShowSuccess(false)
                    router.push('/contact', undefined, { shallow: true })
                  }}
                  className="btn-secondary px-4 py-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-transparent resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors">
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-2 p-3 text-muted">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <div className="card p-6 space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href, description }) => (
                <div key={label} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-github-accent-subtle dark:bg-github-dark-accent-subtle flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-github-accent-fg dark:text-github-dark-accent-fg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{label}</div>
                    {href ? (
                      <a 
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-github-accent-fg dark:text-github-dark-accent-fg hover:underline break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-muted">{value}</div>
                    )}
                    <div className="text-sm text-muted">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Availability
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Status</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-github-success-fg dark:bg-github-dark-success-fg rounded-full animate-pulse-subtle"></div>
                  Available
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Response Time</span>
                <span>Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Time Zone</span>
                <span>WAT (UTC+1)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Preferred Contact</span>
                <span>Email</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <a 
              href="mailto:manuelobukevwo@gmail.com"
              className="btn-primary px-4 py-3 w-full"
            >
              <Mail className="h-4 w-4" />
              Send Email Directly
            </a>
            <a 
              href="https://github.com/karoobuks"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-3 w-full"
            >
              <Github className="h-4 w-4" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}