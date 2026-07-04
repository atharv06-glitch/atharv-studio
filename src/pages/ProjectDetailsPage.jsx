import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { useEffect } from 'react'
import SEO from '../components/ui/SEO'

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const project = PROJECTS.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-center px-6">
        <SEO title="Project Not Found" />
        <h1 className="text-4xl font-display font-bold text-ink mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-accent hover:underline font-semibold">
          ← Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <main className="pt-24 pb-32">
      <SEO title={project.title} description={project.overview} />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 lg:mb-24">
        <span className="eyebrow">{project.type}</span>
        <h1 className="font-display font-bold text-5xl lg:text-7xl text-ink leading-tight mb-8">
          {project.title}
        </h1>
        <div className="aspect-video w-full rounded-3xl overflow-hidden mb-16">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 border-t border-bdr pt-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-bold text-ink mb-4">Overview</h2>
            <p className="text-muted text-lg leading-relaxed">
              {project.overview}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">Client</h3>
              <p className="text-muted">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">Year</h3>
              <p className="text-muted">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">Services</h3>
              <ul className="text-muted space-y-1">
                {project.services.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            {project.link && (
              <div className="pt-6">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-accent-dark transition-colors w-full sm:w-auto"
                >
                  Visit Live Site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project CTA could go here */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mt-32">
         <Link to="/portfolio" className="inline-block border border-bdr px-8 py-4 rounded-full font-bold text-ink hover:bg-ink hover:text-bgc transition-colors">
            View All Projects
         </Link>
      </div>
    </main>
  )
}
