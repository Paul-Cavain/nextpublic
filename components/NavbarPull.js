import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from '../public/favicon.ico'
import {AiOutlineMenu, AiOutlineBell,  AiOutlineUser} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () =>{
    const [menuOpen, stMenuOpen] = useState(false)
    const handleNav = () =>{
        stMenuOpen(!menuOpen);
    }
    return(
        <nav className="fixed top-0 left-0 right-0 w-full h-20 shadow-xl bg-white z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                <Image
                src={Logo}
                alt="logo"
                width="50"
                height="15"
                className="cursor-pointer"
                priority
                />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        
                        <div className="flex flex-row md:space-x-4">
                            <div>
                                <Link href="/talks">
                                    <AiOutlineBell size={25} />
                                </Link>
                            </div>
                            <div className="flex md:flex-row md:space-x-1 font-extralight">
                                <div>
                                <Link href="/talks">
                                    <AiOutlineUser size={25} />
                                </Link>
                                </div>
                                <div>
                                    <select>
                                        <option>Paul Cavain</option>
                                        <option>Edit Profile</option>
                                        <option>Photo</option>
                                        <option>Settings</option>
                                        <option>Log_Out</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer p-3">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            
        </nav>
    );
}
export default Navbar;