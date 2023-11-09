import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="w-full h-20 bg-gray-700 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div>
                        Hello
                    </div>
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/about">
                                <p>About Me</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <p>Contact Me</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;