import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="h-14 bg-deepgray sticky top-0 select-none">
            <div className="container mx-auto h-full px-4">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <ul className="hidden md:flex gap-x-6 text-white text-sm">
                        <li>
                            <Link href="/about">
                                <p className="hover:text-slate-600 transition duration-75 ease-in-out">About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <p className="hover:text-slate-600 transition duration-75 ease-in-out">Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto border-b drop-shadow-[0_5px_3px_rgba(255,255,255,0.25)]"/>
        </div>
     );
}
 
export default Navbar;