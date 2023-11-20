// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css" 

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>
            
            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let us talk about everything!</h3>
                    <p className="contact_details">Do not like forms? Send me an email. 👋</p>
                </div>

                <form action="" className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder="Name"/>
                        </div> 

                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input" placeholder="Email"/>
                        </div>
                    </div>

                    <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder="Subject"/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <textarea name="" id="" cols="30" rows="10" className="contact_form-input" placeholder="Write your message"></textarea>
                    </div>

                    <button className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact