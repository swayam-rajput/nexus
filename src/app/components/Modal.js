// import { Button } from "@/components/ui/button"

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import Image from "next/image";
import { HeroVideoDialogDemo } from "./HeroVideoDialog";
const Modal = ({showModal})=> {
    console.log(showModal);
    if (!showModal){
        return (<></>)
    }
    return (
        <div className="flex text-black opacity-100 flex-col ">
            <div className="gap-4 flex flex-col">
                <div className="flex flex-col gap-4 justify-between">
                    {/* <div className="rounded-lg flex items-start     ">
                        <Image className="rounded-lg object-contain" width={400} height={600} src={'/ep1.jpg'} alt="ep1" ></Image>
                    </div> */}
                    <div className="title flex flex-row gap-1  font-bold text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M460-120v-325.62q-10.31-6.38-15.15-14.86-4.85-8.47-4.85-19.61 0-15.99 11.96-27.95Q463.92-520 480-520t28.04 11.96Q520-496.08 520-480.18q0 11.07-4.85 19.74-4.84 8.67-15.15 14.82V-120h-40Zm-227.54-98.46q-52.38-49.62-82.42-116.73Q120-402.3 120-479.77q0-74.77 28.34-140.51 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.36 65.73 28.36 114.36 76.97 48.63 48.62 76.99 114.34Q840-554.61 840-479.89q0 77.43-30.04 144.74-30.04 67.3-82.42 116.69L700-246.77q46-43.85 73-104.16 27-60.3 27-129.07 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-28.54 28.54Zm113-113q-30.38-27.62-47.92-65.83Q280-435.49 280-480q0-83.33 58.28-141.67Q396.56-680 479.82-680q83.26 0 141.72 58.42Q680-563.16 680-479.7q0 44.24-17.54 82.55-17.54 38.3-47.92 65.69L586-360q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-28.54 28.54Z"/></svg>
                        SIH Discussion
                    </div>
                </div>
                <div className="flex flex-col gap-0.5 ">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> */}
                    {/* <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d='M16 6.429C16 4.535 14.21 3 12 3S8 4.535 8 6.429v5.142C8 13.465 9.79 15 12 15s4-1.535 4-3.429z'/><path d='M5 11a7 7 0 1 0 14 0m-7 7v3m-4 0h8'/>
                    </svg> */}
                    <div className="guests flex flex-col justify-center font-semibold">
                        Guest
                    </div>
                    <div className="guests flex flex-col justify-center font-medium">
                        Dinesh Aher, Jagdish Raut
                    </div>

            
                    <div className="team font-medium">
                        <div className="team flex flex-col justify-center font-semibold">
                            Team
                        </div>
                        
                    </div>
                </div>
                    <div className="title  text-base">[summary]</div>
            </div>

        </div>
        // <Dialog>
        //     <DialogTrigger>Open</DialogTrigger>
        //     <DialogContent>
        //         <DialogHeader>
        //         <DialogTitle>Are you absolutely sure?</DialogTitle>
        //         <DialogDescription>
        //             This action cannot be undone. This will permanently delete your account
        //             and remove your data from our servers.
        //         </DialogDescription>
        //         </DialogHeader>
        //     </DialogContent>
        // </Dialog>
    )
}
export default Modal;