import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class WebSubmission extends Component {
  static propTypes = {
    formData: PropTypes.object
  };

  static defaultProps = {
    formData: {}
  };

  render() {
    console.log(this.props.formData);

    return (
      <div className="web-submission">
        <header className="header">
          <h1>Thank you for your submission!</h1>
        </header>
      </div>
    );
  }
}

export default WebSubmission;
