import React,{useState} from 'react';
import './Qualification.css'

const Qualification = () => {
    const[toggleState,setToggleState]=useState(1);

   const toggleTab =(index) =>{
    setToggleState(index);
   }
  return (
    <section className="qualification section " id="Qualification">
        <h2 className="section__title"> Academics </h2>
        <span className="section__subtitle">My personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState ===1? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    
                    <i className="uil uil-graduation-cap bx bxs-graduation qualification__icon"></i>
                    {" "}Education
                </div>

                <div className={toggleState === 2? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                
                    <i className="uil uil-briefcase-alt bx bx-briefcase qualification__icon"></i>
                    {" "}Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :"qualification__content"}>
                <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">Kapil IT Skill Hub <br />-Training Institute <br/> - Hyderabad
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2024 Aug - Present
                            </div>
                        </div>

                    </div>
                    
                    
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech -
                            <br /> CSE (Cyber Security)</h3>
                            <span className="qualification__subtitle">Sri Indu Institute of Engineering and Technology. <br /> - Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Sri Chaitanya Junior Kalasala. <br /> - Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018 - 2020
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSC/10th</h3>
                            <span className="qualification__subtitle">Sri Rama Krishna Vidya Niketan High School. <br />- Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2017 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Python Developer Internship</h3>
                            <span className="qualification__subtitle">Mallikarjuna Infosys <br />- Hyderabad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2023 may - 2023 july
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
{/* 
                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">american - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - Present
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">developer</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                </div>
            </div>





        </div>
    </section>
  )
}

export default Qualification