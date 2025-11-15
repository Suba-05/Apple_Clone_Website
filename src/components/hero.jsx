import Heroimg from "./images/heroimg.jpg";
import Heroimg2 from "./images/heroimg2.jpg";
import Heroimg3 from "./images/heroimg3.jpg";
import one1 from "./images/one1.png";
import one2 from "./images/one2.jpg";
import Two1 from "./images/Two1.jpg";
import Two2 from "./images/Two2.jpg";
import  Three1 from "./images/Three1.jpg";
import Three2 from "./images/Three2.jpg";
import Four from "./images/Four.jpg";

const Hero = () => {
  return (
    <section>
    <header 
    className="sm:px-xl flex flex-col lg:flex h-96 flex-col items-center justify-center "
      style={{
        backgroundImage: `url(${Heroimg})`,
        display:"flex",
        color:"white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" hidden md: block lg:flex text-8xl "><strong>iPhone 17 Pro</strong></h1>  
      <p className="hidden md: block lg:flex text-4xl ">All Out Pro</p>
      <div>
      <button 
      className=" bg-blue-600 border-blue-600 text-2xl md:text-3xl rounded-[40px] mt-10 mb-10 border-2  px-4 py-2 lg:rounded-[40px] mt-10 mb-10 border-2  px-4 py-2 "
      >
        Learn More</button>
      <button 
      className="rounded-[40px] mt-10 mb-10 border-2 px-4 py-2 md: text-2xl  lg: text-4xl"
      >Buy</button>
      </div>
    </header>

    <header

        className=" bg-gray-100 flex-col items-center justify-center"
      style={{
        display:"flex",
        color:"black",
        
        paddingTop:"50px"
      }}
    >
      <h1 className="text-2xl lg:text-6xl "><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="bg-blue-600 border-blue-600 text-white text-2xl md:text-3xl rounded-[40px] mt-10 mb-10 border-2  px-4 py-2 lg:rounded-[40px] mt-10 mb-10 border-2  px-4 py-2  "
      >
        Learn More</button>
      <button 
      className="rounded-[40px] mt-10 mb-10 border-2 px-4 py-2 text-blue-600 border-blue-600 text-2xl  lg: text-4xl"
      >Buy</button>
      </div>
      <img src={Heroimg2} 
      style={{
        marginTop:"50px",
        height:"200px",
        width:"850%"
      }}></img>


    </header>


    <header

        className=" flex-col items-center justify-center"
      style={{
        display:"flex",
        color:"white",
        backgroundColor:"black",
        paddingTop:"50px"
      }}
    >
      <h1 className="text-4xl lg:text-8xl "><strong>MacBook Pro 14"</strong></h1>  
      <p className="text-2xl lg:text-4xl ">Supercharged by M5.</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={Heroimg3} 
      style={{
        width:"850%",
      }}></img>


    </header>
{/* partition one */}
    <div 
    className="w-full h-1/2 lg:flex"
    >
        <header

        className="bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
      
    >
      <h1 className="text-2xl lg:text-6xl mt-20"><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={one1} 
      style={{
        width:"900px",
        height:"300px",
      }}></img>


    </header>

     <header

        className=" bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
      
    >
      <h1 className="mt-10xl text-2xl lg:text-6xl mt-20"><strong>MacBook Pro 14"</strong></h1>  
      <p className="text-2xl lg:text-4xl ">Supercharged by M5.</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={one2} 
      style={{
        width:"800px",
        height:"340px",
      }}></img>


    </header>

    </div>

{/* partition Two */}

    <div className="w-full h-1/2   lg:flex">

        <header

        className=" bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
      
    >
      
      <h1 className="mt-10xl text-2xl lg:text-6xl mt-20"><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={Two1} 
      style={{
        width:"800px",
        height:"300px",
      }}></img>


    </header>


    <header

        className=" bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
    
      
    >
      <h1 className="mt-10xl text-2xl lg:text-6xl mt-20"><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={Two2} 
      style={{
        width:"400px",
        height:"300px",
      }}></img>


    </header>


    </div>

{/* partition three */}

    <div className="w-full h-1/2   lg:flex">

        <header

        className=" bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
    
      
    >
      <h1 className="mt-10xl text-2xl lg:text-6xl mt-20"><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={Three1} 
      style={{
        width:"800px",
        height:"300px",
      }}></img>


    </header>


    <header

        className=" bg-gray-100 w-full h-full flex flex-col items-center justify-center text-black-900 lg:flex w-1/2 h-1/2 pt-5xl "
    
      
    >
      <h1 className="mt-10xl text-2xl lg:text-6xl mt-20"><strong>iPhone Air</strong></h1>  
      <p className="text-2xl lg:text-4xl ">The thinest iPhone ever.</p>
      <p className="text-2xl lg:text-4xl ">with the Power of Pro inside .</p>
      <div>
      <button 
      className="text-3xl border-2 color-white px-4 py-2 "
      style={{
        backgroundColor:"blue",
        color:"white",
        borderRadius:"40px",
        borderColor:"blue",
        marginTop:"10px",
        marginBottom:"10px"
      }}>
        Learn More</button>
      <button 
      className="text-3xl border-2  px-4 py-2  hover:color-blue-100"
      style={{
        color:"blue",
        backgroundColor:"transparent",
        borderRadius:"40px",
        borderColor:"blue",
        marginLeft:"10px",
      }}>Buy</button>
      </div>
      <img src={Three2} 
      style={{
        width:"800px",
        height:"300px",
      }}></img>


    </header>


    </div>
    


    </section>
    
  );
};

export default Hero;