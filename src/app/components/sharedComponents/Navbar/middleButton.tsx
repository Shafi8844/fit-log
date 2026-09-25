'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface middleBtnProps{
    href:string;
    name:string;
}
const middleButton = ({href,name}:middleBtnProps) => {
        const pathName=usePathname();
        let isActive=false;
        if(pathName===href){
            isActive=true
        }
  return (
    <Link href={href}>
        <button className={`${isActive? "bg-[var(--navBarbtnback)] text-[var(--themecolor)] w-24 rounded-2xl p-2 font-semibold":" "}`}>{name}</button>
    </Link>
  )
}

export default middleButton