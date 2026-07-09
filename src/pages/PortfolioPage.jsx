import PageHero from '../components/ui/PageHero'
import Work from '../components/sections/Work'
import SEO from '../components/ui/SEO'

export default function PortfolioPage() {
  return (
    <main className="bg-bgc">
      <SEO title="Portfolio" description="Our selected works." />
      <PageHero 
        eyebrow="Portfolio"
        title="A selection of work built with intention"
        subtitle="Each project blends design, development, and strategy to create experiences that feel polished and perform beautifully."
        ghostText="PORTFOLIO"
      />
      <Work showAll={true} />
    </main>
  )
}
