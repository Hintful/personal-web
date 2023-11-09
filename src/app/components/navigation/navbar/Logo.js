const { default: Link } = require("next/link")

const Logo = () => {
    return ( 
        <Link href="/">
            <div className="text-white text-lg font-bold select-none">
                Kurt
            </div>
        </Link>
    );
}
 
export default Logo;