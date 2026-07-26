import { marqueeItems } from '../../constants/marquee'

export default function Marquee() {

  return (
    <div
      className="bg-accent border-y border-ink py-3.5 overflow-hidden"
    >
      <div className="flex w-max items-center gap-15 animate-marquee">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="font-display text-[18px] font-black uppercase tracking-wider text-ink whitespace-nowrap"
          >
            {item}
            <span className="ml-5 opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
