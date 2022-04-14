/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Social = () =>{
    return(
    <div className="social-wrapper">

        <h3>Follow Us!</h3>

        <a href="#"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="#"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="#"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

    </div>
  );
}

export default Social;