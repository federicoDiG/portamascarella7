import React from "react";
import "./Home.scss";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
  


const Info = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    

    return (
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
    )
}

export default Info;