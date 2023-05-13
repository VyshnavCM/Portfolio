
// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   validateInputs();
// });

// function validateInputs() {
//   const nameValue = nameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const messageValue = messageInput.value.trim();

//   if (nameValue === '') {
//     setErrorFor(nameInput, 'Name cannot be blank');
//   } else {
//     setSuccessFor(nameInput);
//   }

//   if (emailValue === '') {
//     setErrorFor(emailInput, 'Email cannot be blank');
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(emailInput, 'Email is not valid');
//   } else {
//     setSuccessFor(emailInput);
//   }

//   if (messageValue === '') {
//     setErrorFor(messageInput, 'Message cannot be blank');
//   } else {
//     setSuccessFor(messageInput);
//   }
// }

// function setErrorFor(input, message) {
//   const formGroup = input.parentElement;
//   const small = formGroup.querySelector('small');
//   formGroup.classList.add('error');
//   small.innerText = message;
// }

// function setSuccessFor(input) {
//   const formGroup = input.parentElement;
//   formGroup.classList.remove('error');
// }

// function isEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var textError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename(){
  var name = document.getElementById('contact-name').value;

  if (name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
nameError.innerHTML = 'valid';
return true;

}