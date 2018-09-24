import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class SubmitButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    isAbleToSubmit: PropTypes.bool
  };

  static defaultProps = {
    children: 'Submit',
    isAbleToSubmit: false
  };

  render() {
    const { children, isAbleToSubmit } = this.props;

    return (
      <div
        className={`form-row submit-button${isAbleToSubmit ? '' : ' disabled'}`}
      >
        <input type="submit" value={children} />
      </div>
    );
  }
}

export default SubmitButton;
