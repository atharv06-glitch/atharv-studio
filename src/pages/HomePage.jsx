import Hero from '../components/sections/Hero'
import Approach from '../components/sections/Approach'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Work from '../components/sections/Work'
import IndustryFocus from '../components/sections/IndustryFocus'
import CoreValues from '../components/sections/CoreValues'
import Faq from '../components/sections/Faq'
import CtaSection from '../components/sections/CtaSection'
import SEO from '../components/ui/SEO'

export default function HomePage() {
  return (
    <main className="bg-bgc">
      <SEO title="Home" />
      <Hero />
      <Approach />
      <Services />
      <Process />
      <Work />
      <CoreValues />
      <IndustryFocus />
      <Faq />
      <CtaSection />
    </main>
  )
}
