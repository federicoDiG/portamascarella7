import React from "react";

const Maps = () => {

    return (
        <div className="map_section">
            <div className="map_container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.659131894909!2d11.350752476565695!3d44.501650871074666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4a461890b9d%3A0xb3c60154c4f6ab0a!2sPiazza%20di%20Porta%20Mascarella%2C%207%2C%2040126%20Bologna%20BO!5e0!3m2!1sit!2sit!4v1731065702644!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="hint_container">

                <span style={{marginBottom:"20px"}}>Gli appartamenti si trovano in una zona ideale per chi vuole conoscere Bologna o chi ha necessità di raggiungere agevolmente Zona Fiere.</span>
                <span>
                    Vi troverete a 10 minuti (a piedi) da:
                    <ul>
                        <li><strong>Stazione, Torre degli asinelli, piazza Maggiore, Viale Indipendenza, Giardini Margherita, Zona Universitaria, Zona Fiere.</strong></li>
                    </ul>
                </span>
                <span>Sotto l'appartamento si trova la fermata "Porta Mascarella" servita da tutte le principali linee bus.</span>
                <span style={{marginTop:"20px"}}>Il condominio si trova vicino a diverse aree di parcheggio costudito.</span>
            </div>

        </div>


    )
}

export default Maps