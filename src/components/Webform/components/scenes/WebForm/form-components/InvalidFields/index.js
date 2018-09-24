import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class InvalidFields extends Component {
  static propTypes = {
    areFormValuesValid: PropTypes.object.isRequired,
    formTexts: PropTypes.object.isRequired
  };

  render() {
    const { areFormValuesValid, formTexts } = this.props;

    return (
      <div className="invalid-fields">
        <h3>Please fill the following fieds correctly:</h3>

        <ul className="invalid-fields-wrapper">
          {Object.keys(areFormValuesValid).map(
            isFormValueValidKey =>
              !areFormValuesValid[isFormValueValidKey] && (
                <li key={isFormValueValidKey}>
                  {formTexts[isFormValueValidKey].label}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

export default InvalidFields;
