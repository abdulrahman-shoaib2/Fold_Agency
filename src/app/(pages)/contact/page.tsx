import Headline from '@/components/shared/Headline'
import { info } from '@/constants/companyInfo'
import ContactForm from './_contactComponents/ContactForm'

export default function ContactPage() {

  return (
    <main className="bg-background min-h-screen pt-16">
      {/* Header strip */}
      <div className="border-b-4 border-accent bg-foreground px-8 pt-20 pb-[60px]">
        <div className="mx-auto max-w-[1400px]">
          <Headline label="GET IN TOUCH" mainText={{ before: "Let's Build", highlight: "Something." }} labelClasses='mb-5 block font-mono text-[10px] tracking-[0.25em] text-[#666]!' mainClasses={{ main: "font-display text-[clamp(52px,9vw,130px)]! font-black uppercase leading-[0.88] tracking-[-0.04em] text-background", highlight: "text-accent" }} />
        </div>
      </div>


      <div className="contact-grid mx-auto grid h-full max-w-[1400px] grid-cols-1 items-start gap-20 px-8 lg:grid-cols-[1fr_3fr]">
        <div className="py-16" >
          <div className="bg-[#0f0f0f] p-4 outline-3 outline-offset-5 outline-accent">
            {info.map((item, i) => (
              <div
                key={item.label}
                className={`${i !== info.length - 1 ? "border-b border-neutral-300" : ""}`}
              >
                <span className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-white">
                  {item.label}
                </span>

                <p className="font-sans text-[15px] leading-[1.5] text-white">
                  {item.val}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-ink bg-accent p-6">
            <span className="mb-2 block font-mono text-[9px] tracking-[0.2em] text-ink opacity-60">
              AVAILABILITY
            </span>

            <p className="font-display text-[22px] font-black uppercase text-ink">
              Open for Q3 2026
            </p>
          </div>
        </div>

        <div className="py-16">
          <ContactForm />
        </div>
      </div>



      <style>{`
        .contact-grid { }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>
    </main>
  )
}

