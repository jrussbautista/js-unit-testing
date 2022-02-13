const isPhoneNumber = require('../is-phone-number');
const cases = require('jest-in-case');

const validPhoneNumbers = [
  '(123)456-7890',
  '123-456-7890',
  '123.456.7890',
  '1234567890',
  '+31636363634',
  '075-63546725',
];

const inValidPhoneNumbers = ['(123)456z7890', '123-456_7890', '123.456a7890'];

//using cases
cases(
  'valid phone numbers',
  (options) => {
    expect(isPhoneNumber(options.phoneNumber)).toBe(true);
  },
  validPhoneNumbers.map((phoneNumber) => ({
    name: `${phoneNumber} is valid`,
    phoneNumber,
  }))
);

cases(
  'invalid phone numbers',
  (options) => {
    expect(isPhoneNumber(options.phoneNumber)).toBe(false);
  },
  inValidPhoneNumbers.map((phoneNumber) => ({
    name: `${phoneNumber} is invalid`,
    phoneNumber,
  }))
);

// using test.each
// https://jestjs.io/docs/api#testeachtablename-fn-timeout

/*
test.each(validPhoneNumbers)('%s is a valid phone number', (phoneNumber) => {
  expect(isPhoneNumber(phoneNumber)).toBe(true);
});

test.each(inValidPhoneNumbers)(
  '%s is a invalid phone number',
  (phoneNumber) => {
    expect(isPhoneNumber(phoneNumber)).toBe(false);
  }
);
*/
