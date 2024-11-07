import React from "react";
import "./Home.scss";
import logo from "../images/logo.png";
import cover from "../images/cover.png";
import master from "../images/master.jpg";
import single from "../images/single.jpg";
import divider from "../images/bubble-side-divider.svg";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { GrLocationPin } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home_container">
      <div className="navbar_container">
        <img className="logo" src={logo} />
        <span className="porta">Porta Mascarella 7</span>
      </div>

      <div className="landing_section">
        <div className="text_container">
          <span className="sizeSmall">Welcome to</span>
          <span className="sizeSmall span">Porta Mascarella 7</span>
          <span className="sizeBig">Di Felice</span>
        </div>

        <div className="image_container">
          <img className="image" src={cover} />
        </div>
      </div>

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

      <div>
        <img src={divider} />
      </div>

      <div className="info_section">
        <h1>Check-in</h1>
        <div className="info_container">
          <div className="info_list">
            <div>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Italiano" {...a11yProps(0)} />
                    <Tab label="English" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <ul>
                    <li>
                      L'appartamento è all'interno di un condominio, situato in
                      Piazza di Porta Mascarella 7, come indicato nella mappa
                      nel paragrafo sopra.
                    </li>
                    <li>
                      Arrivati in loco, noterete un grande cancello posto
                      all'ingresso del condominio, che spesse volte è già
                      aperto. Se il cancello è chiuso, troverete un tastierino
                      numerico sotto il citofono di sinistra (guardando il
                      cancello), e, digitando F2 - CODICE - ok, aprirete il
                      cancello.
                    </li>
                    <li>
                      Una volta entrati, dirigersi verso la Scala C, il cui
                      ingresso è situato alla prima porta sulla sinistra DOPO la
                      portineria. Anche in questo caso, per aprire la porta, c'è
                      il tastierino numerico: F2 - CODICE - ok.
                    </li>
                    <li>
                      L'appartamento è al primo piano, primo ingresso sulla
                      DESTRA, potete riconoscerlo dalla targa sulla porta "Porta
                      Mascarella 7 - Di Felice". Anche in questo caso è presente
                      un tastierino numerico per aprire la porta, diverso dai
                      primi 2: basterà digitare il codice di 6 cifre, senza
                      premere nient'altro.
                    </li>
                    <li>
                      Una volta entrati nell'appartamento, non resta altro da
                      fare che entrare nella vostra stanza: le chiavi le
                      troverete appese alla porta. Tutti i codici vi verranno
                      forniti prima del vostro arrivo.
                    </li>
                  </ul>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <ul>
                    <li>
                      The apartment is inside a condominium, located in Piazza
                      di Porta Mascarella 7, as indicated on the map in the
                      paragraph above.
                    </li>
                    <li>
                      Once you arrive on site, you will notice a large gate (at
                      the entrance to the condominium), which is often already
                      open. If the gate is closed, you will find a numeric
                      keypad under the intercom on the left (looking at the
                      gate), and, by typing F2 - CODE - ok, you will open the
                      gate.
                    </li>
                    <li>
                      Once inside, head towards Staircase C, whose entrance is
                      located at the first door on the left AFTER the reception.
                      Also in this case, to open the door, there is the numeric
                      keypad: F2 - CODE - ok.
                    </li>
                    <li>
                      The apartment is on the first floor, first entrance on the
                      RIGHT; you can recognize it from the plaque on the door
                      "Porta Mascarella 7 - Di Felice". Also in this case there
                      is a numeric keypad to open the door, different from the
                      first 2: just type the 6-digit code, without pressing
                      anything else.
                    </li>
                    <li>
                      Once you have entered the apartment, all that remains to
                      do is enter your room: you will find the keys hanging on
                      the door. All codes will be provided to you prior to your
                      arrival.
                    </li>
                  </ul>
                </CustomTabPanel>
              </Box>
            </div>
          </div>

          <div className="video_container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FzZiTpxBowQ?si=P0nLd_t7fEWokUZJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer_section">
        <div className="map_container"></div>
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
    </div>
  );
};

export default Home;
