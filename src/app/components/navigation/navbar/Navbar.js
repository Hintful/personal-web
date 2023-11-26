import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    const items = [
        // {
        //     name: "About",
        //     link: "/about"
        // },
        {
            name: "Project",
            link: "/project"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    return ( 
        <nav className="py-8 w-full left-0 top-0 fixed z-10 blur-backdrop">
            <div className="container max-w-3xl mx-auto h-full px-12 pt-2">
                <div className="flex justify-between items-center h-full">
                    <Logo />
                    <div>
                        {/* Full size menu */}
                        <ul className="hidden md:flex gap-x-6 text-slate-200 text-sm font-semibold">
                            {
                                items.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href={item.link}>
                                            <p className="hover:text-slate-600 transition duration-75 ease-in-out">{item.name}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        { /* Hamburger menu for mobile viewport */ }
                        <div className="flex md:hidden text-slate-200 font-semibold">
                            <span>
                                Menu
                            </span>
                        </div>
                    </div> 
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;