import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../../../public/logo.png'
import { oswald } from '../Navbar/navBar'

const Footer = () => (
  <footer className="border-t border-(--border) bg-(--background)">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-sm text-(--muted) sm:flex-row sm:items-center sm:px-6">
      <Link href="/" className={`${oswald.className} flex items-center gap-2 font-bold text-(--foreground)`}>
        <Image src={Logo} alt="" width={25} height={25} />
        <span>FITLOG</span>
      </Link>
      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  </footer>
)

export default Footer