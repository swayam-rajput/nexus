'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import PodCard from "./components/PodCard";
import Link from "next/link";
import blurImage from "./helpers/helper";
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        document.getElementById('symbol').classList.add('blur-sm')
        
        const blurImage = (clsName='.image',state = false) => {
            const images = document.querySelectorAll(clsName); // Ensure it exists
            images.forEach(img => {
                console.log(img.classList);
                if (img) {
                    if (state) {
                    img.classList.add("blur-sm");
                    } else {
                    img.classList.remove("blur-sm");
                    }
                }
            });
        };
        const timeout = setTimeout(() => blurImage('.image',false), 250);

        return () => clearTimeout(timeout); // Cleanup on unmount
    }, []);

    return (
        <div className="flex flex-col pb-8 gap-16 font-[family-name:var(--font-geist-sans)]">
            <Navbar/>
            <main className="flex flex-col  gap-16 mx-32 ">
                
                <div className="flex sm:flex-row flex-col sm:mx-8 gap-6 justify-between">
                    {/* div for welcoming the user to the home page */}
                    <div className="flex font-archivo flex-col justify-center sm:items-start items-center gap-8 w-fit ">
                        <div className="font-normal opacity-80 text-3xl">
                            Welcome to
                        </div>
                        <div className="flex  font-medium border-b-2 w-fit  border-black py-2 text-4xl">   
                            The Nexus Table
                        </div>
                        <div className=" flex font-light flex-col flex-wrap sm:pr-32 py-2 text-2xl">
                            <div className=" flex flex-wrap text-justify  opacity-60 py-2 sm:text-xl text-lg">
                                We dive into the latest in tech, AI breakthroughs, and the ever-evolving world of computer science, featuring insights from industry experts and innovators.  
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <div id="symbol" className="sm:scale-90 image blur-sm transition duration-200 rounded-lg">
                            <Image className="rounded-lg  drop-shadow-md" width={800} height={600} src="/ep1.jpg" alt="Nexus Table" loading="lazy"/>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-6 w-full ">
                    <div className="mx-8 flex items-center justify-between font-satoshi">
                        <div className="font-medium sm:text-4xl text-2xl">
                            Past Episodes
                        </div>
                        
                        <Link href="/episodes" className="">
                        <button className="border flex flex-row gap-1 sm:px-4 sm:py-3 p-2 hover:bg-gray-200 shadow transition  items-center rounded-lg ">
                                <div className="hidden sm:flex">{'View All '}</div>
                                <svg width="20" height="20" fill="none" className="" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6'/></svg>
                        </button>
                        </Link > 
                    </div>
                    <div className="sm:grid sm:grid-cols-3 flex flex-wrap mx-8  gap-8 flex-row">
                        <PodCard />
                        <PodCard/>
                    </div>
                </div>
                
            </main>
        </div>
    );
}
