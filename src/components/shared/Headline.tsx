
export default function Headline({label = "WE MAKE THINGS PEOPLE REMEMBER", mainText ={ before: "Creative", highlight: "Studio", after: "That Builds" }, labelStyle, mainTextStyle, labelClasses, mainClasses}: {label?: string, mainText?: {before?:string, highlight?:string, after?:string}, labelStyle?: React.CSSProperties, mainTextStyle?: {mainStyle?: React.CSSProperties, highlightStyle?: React.CSSProperties}, labelClasses?: string, mainClasses?: {main?: string, highlight?: string}}) {
  return (
    <>
      <div className="mb-2">
        <span className={`font-mono text-[11px] tracking-[0.25em] text-accent  ${labelClasses}`} style={labelStyle}>
          {label}
        </span>
      </div>

      <h1 className={`mb-10 font-display text-[clamp(72px,13vw,200px)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-background ${mainClasses?.main}`} style={mainTextStyle?.mainStyle}>
         { mainText?.before} 
        <br />
        <span className={`text-accent italic ${mainClasses?.highlight}`} style={mainTextStyle?.highlightStyle}>
          {mainText?.highlight}
        </span>
        <br />
        { mainText?.after}
      </h1>
    </>

  )
}
