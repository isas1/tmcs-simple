import React, { Component } from "react";
import Iframe from 'react-iframe'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to TMCS</h2>
        <Iframe
          url="https://www.superprof.co.uk/eight-years-the-sector-teacher-training-king-college-london-work-school-the-year-and-globally-diverse-teaching.html"
          width="100%"
          height="1000px"
          position="relative"
        >
        </Iframe>
      </div>
    );
  }
}
 
export default Home;