import React, { Component } from "react";
// import WForm from "../components/Webform/App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p><span>
          
        </span>Just email me directly <a href="mailto:teachmecomputerscience@gmail.com"><FontAwesomeIcon icon={faMailBulk} /> teachmecomputerscience@gmail.com</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;