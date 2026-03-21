import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { BnccSection } from "@/components/bncc-section"
import { Gallery } from "@/components/gallery"
import { Workshops } from "@/components/workshops"
import { RobotGames } from "@/components/robot-games"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import emailjs from "@emailjs/browser"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <BnccSection />
      <Gallery />
      <Workshops />
      <RobotGames />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
