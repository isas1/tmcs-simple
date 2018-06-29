/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class PassportId extends Component {
  static propTypes = {
    className: PropTypes.string,
    isSubmitClicked: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    maxCharacters: PropTypes.number,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    validator: PropTypes.string.isRequired,
    value: PropTypes.string,

    onEvent: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: 'passport-id',
    maxCharacters: 20,
    required: false,
    value: ''
  };

  state = {
    hasBeenTouched: false
  };

  componentDidMount() {
    if (this.passportIdNode) {
      this.passportIdNode.focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.validator !== this.props.validator) {
      this.props.onTextChange({
        isValid: false,
        name: this.props.name,
        value: ''
      });

      if (this.passportIdNode) {
        this.passportIdNode.focus();
      }
    }
  }

  componentWillUnmount() {
    this.props.onTextChange({
      isValid: false,
      name: this.props.name,
      value: ''
    });
  }

  passportIdNode = null;

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
    const { name, onTextChange, validator } = this.props;
    const { value } = event.target;

    onTextChange({
      isValid: RegExp(validator).test(value),
      name,
      value
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
      value
    } = this.props;

    const invalidClassName = isValid ? '' : ' invalid';

    return (
      <div
        className={`form-row ${className}${
          this.state.hasBeenTouched || isSubmitClicked ? invalidClassName : ''
        }`}
      >
        <label htmlFor={name}>
          {label} {required ? '*' : ''}
        </label>
        <input
          id={name}
          maxLength={maxCharacters}
          type="text"
          value={value}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          ref={node => {
            this.passportIdNode = node;
          }}
        />
      </div>
    );
  }
}

export default PassportId;
