import PageHero from '../components/ui/PageHero'
import DemoProjects from '../components/sections/DemoProjects'
import SEO from '../components/ui/SEO'

export default function DemosPage() {
  return (
    <main className="bg-bgc">
      <SEO title="Live Demos" description="Explore our interactive premium landing pages." />
      <PageHero 
        eyebrow="Live Previews"
        title="Interactive Client Demonstrations"
        subtitle="Explore our collection of high-performance, industry-specific landing pages designed to convert."
        ghostText="DEMOS"
      />
      <DemoProjects />
    </main>
  )
}
