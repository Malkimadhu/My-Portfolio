import React from 'react'

const Infor = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">6 months</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Skilled</h3>
            <span className="about__subtitle">Both Automation and manual</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Infor
