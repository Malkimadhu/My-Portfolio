// import React, { useState } from "react";
// import "./head.css";

// const Header = () => {
//   /* Toggle Menu */
//   const[Toggle, showMenu] = useState(false);
//   return (
//     <header className="header">
//       <nav className="nav container">
//         <a href="index.html" className="nav__logo">
//           Malki Madhubhashini
//         </a>

//         <div className={Toggle ? "nav__menu show-menu" : 
//           "nav__menu"}>
//           <ul className="nav__list grid">
//             <li className="nav__item">
//               <a href="#home" className="nav__link active-link">
//                 <i className="uil uil-estate nav__icon"></i> Home
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="#about" className="nav__link">
//                 <i className="uil uil-user nav__icon"></i> About
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="#Skills" className="nav__link">
//                 <i className="uil uil-file-alt nav__icon"></i> Skills
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="#projects" className="nav__link">
//                 <i className="uil uil-briefcase-alt nav__icon"></i> Projects
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="#qualification" className="nav__link">
//                 <i className="uil uil-scenery nav__icon"></i> Qualification
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="#contact" className="nav__link">
//                 <i className="uil uil-message nav__icon"></i> Contact
//               </a>
//             </li>
//           </ul>

//           <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
//         </div>

//         <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//           <i class="uil uil-apps"></i>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import "./head.css";
import profilePic from "../../assets/img1.jpg"; 

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value to control when the link gets activated (e.g., when 60% of the section is visible)
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
        <div className="nav__profile-container">
            <img src={profilePic} alt="Profile" className="nav__profile-pic" />
          </div>
          Malki Madhubhashini
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={activeSection === "home" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={activeSection === "about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#Skills"
                className={activeSection === "Skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className={activeSection === "projects" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#education"
                className={activeSection === "education" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Education
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experience"
                className={activeSection === "experience" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> Experience 
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={activeSection === "contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
