
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var textError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = ''
  return true;
}
  function validatePhone() {
    var phone = document.getElementById('contact-phone').value

    if (phone.length == 0) {
      phoneError.innerHTML = 'Phone is required'
      return false
    }
    if (phone.length !== 10) {
      phoneError.innerHTML = 'Phone number should be 10 digits'
      return false
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      phoneError.innerHTML = 'Only digits'
      return false;
    }
    phoneError.innerHTML = ''
    return true
  }

  function validateEmail() {
    var email = document.getElementById('contact-email').value

    if (email.length == 0) {
      emailError.innerHTML = 'Email is required'
      return false
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = 'Invalid email'
      return false

    }
    emailError.innerHTML = ''
    return true
  }
function validateMessage(){
  var message = document.getElementById('contact-message').value
  var required = 30
  var left = required - message.length

if(left>0){
  textError.innerHTML = left +'More characters required'
  return false;
}
textError.innerHTML = ''
  return true
}

function validateForm(){

  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()  ){
    submitError.innerHTML = 'Please fix error to send'
    return false
  }
}