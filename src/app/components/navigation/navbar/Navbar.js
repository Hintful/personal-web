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
        <nav className="py-8 w-full left-0 top-0 fixed z-10 backdrop-blur-md">
            <div className="container max-w-3xl mx-auto h-full px-8">
                <div className="flex justify-between items-center h-full">
                    <Logo />
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
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;