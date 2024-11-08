import React from "react";
import "./Home.scss";
import { GrLocationPin } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer_section">

            <div className="contact_container">
                <span>B&B - Porta Mascarella 7 - Di Felice</span>
                <div className="info_row">
                    <GrLocationPin />
                    <span>Piazza di Porta Mascarella 7 - 40126 - Bologna</span>
                </div>
                <div className="info_row">
                    <FaPhoneAlt />
                    <span>329 285 8632</span>
                </div>
            </div>
        </div>
    )
}

export default Footer