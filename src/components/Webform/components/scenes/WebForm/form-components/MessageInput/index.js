/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class MessageInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    isSubmitClicked: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    maxCharacters: PropTypes.number,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,

    onEvent: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    maxCharacters: 500,
    required: false,
    type: 'text',
    value: ''
  };

  state = {
    hasBeenTouched: false
  };

  handleBlur = () => {
    const { name, onEvent } = this.props;

    this.setState(
      {
        hasBeenTouched: true
      },
      onEvent.bind(null, name)
    );
  };

  handleChange = event => {
    const { target } = event;

    this.props.onTextChange({
      isValid: target.validity.valid && target.value.trim() !== '',
      name: this.props.name,
      value: target.value
    });
  };

  render() {
    const {
      className,
      isSubmitClicked,
      isValid,
      label,
      maxCharacters,
      name,
      required,
      type,
      value
    } = this.props;

    const invalidClassName = isValid ? '' : ' invalid';

    return (
      <div
        className={`form-row text-input ${className}${
          this.state.hasBeenTouched || isSubmitClicked ? invalidClassName : ''
        }`}
      >
        <label htmlFor={name}>
          {label} {required ? '*' : ''}
        </label>
        <input
          id={name}
          maxLength={maxCharacters}
          type={type}
          value={value}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MessageInput;
