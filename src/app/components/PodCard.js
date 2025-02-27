'use client'
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Modal from "./Modal"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState } from "react"
import { HeroVideoDialogDemo } from "./HeroVideoDialog"
import { BlurFade } from "@/components/magicui/blur-fade"
const PodCard = ({title,imgsrc}) => {
    const [modal,setModal] = useState(true)
    return (
        <div className="flex flex-col sm:w-80 w-96 gap-4 p-6 rounded-lg justify-between  border-2 transition border-slate-200 shadow  hover:border-slate-300">
            <div className="mt-4 z-50 transition duration-700 w-full flex  rounded-lg">
                <AspectRatio ratio={4/3}>
                    <HeroVideoDialogDemo />                        
                </AspectRatio>
            </div>
            
            <div className="flex flex-row gap-6 text-sm justify-between">
                <div className="flex items-center gap-1 opacity-70 flex-row">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M16.5 5V3m-9 2V3M3.25 8h17.5M3 10.044c0-2.115 0-3.173.436-3.981a3.9 3.9 0 0 1 1.748-1.651C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.412.753.362 1.364.94 1.748 1.65.436.81.436 1.868.436 3.983v4.912c0 2.115 0 3.173-.436 3.981a3.9 3.9 0 0 1-1.748 1.651C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.412a3.9 3.9 0 0 1-1.748-1.65C3 18.128 3 17.07 3 14.955z'/></svg>
                    Jan 8, 2025
                    
                </div>
                
                <div className="flex items-center gap-0.5 opacity-70 flex-row">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 6v6l4 2'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/></svg>
                    47:13
                </div>
            
            </div>
            <div className="text-wrap flex gap-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M460-120v-325.62q-10.31-6.38-15.15-14.86-4.85-8.47-4.85-19.61 0-15.99 11.96-27.95Q463.92-520 480-520t28.04 11.96Q520-496.08 520-480.18q0 11.07-4.85 19.74-4.84 8.67-15.15 14.82V-120h-40Zm-227.54-98.46q-52.38-49.62-82.42-116.73Q120-402.3 120-479.77q0-74.77 28.34-140.51 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.36 65.73 28.36 114.36 76.97 48.63 48.62 76.99 114.34Q840-554.61 840-479.89q0 77.43-30.04 144.74-30.04 67.3-82.42 116.69L700-246.77q46-43.85 73-104.16 27-60.3 27-129.07 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-28.54 28.54Zm113-113q-30.38-27.62-47.92-65.83Q280-435.49 280-480q0-83.33 58.28-141.67Q396.56-680 479.82-680q83.26 0 141.72 58.42Q680-563.16 680-479.7q0 44.24-17.54 82.55-17.54 38.3-47.92 65.69L586-360q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-28.54 28.54Z"/></svg>
                    <div className="font-medium">SIH Discussion</div>
                    
            </div>
        
            <div className="title flex gap-1.5 items-start font-medium">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d='M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z'/><path d='M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8'/>
                </svg>
                <div className="guests font-normal">
                    Dinesh Aher, Jagdish Raut
                </div>
            </div>
            <div className="spotify-youtube flex flex-row-reverse items-center justify-between gap-4">
                <div className="">
                    <div className="relative bottom-0">
                        {/* <Modal showModal={modal}></Modal> */}
                        <Dialog >
                            <DialogTrigger >
                                <svg onClick={()=>setModal(!modal)} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" className="cursor-pointer hover:scale-110 transition " strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="9"/>
                                    <line x1="12" y1="16" x2="12" y2="10"/>
                                    <line x1="11.9" y1="8" x2="12.01" y2="8"/>
                                
                                    {/* <circle  cx="12" cy="12" r="10"/>
                                    <polygon points="10 8 16 12 10 16 10 8"/> */}
                                </svg>

                            </DialogTrigger>
                            <DialogContent className='flex scale-110 font-satoshi rounded-xl flex-col p-8 md:max-w-xl max-w-xs'>
                                <DialogTitle className='font-medium border-b my-4 mx-auto pb-2'>Episode Details</DialogTitle>
                                <DialogDescription asChild>
                                    <span className='opacity-100 text-black'>
                                        <Modal showModal={true}/>
                                    </span>
                                
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div>
                        <a href="">
                            <svg  className="cursor-pointer hover:scale-110 transition hover:stroke-green-500" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M8.72 15.384c2.018-.8 4.239-.5 6.055.7m-6.963-3.7c2.725-1 5.752-.7 8.073 1M6.5 9.284c3.633-1.4 7.77-.9 11 1.3'/><path d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'/></svg>

                        </a>
                    </div>
                    <div>
                        <a href="">
                            <svg className="cursor-pointer hover:scale-110 transition hover:stroke-red-500" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>

                        </a>
                    </div>

                </div>
                
            </div>
        </div>
        
    )
}

export default PodCard