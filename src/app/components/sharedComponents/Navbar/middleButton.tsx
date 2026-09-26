'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface middleBtnProps{
    href:string;
    name:string;
}
const MiddleButton = ({href,name}:middleBtnProps) => {
        const pathName=usePathname();
        const isActive = href === '/' ? pathName === '/' : pathName === href || pathName.startsWith(`${href}/`)
  return (
    <Link href={href}>
        <span aria-current={isActive ? 'page' : undefined} className={`inline-flex min-h-10 items-center justify-center rounded-full px-5 text-sm transition-colors ${isActive ? 'bg-[var(--navBarbtnback)] font-semibold text-[var(--themecolor)]' : 'text-[var(--muted)] hover:text-white'}`}>{name}</span>
    </Link>
  )
}

export default MiddleButton