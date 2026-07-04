import PageHero from '../components/ui/PageHero'
import Process from '../components/sections/Process'

export default function ProcessPage() {
  return (
    <main className="bg-bgc">
      <PageHero 
        eyebrow="Process"
        title="A clear path from idea to launch"
        subtitle="We keep the process transparent, collaborative, and structured so you always know where the project stands."
        ghostText="PROCESS"
      />
      <Process />
    </main>
  )
}
