import Link from 'next/link'
import { oswald } from './components/sharedComponents/Navbar/navBar'

const NotFound = () => (
  <main className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
    <p className="text-xs font-semibold tracking-[0.14em] text-(--themecolor)">404 / NOT FOUND</p>
    <h1 className={`${oswald.className} mt-3 text-4xl font-bold sm:text-5xl`}>THAT LIFT ISN&apos;T HERE.</h1>
    <p className="mt-3 text-sm text-(--muted)">The page may have moved, or that workout does not exist.</p>
    <Link href="/" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-(--themecolor) px-5 text-sm font-semibold text-black">Back to workouts</Link>
  </main>
)

export default NotFound