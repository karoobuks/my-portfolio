import ProjectCard from '../components/ProjectCard'
import { Search, Filter, Grid, List, Plus, BookOpen } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Lemufex Engineering',
    description: 'A comprehensive platform for tech enthusiasts to elevate their skills and transform ideas into reality. Features modern UI/UX, authentication, and cloud integration.',
    stack: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Cloudinary', 'Google Auth'],
    link: 'https://lemufex.vercel.app',
    github: 'https://github.com/karoobuks/lemufex-website',
    language: 'JavaScript',
    stars: 12,
    forks: 3,
    status: 'public',
    lastUpdated: '2 days ago'
  },
  {
    title: 'HotelNova Booking System',
    description: 'Modern hotel booking interface with room listings, availability checking, and reservation management. Responsive design optimized for all devices.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    // link: 'https://hotelnova-demo.vercel.app',
    github: 'https://github.com/karoobuks/HotelNova-NextJS',
    language: 'TypeScript',
    stars: 8,
    forks: 2,
    status: 'public',
    lastUpdated: '5 days ago'
  },
  {
    title: 'Crypto broker backend',
    description: 'Sophisticated crypto trading dashboard with real-time data visualization, portfolio tracking, and advanced analytics for cryptocurrency management.',
    stack: ['React', 'Tailwind CSS', 'Chart.js', 'WebSocket'],
    // link: 'https://vaultnova-dashboard.vercel.app',
    github: 'https://github.com/karoobuks/crypto-broker-backend',
    language: 'JavaScript',
    stars: 15,
    forks: 7,
    status: 'public',
    lastUpdated: '1 week ago'
  },
  {
    title: 'Interstellar-atlas',
    description: 'A single-page application that allows users to expore data about countries and their neighbors using the REST countries API',
    stack: ['React', 'Vite'],
    link: 'https://interstella-peach.vercel.app',
    github: 'https://github.com/karoobuks/interstellar-atlas',
    language: 'JavaScript',
    stars: 6,
    forks: 1,
    status: 'public',
    lastUpdated: '3 days ago'
  },
  // {
  //   title: 'DevTools Collection',
  //   description: 'A curated collection of developer utilities including code formatters, color palette generators, and API testing tools.',
  //   stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
  //   link: 'https://devtools-collection.vercel.app',
  //   github: 'https://github.com/karoobuks/devtools',
  //   language: 'TypeScript',
  //   stars: 22,
  //   forks: 5,
  //   status: 'public',
  //   lastUpdated: '4 days ago'
  // },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website built with Next.js and Tailwind CSS, featuring GitHub-inspired design and modern animations.',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    link: 'https://manuelobuks.vercel.app',
    github: 'https://github.com/karoobuks/my-portfolio',  
    language: 'JavaScript',
    stars: 4,
    forks: 1,
    status: 'public',
    lastUpdated: '1 day ago'
  }
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const languages = ['all', ...new Set(projects.map(p => p.language))]
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLanguage = selectedLanguage === 'all' || project.language === selectedLanguage
    return matchesSearch && matchesLanguage
  })

  const totalStars = projects.reduce((sum, project) => sum + (project.stars || 0), 0)
  const totalForks = projects.reduce((sum, project) => sum + (project.forks || 0), 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <p className="text-muted mt-2">
              A collection of my open source projects and experiments
            </p>
          </div>
          <button className="btn-primary px-4 py-2">
            <Plus className="h-4 w-4" />
            New
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-muted">
          <span>{projects.length} repositories</span>
          <span>{totalStars} stars</span>
          <span>{totalForks} forks</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
            <input
              type="text"
              placeholder="Find a repository..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-transparent"
            />
          </div>

          {/* Language Filter */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-2 bg-canvas border border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang === 'all' ? 'All languages' : lang}
              </option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'grid'
                ? 'bg-github-accent-subtle dark:bg-github-dark-accent-subtle text-github-accent-fg dark:text-github-dark-accent-fg'
                : 'hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted'
            }`}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list'
                ? 'bg-github-accent-subtle dark:bg-github-dark-accent-subtle text-github-accent-fg dark:text-github-dark-accent-fg'
                : 'hover:bg-github-neutral-muted dark:hover:bg-github-dark-neutral-muted'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Results */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 mx-auto text-muted mb-4" />
          <h3 className="text-lg font-semibold mb-2">No repositories found</h3>
          <p className="text-muted">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : 'grid-cols-1'
        }`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}