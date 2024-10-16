import React, { useState } from "react";
import "./model.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Button to trigger modal */}
      <button
        className="button"
        onClick={handleOpenModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(27, 182, 161, 1)",
          color: "white",
          border: "none",
          borderRadius: "20px",
          textDecoration: "none",
          width: "190px",
          height: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>More About Me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="2"
              fill="white"
            />
            <circle cx="8" cy="9" r="1.5" fill="rgba(27, 182, 161, 1)" />
            <circle cx="16" cy="9" r="1.5" fill="rgba(27, 182, 161, 1)" />
            <path
              d="M8 15 Q12 18 16 15"
              stroke="rgba(27, 182, 161, 1)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={handleCloseModal}>
              &#10006; {/* Unicode X mark */}
            </button>
            <h2 className="modal__title">More About Me</h2>
            <p className="modal__description">
              🌟 About Me <br></br>
              Hello! I’m Malki Madhubhashini, a 23-year-old enthusiast currently
              pursuing my undergraduate studies at Uva Wellassa University
              (UWU). My educational journey began at Ruwanwella Royal College,
              where I completed my O/Ls, followed by my A/Ls at Kegalu Balika
              Vidyalaya, focusing on the fascinating world of Physics.
            </p>
            <p className="modal__description">
              🎓 Passionate Learner <br></br>
              I’m deeply passionate about learning and exploring new horizons.
              My love for programming has opened up exciting opportunities for
              me to create and innovate. I thrive on challenges and enjoy diving
              into the world of technology!
            </p>
            <p className="modal__description">
              🎶 Creative Spirit <br></br>
              In addition to my academic pursuits, I adore dancing and singing!
              Whether it's grooving to the latest tunes or belting out my
              favorite songs, music brings me immense joy and helps me express
              my creativity.
            </p>
            <p className="modal__description">
              🤝 Community Engagement <br></br>
              Volunteering is close to my heart. I believe in giving back to the
              community and making a positive impact. Every moment spent helping
              others enriches my life and allows me to connect with wonderful
              people.
            </p>
            <p className="modal__description">
              🐾 Animal Lover <br></br>
              As a proud pet lover, I find comfort and happiness in the company
              of my furry friends. They add a special touch to my life,
              reminding me to embrace every moment with joy.
            </p>
            <p className="modal__description">
              🌈 Living Life <br></br>
              to the Fullest Living in Kegalla, I strive to make
              every day a celebration of happiness and positivity. Fashion also
              intrigues me; I love expressing myself through my style! My
              ultimate goal is to live a joyful life, surrounded by laughter and
              good vibes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
