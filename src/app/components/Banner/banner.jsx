import BannerLogo from '../../../../public/banner.png'
import Image from 'next/image'
import { oswald } from '../sharedComponents/Navbar/navBar'
import Link from 'next/link'
const banner = () => {
  return (
    <div className='my-5 bg-[var(--bannerbg)] rounded-2xl'>
        <div className='py-8 flex justify-between py-10 px-20 items-center'>
            <div className='space-y-7'>
            <p className='text-[var(--themecolor)] text-s'>WORKOUT LIBRARY</p>
            <h1 className={`${oswald.className} text-5xl font-bold`}>
                TRAIN WITH INTENT.LOG <br />EVERY SET.
            </h1>
            <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into today's plan, and watch the week's work add up.</p>
            <Link href='/'><button className='bg-[var(--themecolor)] text-black w-60 font-semibold p-3 rounded-2xl'>BROWSE WORKOUTS</button></Link>
        </div>
        <div>
            <Image src={BannerLogo} alt='Banner img'></Image>
        </div>
        </div>
    </div>
  )
}

export default banner