import React from "react";
import { useState } from "react";

import "./Reservation.scss";

import ReservationImage from "../../../assets/images/reservation/reservation.png";
import { Modal } from "../../Modals/Modal";

const Reservation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    
    <div className="reservation">
      <div className="container">
        <div className="info">
          <h1>Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
          <p>
            Make online reservations, read restaurant reviews from diners, and
            earn points towards free meals. OpenTable is a real-time online
            reservation.
          </p>
          <button onClick={() => setShowModal(true)}>Make Reservation</button>
          {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

        </div>
        <div className="image">
          <img src={ReservationImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
