'use client'
import Link from "next/link"
import { useEffect } from "react";
import { initializeTrailer } from "../helpers/helper";

const Navbar = () => {
    // useEffect(() => {
    //         initializeTrailer();
    //     }, []);
    return (
        <div id="nav" className=" font-satoshi sticky top-0 py-2  shadow-sm z-40 backdrop-blur-md ">
            {/* <div id="trailer" className="bg-black " ></div> */}
            <div className="   py-3 sm:px-32  pr-6 gap-4  border-slate-500 flex flex-row justify-between w-full">
                {/* <div className="menu flex flex-row items-center">MENU</div> */}
                
                <div id="logo" className="flex flex-col scale-75 sm:scale-95 justify-center  cursor-pointer hover:opacity-50 transition font-light text-lg ">
                <Link href="/">

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="120"  viewBox="0 0 398.000000 141.000000" preserveAspectRatio="xMidYMid meet">
                        
                        <g transform="translate(0.000000,141.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M1905 1306 c-59 -26 -79 -60 -87 -144 -10 -118 -9 -353 2 -394 14 -50 50 -90 99 -112 71 -33 158 2 191 77 l19 42 -79 3 c-72 3 -80 5 -80 22 0 18 7 20 80 20 64 0 80 3 80 15 0 12 -16 15 -80 15 -63 0 -80 3 -80 15 0 11 18 15 77 17 50 2 78 7 81 16 3 9 -17 12 -77 12 -74 0 -81 2 -81 20 0 17 8 19 77 22 50 2 78 7 81 16 3 9 -17 12 -77 12 -65 0 -81 3 -81 15 0 12 16 15 80 15 63 0 80 3 80 15 0 11 -18 15 -77 17 -64 2 -78 6 -81 20 -3 15 7 18 74 20 51 2 79 7 82 16 3 9 -17 12 -77 12 -74 0 -81 2 -81 20 0 18 7 20 81 20 60 0 80 3 77 13 -3 8 -31 13 -81 15 -59 2 -77 6 -77 17 0 10 12 15 38 16 78 2 97 4 100 14 1 6 -27 12 -65 15 -53 4 -69 9 -71 22 -3 14 6 18 50 20 l53 4 -37 17 c-44 20 -92 21 -133 3z"/>
                        <path d="M357 1004 c-18 -19 17 -24 154 -24 144 0 149 -1 149 -20 0 -31 26 -75 54 -94 16 -10 26 -26 26 -40 0 -29 41 -80 78 -98 15 -8 29 -25 34 -43 10 -40 58 -85 99 -94 26 -5 35 -13 41 -38 10 -39 58 -80 104 -89 47 -9 56 -2 327 254 125 116 228 212 230 212 3 0 7 -46 9 -102 3 -79 9 -115 27 -153 38 -87 122 -158 211 -181 l45 -11 3 -72 3 -71 -61 0 -60 0 0 -45 0 -45 145 0 145 0 0 45 0 45 -60 0 -60 0 0 75 c0 72 1 75 23 75 41 0 145 59 186 106 52 60 72 119 78 237 3 53 7 97 9 97 2 0 45 -40 96 -88 392 -373 407 -386 457 -378 49 8 81 32 102 81 15 34 25 44 51 49 43 8 86 51 94 92 4 20 14 36 25 39 36 12 78 56 85 89 3 19 20 47 39 65 20 19 37 46 41 66 l6 34 149 3 c91 2 149 7 149 13 0 7 -241 10 -702 10 l-703 0 -5 -135 c-6 -150 -14 -175 -74 -228 -64 -56 -141 -66 -223 -28 -93 43 -126 124 -122 290 l3 101 -700 3 c-385 1 -703 -1 -707 -4z m908 -45 c-158 -21 -296 -42 -433 -66 l-93 -16 -25 23 c-14 14 -24 35 -24 52 l0 28 358 -1 357 -1 -140 -19z m475 -96 c0 -138 15 -179 86 -242 101 -89 247 -72 331 37 43 57 53 97 53 220 l0 102 25 0 25 0 0 -108 c0 -148 -17 -202 -84 -268 -97 -97 -217 -117 -335 -57 -61 31 -125 104 -141 163 -5 19 -10 88 -10 153 l0 117 25 0 25 0 0 -117z m1520 92 c0 -25 -39 -75 -59 -75 -6 0 -90 13 -188 29 -98 16 -216 35 -263 41 -47 6 -112 15 -145 19 -39 6 66 9 298 10 l357 1 0 -25z m-1761 1 c-10 -10 -631 -206 -653 -206 -9 0 -26 5 -38 11 -24 13 -53 78 -40 91 7 7 258 46 657 101 45 6 79 7 74 3z m1233 -31 c317 -44 441 -65 451 -75 10 -9 -19 -70 -42 -87 -9 -7 -26 -13 -38 -13 -19 0 -588 178 -638 200 -35 15 2 12 267 -25z m-7 -88 c110 -36 233 -75 272 -87 40 -12 75 -26 78 -30 3 -5 -1 -25 -9 -45 -21 -49 -72 -71 -118 -51 -40 17 -549 304 -562 317 -6 5 24 -2 65 -15 40 -14 164 -54 274 -89z m-1166 99 c-8 -8 -534 -302 -562 -314 -22 -10 -34 -9 -62 2 -32 14 -65 59 -65 88 0 9 116 51 333 120 303 97 368 116 356 104z m-36 -88 c-43 -40 -116 -109 -163 -154 -201 -190 -218 -204 -251 -204 -36 0 -99 55 -99 87 0 13 38 40 138 96 374 211 438 247 444 247 4 0 -27 -33 -69 -72z m1012 -25 c256 -146 278 -159 343 -194 73 -39 77 -56 28 -105 -47 -47 -83 -46 -138 3 -37 32 -194 179 -373 347 -65 62 -43 54 140 -51z"/>
                        </g>
                    </svg>
                </Link>
                    {/* The Nexus Table */}
                </div>
                <div className="flex uppercase  sm:text-sm text-xs items-center  flex-row gap-6">
                    <Link href="/episodes" >
                        <div className=" py-1 transition border-black border-b border-opacity-0 hover:border-opacity-100  cursor-pointer">
                                Episodes
                        </div>
                    </Link>
                    <div className=" py-1 transition border-black border-b border-opacity-0 hover:border-opacity-100  cursor-pointer">
                        Contact</div>
                    <Link href="/team">
                        <div className=" py-1 transition border-black border-b border-opacity-0 hover:border-opacity-100  cursor-pointer">
                                Team
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar