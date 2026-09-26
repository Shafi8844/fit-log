'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../../public/logo.png'
import MiddleButton from './middleButton'
import { useContext } from 'react'
import { WorkoutContext } from '@/app/context/workoutContext'
import { oswald } from '@/app/fonts'

const NavBar = () => {
  const { todaysPlan, savedPlan } = useContext(WorkoutContext)

  return (
    <header className="border-b border-(--border) bg-(--background)">
      <nav aria-label="Main navigation" className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className={`${oswald.className} flex items-center gap-2 text-xl font-bold`}>
          <Image src={Logo} alt="" priority className="h-8 w-auto" />
          <span>FITLOG</span>
        </Link>
        <div className="col-span-2 row-start-2 flex items-center justify-center gap-2 md:col-span-1 md:row-start-auto">
          <MiddleButton href="/" name="Workout" />
          <MiddleButton href="/my-plan" name="My Plan" />
        </div>
        <div className="flex items-center justify-end gap-2 text-sm">
          <Link href="/my-plan" className="inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-(--muted) transition-colors hover:text-white">
            Plan <span className="grid h-5 min-w-5 place-items-center rounded-full bg-(--themecolor) px-1 text-xs font-semibold text-black">{todaysPlan.length}</span>
          </Link>
          <Link href="/my-plan" className="inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-(--muted) transition-colors hover:text-white">
            Saved <span className="grid h-5 min-w-5 place-items-center rounded-full border border-(--border) px-1 text-xs">{savedPlan.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar