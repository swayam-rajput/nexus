'use client'
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"
const PodCard = ({title,imgsrc}) => {
    return (
        <div className="flex flex-col w-96   gap-4 p-6 rounded-lg justify-between  border-2 transition border-slate-200 shadow  hover:border-slate-300">
            <div  className="image  transition duration-700">
                <AspectRatio ratio={4/3}>
                    < Image placeholder="blur" blurDataURL="/ep1.jpg" width={600} height={600} className="flex rounded-md outline-none h-60 w-full object-cover" src="/ep1.jpg" alt=""/>

                </AspectRatio>
                {/* <Image width={600} height={600} className="flex rounded-md outline-none h-60 w-full object-cover" src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/> */}
            </div>
            <div className="flex flex-row gap-6 text-sm justify-between">
                <div className="flex items-center gap-0.5 opacity-70 flex-row">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M16.5 5V3m-9 2V3M3.25 8h17.5M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412.753.362 1.364.94 1.748 1.65.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z'/></svg>
                    <div>Jan 8, 2025</div>
                    
                </div>
                
                <div className="flex items-center gap-0.5 opacity-70 flex-row">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 6v6l4 2'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/></svg>
                    time
                </div>
            
            </div>
            <div className="text-wrap font-medium">SIH Discussion </div>
            
            <div className="title flex gap-2 items-start font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <div className="guests font-normal">
                    Dinesh Aher, Jagdish Raut
                </div>
            </div>
            <div className="spotify-youtube flex flex-row justify-between gap-4">
                <div className="font-light opacity-65">Play </div>
                <div className="flex flex-row gap-4">
                    <div>
                        <a href="">
                            <svg  className="cursor-pointer transition hover:stroke-green-500" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M8.72 15.384c2.018-.8 4.239-.5 6.055.7m-6.963-3.7c2.725-1 5.752-.7 8.073 1M6.5 9.284c3.633-1.4 7.77-.9 11 1.3'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/></svg>

                        </a>
                    </div>
                    <div>
                        <a href="">
                            <svg className="cursor-pointer transition hover:stroke-red-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>

                        </a>
                    </div>

                </div>
                
            </div>
        </div>
        
    )
}

export default PodCard