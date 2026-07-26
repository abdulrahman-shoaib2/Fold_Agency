import { Page } from '../types/data/PageType'
import CTA from './_homeComponents/CTA'
import Stats from './_homeComponents/Stats'
import Featured from './_homeComponents/Featured'
import Services from './_homeComponents/Services'
import Marquee from './_homeComponents/Marquee'
import Hero from './_homeComponents/Hero'


export default function HomePage({ onNav }: { onNav: (p: Page) => void }) {

  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* Marquee */}
      <Marquee />

      {/* Services */}
      <Services />

      {/* Stats */}
      <Stats />

      {/* Featured work strip */}
      <Featured />

      {/* CTA */}
      <CTA />

      <style>{`.hide-sm { } @media(max-width:640px){.hide-sm{display:none}}`}</style>
    </main>
  )
}
