// RegExp code
// Will return true if it is a phone number that has 7 numbers between 0-9 and with or without a "-" in between
// Else will return "null"

var myPhone = "123-4567";

function validate(phoneNumber) {
 return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

validate(myPhone);
console.log(validate(myPhone));







var myPhoneNumber = "469-3057";

function validate(phoneNumber) {
  var wholePhonenumber = phoneNumber.split("-");
  var stringPhoneNumber = wholePhonenumber.toString();
  var first = stringPhoneNumber.substring(0, 3);
  var second = stringPhoneNumber.substring(stringPhoneNumber.length - 4);
  
  if (phoneNumber.length > 8 || phoneNumber.length < 7) {
    return false;
  }
  if (phoneNumber.length === 8) {
    return (phoneNumber.charAt(3) === "-");
  }
  
  if (isNaN(first) || isNaN(second)) {
    return false;
  }
  return true;
}

validate(myPhoneNumber);
console.log(validate(myPhoneNumber));