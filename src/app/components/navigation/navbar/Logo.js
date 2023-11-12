const { default: Link } = require("next/link")

const Logo = () => {
    return ( 
        <Link href="/">
            <div className="text-white text-xl font-bold select-none hover:text-slate-600 transition duration-75 ease-in-out">
                Kurt Choi
            </div>
        </Link>
    );
}
 
export default Logo;