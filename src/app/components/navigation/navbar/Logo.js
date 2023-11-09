const { default: Link } = require("next/link")

const Logo = () => {
    return ( 
        <Link href="/">
            <div className="text-white text-lg font-bold select-none hover:text-slate-600 transition duration-75 ease-in-out">
                Kurt
            </div>
        </Link>
    );
}
 
export default Logo;