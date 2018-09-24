import React, { Component, Fragment } from 'react';

import WebForm from '../components/scenes/WebForm';
import WebSubmission from '../components/scenes/WebSubmission';

class WForm extends Component {
  state = {
    formData: {},
    sceneToDisplay: 'form'
  };

  handleSubmit = data => {
    this.setState({
      sceneToDisplay: 'submission',
      formData: data
    });
  };

  render() {
    const { formData, sceneToDisplay } = this.state;

    return (
      <Fragment>
        {sceneToDisplay === 'form' && <WebForm onSubmit={this.handleSubmit} />}
        {sceneToDisplay === 'submission' && (
          <WebSubmission formData={formData} />
        )}
      </Fragment>
    );
  }
}

export default WForm;
