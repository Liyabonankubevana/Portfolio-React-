// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css" 
import HtmlLogo from "../../assets/HTML.jpg"
import Git from "../../assets/Git-Icon-Black.png"
import JS from "../../assets/JavaScript-logo.png"
import tailwind from "../../assets/Tailwind.png"
import Reactlogo from "../../assets/React.png"
import CV from "../../CV/My_CV.pdf"
const About = () => {
    return (
        <section className="about container section" id="about">
            <div className="about_title">
                <h1 className="section_title">About Me</h1>
            </div>

            <div className="about_container grid">
                <div className="about_content">
                    {/* <h2 className="section_title">About Me</h2> */}
                    <div className="about_data grid">
                        <img src="" alt="" className="about_img" />
                        <div className="about_description">
                            <p>
                            I am Liyabona Nkubevana, a dedicated Web Developer based in Cape Town, South Africa. Proficient in HTML, CSS, JavaScript, and React, I bring a solid foundation of technical knowledge to the forefront. My diverse background includes not only web development but also experience as a former Station Manager at the IEC and online teacher (and in my community) , where I honed my skills in operational management, effective communication, organizing, learning, planning, executing, and maintaining a strong work ethic.

Currently enrolled in the Fullstack open program, I am actively refining my skills to evolve into a versatile Fullstack Software Developer. Eager to join a dynamic software development team, I am excited about the opportunity to contribute my technical expertise and unwavering dedication. Thriving in collaborative environments, I am prepared to embrace new challenges and make meaningful contributions to the success of innovative projects.
                            </p>
                            <a href={CV} className="btn" download>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech_stack">
                    <h3>Skills:</h3>
            </div>

            <div className="about_skills grid">
                    <div className="skills_data">
                        <img src={HtmlLogo} alt="" className="skills_html" />
                   </div>

                   
                   <div className="skills_data">
                        <img src={Git} alt="" className="skills_git" />
                   </div>

                   <div className="skills_data">
                        <img src={JS} alt="" className="skills_JS" />
                   </div>

                   <div className="skills_data">
                        <img src={Reactlogo} alt="" className="skills_react" />
                   </div>

                   <div className="skills_data">
                        <img src={tailwind} alt="" className="skills_tailwind" />
                   </div>
            </div>

            <div className="Reference_stack">
                    <h3>References :</h3>
                    <ol className="references">
                        <li>Nicole Thomas,
                            Program Coordinator, CodeSpace
                            nicole@codespace.co.za, 0216850991
                        </li>
                        <li>Naeem Witbooi, Code Coach,
                            CodeSpace
                            naeem@codespace.co.za
                        </li>
                    </ol>
            </div>
        </section>
    )
}

export default About