import{
FaApple,FaSearch,FaBars
} from "react-icons/fa"


const navLink=[
    {
        name:<FaApple />,
        href:""
    },
    {
        name: "Store",
        href:""
    },
    {
        name: "ipad",
        href:""
    },
    {
        name: "iphone",
        href:""
    },
    {
        name: "Mac",
        href:""
    },
    {
        name: "Tv&Home",
        href:""
    },
    {
        name: "Entertainment",
        href:""
    },
    {
        name: "Watch",
        href:""
    },
    {
        name: "airpods",
        href:""
    },
    {
        name: "Support",
        href:""
    },
    {
        name:<FaSearch />,
        href:""
    }

];



function Navbar() {

    

    return (
         
        
        <section>
        <nav className="hidden md:hidden lg:block bg-gray-900 text-white p-4 ">
        <div className="container flex items-center">
            <ul className="flex space-x-8 mx-auto flex md:display-none">
            {/*}
            <li>
                 <a href="">
                    <FaApple /></a>
            </li>
            <li>
                <a href="">Store</a>
            </li>
            <li>
                <a href="">Mac</a>
            </li>
            <li>
                <a href="">ipad</a>
            </li>
            <li>
                <a href="">iphone</a>
            </li>
            <li>
                <a href="">Watch</a>
            </li>
            <li>
                <a href="">Airpods</a>
            </li>
            <li>
                <a href="">Accessories</a>
            </li>
            <li>
                <a href="">Tv&Home</a>
            </li>
            <li>
                <a href="">Support</a>
            </li>
            <li>
                <FaSearch />
            </li>

           */}

            {navLink.map((link,index)=>(
                <li key={index}>
                <a href={link.href} 
                className="lg:flex items-center gap-1 hover:text-blue-400">
                    {link.name}
                </a>

            </li>
            ))}

            

            
        </ul>
        </div>
        </nav>
        <ul className="block bg-gray-900 flex text-2xl text-white items-center justify-between px-3 py-3 lg:hidden ">
            <li>
                <FaApple />

            </li>
            <li>
                <FaSearch />
                
            </li>
            <li>
                <FaBars />
                
            </li>
        </ul>
        
        </section>
    );
}
        
export default Navbar;