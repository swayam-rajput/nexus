'use client'
import Navbar from '../components/Navbar'
import PodCard from '../components/PodCard'

const page = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col sm:px-32 px-10 py-8 gap-6'>
                <div className='font-satoshi sm:text-2xl text-xl'>Episodes</div>
                <div className='flex flex-wrap  gap-8 flex-row'>
                    <PodCard/>
                </div>
            </div>
        </div>  
    )
}

export default page