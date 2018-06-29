import React, { Component } from "react";
import WForm from "./Webform/App";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is email me directly at <a href="mailto:teachmecomputerscience@gmail.com">teachmecomputerscience@gmail.com</a>.
        </p>

        <WForm />
      </div>
    );
  }
}
 
export default Contact;