import PageHero from '../components/ui/PageHero'
import CtaSection from '../components/sections/CtaSection'

export default function ContactPage() {
  return (
    <main className="bg-bgc">
      <PageHero 
        eyebrow="Contact"
        title="Let’s talk about your next project"
        subtitle="Share your idea and we’ll help shape it into a thoughtful digital experience that feels right for your audience."
        ghostText="CONTACT"
      />
      <CtaSection />
    </main>
  )
}
