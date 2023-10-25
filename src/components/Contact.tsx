import {ContactEntity} from "../entities/data";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileAndroidAlt} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Contact({phone, email, linkedIn}: ContactEntity) {
    return (
        <div className="contact left-side-box">
            <h2 className="point">CONTACT</h2>
            <ul>
                <li><FontAwesomeIcon icon={faMobileAndroidAlt} /> <label className="contact-value"><a href={`tel:${phone}`}>{phone}</a></label></li>
                <li><FontAwesomeIcon icon={faEnvelope} /> <label className="contact-value"><a href={`mailto:${email}`}>{email}</a></label></li>
                <li><FontAwesomeIcon icon={faLinkedin} /> <label className="contact-value"><a href={linkedIn} target="_blank">{linkedIn}</a></label></li>
            </ul>
        </div>
    );
}

export default Contact;