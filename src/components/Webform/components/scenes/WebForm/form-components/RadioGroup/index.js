/* eslint-disable jsx-a11y/label-has-for */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class RadioGroup extends Component {
  static propTypes = {
    className: PropTypes.string,
    isSubmitClicked: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    radios: PropTypes.array,
    required: PropTypes.bool,
    selectedValue: PropTypes.string,

    onRadioChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    className: '',
    selectedValue: '',
    radios: [],
    required: false
  };

  handleChange = event => {
    this.props.onRadioChange(this.props.name, event.target.value);
  };

  render() {
    const {
      className,
      isSubmitClicked,
      isValid,
      label,
      name,
      radios,
      required,
      selectedValue
    } = this.props;

    const invalidClassName = isValid ? '' : ' invalid';

    return (
      <fieldset
        className={`fieldset-form-row ${className}${
          isSubmitClicked ? invalidClassName : ''
        }`}
      >
        <legend>
          {label} {required ? '*' : ''}
        </legend>
        {radios.map(radio => (
          <Fragment key={radio.value}>
            <input
              checked={radio.value === selectedValue}
              id={radio.value}
              name={name}
              type="radio"
              value={radio.value}
              onChange={this.handleChange}
            />
            <label htmlFor={radio.value}>{radio.label}</label>
          </Fragment>
        ))}
      </fieldset>
    );
  }
}

export default RadioGroup;
