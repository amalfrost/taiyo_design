import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {BsArrowLeftShort} from "react-icons/bs"
import {AiFillEnvironment} from "react-icons/ai"
import {BsFillBarChartFill} from "react-icons/bs"
import {GrContactInfo} from "react-icons/gr"

const Sidebar = () => {

    
    const [open,setOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
          if (width < 768) {
           setOpen(false)
          } else if (width >= 768 && width < 1024) {
            setOpen(false)
        } else {
            setOpen(true)
        }
        };
    
        handleResize(); 
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const iconStyle = `bg-yellow-600 text-black  rounded 
    cursor-pointer block float-left duration-300  mr-2 ${!open ? "text-3xl  " : "text-2xl mb-3" }`;
    
    const menuStyle =`cursor-pointer mb-3 duration-300  ${!open && "scale-0" } `;
    return (

    <div className= {`bg-purple-900  min-h-screen  h-auto p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
       <BsArrowLeftShort className= {`bg-white text-purple-900
      text-3xl rounded-full absolute -right-3 top-9 border
      border-purple-900 cursor-pointer ${!open && "rotate-180"} `}
      onClick= {()=>{setOpen(!open)}} />

    <Link to={'/'}>
        
   
    <div className='inline-flex'>
    <AiFillEnvironment className= {`bg-yellow-600 text-4xl rounded 
    cursor-pointer block float-left mr-2 
    `} />
    <h1 className={`text-white origin-left  font-medium 
    text-2xl duration-300 ${!open && "scale-0" }
    `} >Taiyo</h1>

    
    </div>
    </Link>
   <ul className={` pt-10   list-none      text-white origin-left  font-semibold 
    text-xl duration-300 `}> 
  <Link to={'/contacts'}>
        
   {/* <div> */}
   <GrContactInfo className={iconStyle} />
    <li className= {menuStyle} >Contacts</li>
        </Link>
        <Link to={'/charts'}>
        
    <BsFillBarChartFill className={iconStyle} />
    <li className= {menuStyle} >Charts & Map</li>
    </Link>
    {/* <GrContactInfo className={iconStyle} />
    <li className= {menuStyle} >Contacts</li> */}
    </ul> 
    
    {/* </div>  */}
    
    
    </div>
  );
};

export default Sidebar;
