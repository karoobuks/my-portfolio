import { User, MapPin, Calendar, Github, Mail, Linkedin, ExternalLink, Code, Database, Globe, Zap, Award, BookOpen } from 'lucide-react'

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      items: [
        { name: 'React & Next.js', level: 85 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      items: [
        { name: 'Node.js & Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: Globe,
      items: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vercel/Netlify', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS Basics', level: 55 }
      ]
    }
  ]

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building modern web applications for clients, focusing on user experience and performance optimization.',
      achievements: [
        'Delivered 10+ projects with 100% client satisfaction',
        'Reduced loading times by 40% through optimization',
        'Implemented responsive designs for mobile-first approach'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Personal Projects',
      period: '2022 - 2023',
      description: 'Developed various web applications to learn modern technologies and best practices.',
      achievements: [
        'Built 15+ projects using React and Next.js',
        'Learned backend development with Node.js',
        'Gained experience with databases and APIs'
      ]
    }
  ]

  const certifications = [
    { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023' },
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022' },
    { name: 'React - The Complete Guide', issuer: 'Udemy', year: '2023' }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-github-accent-muted to-github-accent-subtle dark:from-github-dark-accent-muted dark:to-github-dark-accent-subtle border-4 border-github-border-default dark:border-github-dark-border-default overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-github-accent-fg dark:text-github-dark-accent-fg">EO</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-github-success-emphasis dark:bg-github-dark-success-emphasis rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Emmanuel Obukevwo</h1>
          <p className="text-xl text-muted">Full-Stack Developer</p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Nigeria</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Available for work</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <a href="https://github.com/karoobuks" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="mailto:manuelobukevwo@gmail.com" className="btn-secondary px-4 py-2">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href="https://linkedin.com/in/emmanuel-obukevwo" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <User className="h-6 w-6" />
              About Me
            </h2>
            <div className="prose prose-github dark:prose-invert max-w-none">
              <p className="text-muted leading-relaxed">
                I'm a passionate Full-Stack Developer with a strong focus on backend development. 
                My journey in web development started with curiosity about how websites work, 
                and it has evolved into a deep appreciation for clean code, user experience, and performance optimization.
              </p>
              <p className="text-muted leading-relaxed">
                I specialize in building modern web applications using React, Next.js, and Node.js. 
                I enjoy the entire development process, from planning and design to deployment and maintenance. 
                My goal is to create applications that are not only functional but also intuitive and enjoyable to use.
              </p>
              <p className="text-muted leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing my knowledge with the developer community. I believe in continuous learning and staying 
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted">Projects Completed</span>
                <span className="font-semibold">15+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Years of Experience</span>
                <span className="font-semibold">3+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Technologies Used</span>
                <span className="font-semibold">10+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">GitHub Repositories</span>
                <span className="font-semibold">25+</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{cert.name}</div>
                  <div className="text-xs text-muted">{cert.issuer} • {cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Code className="h-6 w-6" />
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ category, icon: Icon, items }) => (
            <div key={category} className="card p-6 space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Icon className="h-5 w-5 text-github-accent-fg dark:text-github-dark-accent-fg" />
                {category}
              </h3>
              <div className="space-y-3">
                {items.map(({ name, level }) => (
                  <div key={name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{name}</span>
                      <span className="text-muted">{level}%</span>
                    </div>
                    <div className="w-full bg-github-neutral-muted dark:bg-github-dark-neutral-muted rounded-full h-2">
                      <div 
                        className="bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis h-2 rounded-full transition-all duration-300"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Experience
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="card p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <p className="text-github-accent-fg dark:text-github-dark-accent-fg">{exp.company}</p>
                </div>
                <span className="text-sm text-muted">{exp.period}</span>
              </div>
              
              <p className="text-muted">{exp.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="w-1 h-1 bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 py-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Let's Work Together</h2>
          <p className="text-muted max-w-md mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:manuelobukevwo@gmail.com" className="btn-primary px-6 py-3">
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
          <a href="/contact" className="btn-secondary px-6 py-3">
            Contact Form
          </a>
        </div>
      </section>
    </div>
  )
}