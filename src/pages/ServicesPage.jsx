import PageHero from '../components/ui/PageHero'
import Services from '../components/sections/Services'

export default function ServicesPage() {
  return (
    <main className="bg-bgc">
      <PageHero 
        eyebrow="Services"
        title="Services designed to move your business forward"
        subtitle="From strategy to launch, we build digital experiences that are thoughtful, fast, and built to grow."
        ghostText="SERVICES"
      />
      <Services />
    </main>
  )
}
