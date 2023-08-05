import LinkedinIcon from '../icons/linkedin'
import GithubIcon from '../icons/github'
import TwitterIcon from '../icons/twitter'
import HashnodeIcon from '../icons/hashnode'
import FooterIcon from "./footerIcon"

export default function Footer():JSX.Element {
    return <div className="flex place-content-between items-center mt-10 text-slate-100 w-full">
        <h4 className='text-slate-200'>© Made by <b>Zack</b></h4>
        <div className='items-start justify-end flex flex-row '>
            <FooterIcon className='mt-1' href='https://github.com/ZackChOfficial/' Icon={GithubIcon} color='#ffffff'/>
            <FooterIcon href='https://www.linkedin.com/in/zakch/' Icon={LinkedinIcon} color='#0072b1' width={32} height={32}/>
            <FooterIcon className='mt-1' href='https://twitter.com/ZACKCH_OFF' Icon={TwitterIcon} color='#1ea1f1' width={32} height={32}/>
            <FooterIcon className='mt-1' href='https://zchatouane.hashnode.dev/' Icon={HashnodeIcon} color='#2862ff' width={24} height={24}/>
        </div>
    </div>
}