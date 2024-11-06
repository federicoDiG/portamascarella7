import React from "react";
import "./Home.scss"
import logo from "../images/logo.png"
import cover from "../images/cover.png"

const Home = () => {

    return (
        <div className="home_container">
            <div className="navbar_container">
                <img className="logo" src={logo} />
                <span className="porta">Porta  Mascarella 7</span>
            </div>

            <div className="section1">

                <div className="text_container">
                    <span className="sizeSmall">Welcome to</span>
                    <span className="sizeSmall">Porta Mascarella 7</span>
                    <span className="sizeBig">Di Felice</span>
                </div>

                <div className="image_container">
                    <img className="image" src={cover}/>
                </div>

            </div>
            



        </div>
    )
}

export default Home