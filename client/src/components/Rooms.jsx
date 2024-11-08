import React from "react";
import "./Home.scss";
import master from "../images/master.jpg";
import single from "../images/single.jpg";

const Rooms = () => {

    return (
        <div className="room_section">
            <div className="master_room_section">
                <div className="room_container">
                    <div className="description_container">
                        <h1>Master Room</h1>
                        <div className="image_container">
                            <img src={master} />
                        </div>
                        <span>
                            Splendida camera matrimoniale per un soggiorno di coppia da
                            favola
                        </span>
                        <a href="https://www.airbnb.it/rooms/41551947?_set_bev_on_new_domain=1730987919_EAZWRjNTVkNmNlNz&source_impression_id=p3_1730987926_P3wAcI6LP6e8ee9x">
                            Info e prenotazioni
                        </a>
                    </div>
                </div>
            </div>

            <div className="single_room_section">
                <div className="room_container">
                    <div className="description_container">
                        <h1>Single Room</h1>
                        <div className="image_container">
                            <img src={single} />
                        </div>
                        <span>
                            Una camera comoda e silenziosa per un pernottamento smart e
                            funzionale
                        </span>
                        <a href="https://www.airbnb.it/rooms/41548820?guests=1&adults=1&s=67&unique_share_id=a160cbc8-5eff-4422-9ec1-43884f9c158f">
                            Info e prenotazioni
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms