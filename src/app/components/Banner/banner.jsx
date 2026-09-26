import BannerLogo from '../../../../public/banner.png'
import Image from 'next/image'
import { oswald } from '@/app/fonts'
import Link from 'next/link'
const Banner = () => {
  return (
    <section className="mx-auto my-6 w-full max-w-6xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-xl border border-(--border) bg-(--bannerbg) md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start justify-center px-6 py-10 sm:px-10 md:py-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-(--themecolor)">WORKOUT LIBRARY</p>
          <h1 className={`${oswald.className} mt-4 text-4xl font-bold leading-[1.06] sm:text-5xl`}>
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-(--muted) sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href="#library" className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-(--themecolor) px-5 text-sm font-bold text-black transition-transform hover:translate-y-[-1px]">
            <span aria-hidden="true">↓</span> BROWSE WORKOUTS
          </Link>
        </div>
        <div className="relative aspect-[4/3] min-h-56 bg-(--bannerbg) sm:min-h-72 md:min-h-0">
          <Image src={BannerLogo} alt="Athlete preparing for a strength workout" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-contain p-5 sm:p-7" />
        </div>
      </div>
    </section>
  )
}

export default Banner