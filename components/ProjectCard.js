import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react'

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    stack,
    link,
    github,
    stars = 0,
    forks = 0,
    language = 'JavaScript',
    status = 'public',
    lastUpdated = '2 days ago'
  } = project

  const getLanguageColor = (lang) => {
    const colors = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      React: 'bg-cyan-400',
      'Next.js': 'bg-black dark:bg-white',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-600'
    }
    return colors[lang] || 'bg-gray-400'
  }

  return (
    <article className="card-hover p-6 space-y-4 group">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-github-accent-emphasis dark:bg-github-dark-accent-emphasis"></div>
          <h3 className="font-semibold text-lg group-hover:text-github-accent-fg dark:group-hover:text-github-dark-accent-fg transition-colors">
            {title}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full border border-github-border-default dark:border-github-dark-border-default text-muted">
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-github-neutral-subtle dark:bg-github-dark-neutral-subtle text-github-fg-default dark:text-github-dark-fg-default border border-github-border-default dark:border-github-dark-border-default"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-github-border-default dark:border-github-dark-border-default">
        <div className="flex items-center space-x-4 text-sm text-muted">
          <div className="flex items-center space-x-1">
            <div className={`w-3 h-3 rounded-full ${getLanguageColor(language)}`}></div>
            <span>{language}</span>
          </div>
          
          {stars > 0 && (
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>{stars}</span>
            </div>
          )}
          
          {forks > 0 && (
            <div className="flex items-center space-x-1">
              <GitFork className="h-3 w-3" />
              <span>{forks}</span>
            </div>
          )}
          
          <span className="text-xs">Updated {lastUpdated}</span>
        </div>

        <div className="flex items-center space-x-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
              aria-label="View source code"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          
          {link && link !== '#' && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
