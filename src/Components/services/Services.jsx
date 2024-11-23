import React ,{useState} from 'react';
import './Services.css'



const Services = () => {
   const[toggleState,setToggleState]=useState(0);

   const toggleTab =(index) =>{
    setToggleState(index);
   }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">


            
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid-alt bx bx-dock-left services__icon ">

                    </i>
                    <h3 className="services__title">Web Developer</h3>
                </div>

                
                <span className="services__button" onClick={()=>toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right bx bx-right-arrow-alt services__button-icon"></i>
                </span>

                <div className={toggleState === 1? "services__modal active__modal":"services__modal"}>
                    <div className="services__modal-content" >
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close bx bx-window-close" >
                       
                        </i>

                        <h3 className="services__modal-title">Web Developer</h3>
                        <p className="services__modal-description">
                        I am a passionate and detail-oriented web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript. As a recent graduate, I am eager to apply my skills in building dynamic and user-friendly websites. Constantly learning and exploring new web development tools, I am excited to contribute to real-world projects and grow within the field.
                        </p>

                        <ul className="services__modal-service grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Proficient in front-end technologies including HTML, CSS, JavaScript, and modern frameworks like React to create responsive and visually appealing websites.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Hands-on experience in building dynamic and interactive web pages, ensuring a seamless user experience across various devices.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Familiar with back-end development concepts and technologies such as java,python and databases like mySQL to develop full-stack applications.


                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Passionate about learning new web development tools and continuously improving coding practices through personal projects and online tutorials.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Strong problem-solving skills, with a focus on clean, efficient, and maintainable code to deliver high-quality web solutions.
                                    </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid-alt bx bx-dock-left services__icon ">

                    </i>
                    <h3 className="services__title">Cyber Security </h3>
                </div>

                <span className="services__button" onClick={()=>toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right bx bx-right-arrow-alt services__button-icon"></i>
                </span>

                <div className={toggleState === 2? "services__modal active__modal":"services__modal"}>
                    <div className="services__modal-content" >
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close bx bx-window-close" >
                       
                        </i>

                        <h3 className="services__modal-title">Cyber Security</h3>
                        <p className="services__modal-description">
                        I am eager to apply my knowledge in real-world security challenges. I have developed skills in network security, risk management, and incident response through coursework and hands-on projects. Passionate about staying ahead of evolving cyber threats, I am excited to contribute and grow in the cybersecurity
                        </p>

                        <ul className="services__modal-service grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Recently completed a degree in cybersecurity, gaining a solid foundation in network security, encryption, and threat management.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Hands-on experience with security tools like firewalls, antivirus software, and intrusion detection systems during academic projects.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Passionate about learning and staying updated on the latest cybersecurity trends and best practices.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Eager to apply theoretical knowledge in real-world settings, focusing on threat analysis, risk mitigation, and system protection.
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info bx bx-check-circle">
                                Actively pursuing certifications like CompTIA Security+ to enhance my skills and contribute effectively to a security-focused role.
                                    </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            


















{/* 
<div className="1">
<div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br />Designer</h3>
                </div>

                <span className="services__button">
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Ui/Ux Designer</h3>
                        <p className="services__modal-description">
                            Services with 3 months of experience.
                            Providing quality work to the companies
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>I develop the user Interface
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>Web page development
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>I create the ux element reactions
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>I position your company brand
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>` Design and mockups of products for companies.
                                    </p>
                            </li>
                        </ul>
                    </div>
                </div>
            
            
            </div>


            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br />Designer</h3>
                </div>

                <span className="services__button">
                 
                    View More  
                    <i className="uil uil-arrow-right services__button-icon ">
                    
                        </i>
                    </span>




                <div className="services__modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close ">
                        <i class="uil uil-times nav__close"  ></i>
                         
                        </i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">
                            Services with 3 months of experience.
                            Providing quality work to the companies
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>I develop the user Interface
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i>Web page development
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i> I create the ux element reactions
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i> I position your company brand
                                    </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                <i class='bx bx-check-circle'></i> Design and mockups of products for companies.
                                    </p>
                                    <i class="uil uil-comments"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            
            
            </div>
</div> */}



        </div>
    </section>
  )
}

export default Services