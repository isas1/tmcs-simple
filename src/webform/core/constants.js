const NO_AMOUNT_VALUE = 'N/A';

const COUNTRIES = [
  {
    abbreviation: NO_AMOUNT_VALUE,
    name: '-',
    validator: ''
  },
  {
    abbreviation: 'BR',
    name: 'Brazil',
    validator: '^([CFGHJKLMNPRTVWXYZ]{2}[\\d]{6})$'
  },
  {
    abbreviation: 'FR',
    name: 'France',
    validator: '^[CFGHJKLMNPRTVWXYZ\\d]{9}$'
  }
];

const FORM_TEXTS = {
  title: { label: 'Title', name: 'title' },
  firstName: { label: 'First Name', name: 'firstName' },
  lastName: { label: 'Last Name', name: 'lastName' },
  countryOfCitizenship: {
    label: 'Country of Citizenship',
    name: 'countryOfCitizenship'
  },
  passportId: { label: 'Passport ID', name: 'passportId' },
  email: { label: 'Email', name: 'email' }
};

const MAX_CHARACTERS = 50;

const PERSON_TITLES = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' }
];

export {
  COUNTRIES,
  FORM_TEXTS,
  MAX_CHARACTERS,
  NO_AMOUNT_VALUE,
  PERSON_TITLES
};
