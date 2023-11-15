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
        <div className="py-8 sticky top-0 select-none">
            <div className="container mx-auto h-full px-4">
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
        </div>
     );
}
 
export default Navbar;