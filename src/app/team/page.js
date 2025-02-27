import { BlurFade } from "@/components/magicui/blur-fade";
import Navbar from "../components/Navbar";
import data from '../data/teams/teams.json';
import Image from "next/image";
import Link from "next/link";
const page = () => {
    const teamData=data;
    console.log(teamData);
    return (
        <div>
            {/* <BlurFade delay={0.25} inView> */}
            <Navbar/>
            <div className='flex font-satoshi flex-col sm:px-36 px-10 py-8 gap-6'>
                <div className='sm:text-2xl font-bold text-xl'>Teams</div>
                <div className='grid grid-cols-2  gap-8 flex-col'>
                    {Object.entries(data).map(([teamKey, team], index) => (
                        <div key={index} className="">
                            <BlurFade delay={0.10* index} inView={false} direction="left" offset={50}>
                            <div className="font-medium text-lg">{team.name || teamKey}</div>
                                <ul className="mt-6 text-sm flex  flex-wrap gap-10">
                                    {team.members.map((member, idx) => (
                                        
                                        <li key={idx} className="  text-gray-600">
                                            <div className=" flex flex-col justify-center items-center gap-6">
                                                <div className="rounded-full border border-gray-400 flex flex-col items-center justify-center size-20 border-none bg-transparent">
                                                    <Image width={80} height={80} src={"/default.jpg"
                                                    } className="rounded-full relative top-4" alt='member' />

                                                    <div className="relative top-0 flex justify-center items-center bg-white size-9 bottom-11 rounded-full">
                                                        <Link href={'/'} className="opacity-90  p-4  hover:opacity-100 transition "> 
                                                            {/* <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth="2" className="hover:stroke-blue-700" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> */}
                                                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none"  xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                                        
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center ">
                                                    <div>{member.name}</div> 
                                                    <div className="font-semibold">{member.role}</div>
                                                </div>

                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </BlurFade>
                        </div>
                    ))}
                {/* {JSON.stringify(teamData)} */}
                </div>
            </div>
            {/* </BlurFade> */}
        </div>  
        
    )
}

export default page