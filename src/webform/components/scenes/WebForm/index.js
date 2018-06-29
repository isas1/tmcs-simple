import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  COUNTRIES,
  FORM_TEXTS,
  MAX_CHARACTERS,
  NO_AMOUNT_VALUE,
  PERSON_TITLES
} from '../../../core/constants';

import FormHeader from './form-components/FormHeader';
import InvalidFields from './form-components/InvalidFields';
import PassportId from './form-components/PassportId';
import RadioGroup from './form-components/RadioGroup';
import CountryOfCitizenship from './form-components/CountryOfCitizenship';
import SubmitButton from './form-components/SubmitButton';
import TextInput from './form-components/TextInput';
import './style.css';

const formNames = Object.keys(FORM_TEXTS).reduce(
  (acc, formNameKey) => ({
    ...acc,
    areFormValuesValid: {
      ...acc.areFormValuesValid,
      [FORM_TEXTS[formNameKey].name]: false
    },
    formValues: {
      ...acc.formValues,
      [FORM_TEXTS[formNameKey].name]: ''
    }
  }),
  {
    areFormValuesValid: {},
    formValues: {}
  }
);

class WebForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    areFormValuesValid: {
      ...formNames.areFormValuesValid
    },
    canSubmit: false,
    formValues: {
      ...formNames.formValues
    },
    isSubmitClicked: false,
    selectedCountry: '',
    selectedCountryIndex: 0,
    selectedTitle: ''
  };

  checkCanSubmit = () => {
    const { areFormValuesValid } = this.state;
    const {
      [FORM_TEXTS.countryOfCitizenship.name]: isCountryOfCitizenshipValid,
      [FORM_TEXTS.email.name]: isEmailValid,
      [FORM_TEXTS.firstName.name]: isFirstNameValid,
      [FORM_TEXTS.lastName.name]: isLastNameValid,
      [FORM_TEXTS.passportId.name]: isPassportIdValid,
      [FORM_TEXTS.title.name]: isTitleValid
    } = areFormValuesValid;

    this.setState({
      canSubmit:
        isCountryOfCitizenshipValid &&
        isEmailValid &&
        isFirstNameValid &&
        isLastNameValid &&
        isTitleValid
    });
  };

  handleInputChange = ({ isValid, name, value }) => {
    this.setState(
      prevState => ({
        areFormValuesValid: {
          ...prevState.areFormValuesValid,
          [name]: isValid
        },
        formValues: {
          ...prevState.formValues,
          [name]: value
        }
      }),
      this.checkCanSubmit
    );
  };

  handleCountryChange = ({ name, passportIdName, selectedIndex, value }) => {
    this.setState(
      prevState => ({
        areFormValuesValid: {
          ...prevState.areFormValuesValid,
          [name]: value !== NO_AMOUNT_VALUE
        },
        formValues: {
          ...prevState.formValues,
          [name]: value,
          [passportIdName]:
            value === NO_AMOUNT_VALUE ? '' : prevState[passportIdName]
        },
        selectedCountry: value,
        selectedCountryIndex: selectedIndex
      }),
      this.checkCanSubmit
    );
  };

  handleTitleChange = (name, value) => {
    this.setState(
      prevState => ({
        areFormValuesValid: {
          ...prevState.areFormValuesValid,
          [name]: true
        },
        formValues: {
          ...prevState.formValues,
          [name]: value
        },
        selectedTitle: value
      }),
      this.checkCanSubmit
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        isSubmitClicked: true
      },
      () => {
        if (this.state.canSubmit) {
          this.props.onSubmit(this.state.formValues);
        }
      }
    );
  };

  renderInvalidFields = () => {
    const { areFormValuesValid, canSubmit, isSubmitClicked } = this.state;

    return (
      isSubmitClicked &&
      !canSubmit && (
        <InvalidFields
          areFormValuesValid={areFormValuesValid}
          formTexts={FORM_TEXTS}
        />
      )
    );
  };

  render() {
    const {
      areFormValuesValid,
      canSubmit,
      formValues,
      isSubmitClicked,
      selectedCountry,
      selectedCountryIndex,
      selectedTitle
    } = this.state;

    const {
      [FORM_TEXTS.countryOfCitizenship.name]: isCountryOfCitizenshipValid,
      [FORM_TEXTS.email.name]: isEmailValid,
      [FORM_TEXTS.firstName.name]: isFirstNameValid,
      [FORM_TEXTS.lastName.name]: isLastNameValid,
      [FORM_TEXTS.passportId.name]: isPassportIdValid,
      [FORM_TEXTS.title.name]: isTitleValid
    } = areFormValuesValid;

    const {
      [FORM_TEXTS.email.name]: email,
      [FORM_TEXTS.firstName.name]: firstName,
      [FORM_TEXTS.lastName.name]: lastName,
      [FORM_TEXTS.passportId.name]: passportId
    } = formValues;

    return (
      <div className="web-form">
        <FormHeader />
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            className="person-title"
            isSubmitClicked={isSubmitClicked}
            isValid={isTitleValid}
            label={FORM_TEXTS.title.label}
            name={FORM_TEXTS.title.name}
            radios={PERSON_TITLES}
            required
            selectedValue={selectedTitle}
            onRadioChange={this.handleTitleChange}
          />
          <TextInput
            className="first-name"
            isSubmitClicked={isSubmitClicked}
            isValid={isFirstNameValid}
            label={FORM_TEXTS.firstName.label}
            maxCharacters={MAX_CHARACTERS}
            name={FORM_TEXTS.firstName.name}
            required
            value={firstName}
            onEvent={this.checkCanSubmit}
            onTextChange={this.handleInputChange}
          />
          <TextInput
            className="last-name"
            isSubmitClicked={isSubmitClicked}
            isValid={isLastNameValid}
            label={FORM_TEXTS.lastName.label}
            maxCharacters={MAX_CHARACTERS}
            name={FORM_TEXTS.lastName.name}
            required
            value={lastName}
            onEvent={this.checkCanSubmit}
            onTextChange={this.handleInputChange}
          />
          <CountryOfCitizenship
            className="country-of-citizenship"
            isSubmitClicked={isSubmitClicked}
            isValid={isCountryOfCitizenshipValid}
            label={FORM_TEXTS.countryOfCitizenship.label}
            name={FORM_TEXTS.countryOfCitizenship.name}
            options={COUNTRIES}
            passportIdName={FORM_TEXTS.passportId.name}
            required
            selectedValue={selectedCountry}
            onEvent={this.checkCanSubmit}
            onOptionChange={this.handleCountryChange}
          />
          {isCountryOfCitizenshipValid && (
            <PassportId
              isSubmitClicked={isSubmitClicked}
              isValid={isPassportIdValid}
              label={FORM_TEXTS.passportId.label}
              name={FORM_TEXTS.passportId.name}
              required
              value={passportId}
              validator={COUNTRIES[selectedCountryIndex].validator}
              onEvent={this.checkCanSubmit}
              onTextChange={this.handleInputChange}
            />
          )}
          <TextInput
            className="email"
            isSubmitClicked={isSubmitClicked}
            isValid={isEmailValid}
            label={FORM_TEXTS.email.label}
            maxCharacters={MAX_CHARACTERS}
            name={FORM_TEXTS.email.name}
            required
            type="email"
            value={email}
            onEvent={this.checkCanSubmit}
            onTextChange={this.handleInputChange}
          />
          {this.renderInvalidFields()}
          <SubmitButton isAbleToSubmit={canSubmit}>Submit</SubmitButton>
        </form>
      </div>
    );
  }
}

export default WebForm;
