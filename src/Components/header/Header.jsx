import React,{useState} from 'react'
import "./Header.css";  
import { CiHome ,CiImageOn} from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi";
import { AiOutlineSend ,AiTwotoneAppstore} from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
      /*=====================Change background header============================ */
      const ScrollUp = () => {
        window.addEventListener("scroll",function () {
            const header =document.querySelector(".header");
            //when the scroll is higher than 200 viewport height,add the show-header class to a tag with the header tag
            if (this.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        })
    };
    /*=====================Toggle Menu============================ */
    const[Toggle,showMenu]=useState(false);
    const [activeNav,setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Chandu</a>

            <div className={Toggle ?"nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link":"nav__link"}>
                            <i className="uil uil-estate nav__icon"><CiHome /></i>Home
                        </a>
                    </li>
                  
                    <li className="nav__item">

                        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link":"nav__link"}
                        >
                            <i className="uil uil-user nav__icon"><GoPerson /></i> About
                        </a>
                    </li>
                 
                    <li className="nav__item">
                        <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link":"nav__link"}>
                            <i className="uil uil-file-alt nav__icon"><GrNotes /></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link":"nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"><HiOutlineBriefcase /></i>Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#Qualification" onClick={()=> setActiveNav('#Qualification')} className={activeNav === "#Qualification" ? "nav__link active-link":"nav__link"}>
                            <i className="uil uil-scenery nav__icon"><CiImageOn /></i>Academics
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link":"nav__link"}>
                            <i className="uil uil-message nav__icon"><AiOutlineSend /></i>Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close"  onClick={()=>showMenu(!Toggle)}><IoCloseSharp /></i>
            </div>

 {/*<div className="nav__toggle" onClick={()=>ShowMenu(!Toggle)}>
            <i class="uil uil-apps"><AiTwotoneAppstore /></i>
            </div> */}

            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
            <i class="uil uil-apps"><AiTwotoneAppstore /></i>
            </div>
        </nav>
    </header>
  )
    
}
   
export default Header  