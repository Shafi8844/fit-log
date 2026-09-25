import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../../public/logo.png'
import { Oswald } from 'next/font/google'
import MiddleButton from './middleButton'

 export const oswald = Oswald({
  subsets: ["latin"],

});
const navBar = () => {
  return (
    <div className='flex justify-between font-200 items-center'>
        <div className={`${oswald.className} text-2xl flex items-center space-x-2 font-bold`}>
          <Link href="/"><Image
        src={Logo} alt='logo'
        /></Link>
        <Link href='/'><p>FITLOG</p></Link>
        </div>
        <div className='flex space-x-5 items-center'>
          <MiddleButton href='/' name='Workout'/>
        <MiddleButton href='/myPlan' name='My plan'/>
        </div>
        <div className='flex space-x-3 items-center'>
            <button>Plan</button>
            <button>Saved</button>
        </div>
    </div>
  )
}

export default navBar