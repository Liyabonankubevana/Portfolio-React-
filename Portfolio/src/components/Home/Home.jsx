// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css" 
import Me from "../../assets/me.jpg"
import HeaderSocials from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="My image" className="home_img" />
                <h1 className="home_name">Liyabona Nkubevana</h1>
                <span className="home_education">Front-End developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact Me</a>

                <ScrollDown />
            </div>
            
            <Shapes />
        </section>
    )
}

export default Home