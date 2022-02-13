const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;

function isPhoneNumber(string) {
  return phoneNumberRegex.test(string);
}

module.exports = isPhoneNumber;
