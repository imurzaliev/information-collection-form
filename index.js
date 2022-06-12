const form = document.querySelector('[data-form]');

const email = document.querySelector('[data-email]');
const emailError = document.querySelector('#mail + small');

const isEmpty = (elem) => {
  return elem.value.length === 0;
};

const showError = (input, message) => {
  const inputContainer = input.parentElement;
  inputContainer.className = 'input-container error';
  const small = inputContainer.querySelector('small');
  small.innerText = message;
};

const showSuccess = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.className = 'input-container success';
  const small = inputContainer.querySelector('small');
  small.innerText = '';
};

const checkEmail = (input) => {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailRegExp.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid or incomplete');
  }
};

// Get field name and capitalize only the first letter
function getFieldName(input) {
  return input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1);
}

email.addEventListener('input', (e) => {
  checkEmail(email);
});
