/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class CountryOfCitizenship extends Component {
  static propTypes = {
    className: PropTypes.string,
    isSubmitClicked: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    options: PropTypes.array,
    passportIdName: PropTypes.string.isRequired,
    selectedValue: PropTypes.string,

    onEvent: PropTypes.func.isRequired,
    onOptionChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    options: [],
    required: false,
    selectedValue: ''
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
    const { name, onOptionChange, passportIdName } = this.props;
    const { target } = event;

    onOptionChange({
      name,
      passportIdName,
      selectedIndex: target.selectedIndex,
      value: target.value
    });
  };

  render() {
    const {
      className,
      isSubmitClicked,
      isValid,
      label,
      name,
      options,
      required,
      selectedValue
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
        <select
          name={name}
          id={name}
          value={selectedValue}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        >
          {options.map(option => (
            <option key={option.abbreviation} value={option.abbreviation}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CountryOfCitizenship;
