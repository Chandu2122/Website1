import React from 'react'
import { FiAward } from "react-icons/fi";

const Info = () => {
  return (
    <div className="about__info grid">


        <div className="about__box about__icon">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle"> Fresher</span>
        </div>

        <div className="about__box about__icon">
            <i className='bx bx-briefcase-alt'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle"> B.Tech</span>
        </div>

        <div className="about__box about__icon">
        <i className='bx bx-support'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info