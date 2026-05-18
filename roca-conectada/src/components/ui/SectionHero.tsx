interface SectionHeroProps {
  image: string
  caption?: string
  statement?: string
  height?: number
  objectPosition?: string
}

export default function SectionHero({ image, caption, statement, height = 420, objectPosition = 'center 25%' }: SectionHeroProps) {
  const hasOverlay = caption || statement

  return (
    <div className="relative -mx-16 -mt-20 mb-14 overflow-hidden" style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className="h-full w-full object-cover" style={{ objectPosition }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(12,11,9,0.94) 0%, rgba(12,11,9,0.65) 45%, rgba(12,11,9,0.15) 100%)',
      }} />
      {hasOverlay && (
        <div className="absolute inset-0 flex flex-col justify-end px-16 pb-12">
          {caption && (
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-[9px] font-bold uppercase tracking-[3px]"
              style={{ borderColor: 'rgba(200,85,48,0.4)', background: 'rgba(200,85,48,0.1)', color: 'var(--terra)' }}>
              {caption}
            </span>
          )}
          {statement && (
            <p className="text-[38px] font-bold leading-[1.1] tracking-[-0.3px]"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--txt)', maxWidth: '640px' }}>
              {statement.split('\n').map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
