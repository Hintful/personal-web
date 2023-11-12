const { default: Link } = require("next/link")

const Logo = () => {
    return ( 
        <Link href="/">
            <div className="text-xl font-bold select-none hover:text-slate-600 transition duration-75 ease-in-out tracking-tighter text-slate-200">
                Kurt Choi
            </div>
        </Link>
    );
}
 
export default Logo;