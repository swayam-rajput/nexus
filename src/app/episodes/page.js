'use client'
import { BlurFade } from '@/components/magicui/blur-fade'
import Navbar from '../components/Navbar'
import PodCard from '../components/PodCard'

const page = () => {
    return (
        <div>
            <Navbar/>
            <BlurFade delay={0.25} inView>
            <div className='flex flex-col sm:px-36 px-10 py-8 gap-6'>
                <div className='font-satoshi sm:text-2xl text-xl'>Episodes</div>
                <div className='flex flex-wrap  gap-8 flex-row'>
                    <PodCard/>
                </div>
            </div>
            </BlurFade>
        </div>  
    )
}

export default page