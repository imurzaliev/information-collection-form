const form = document.querySelector('[data-form]');

const email = document.querySelector('[data-email]');
const country = document.querySelector('[data-country]');
const zip = document.querySelector('[data-zip]');
const password = document.querySelector('[data-password]');
const passwordVerifivation = document.querySelector(
  '[data-password-verification]'
);

const showHide = document.querySelector('[data-show-hide]');

const showHidePassword = () => {
  if (password.type === 'password') {
    password.type = 'text';
    showHide.className = 'fa-solid fa-eye-slash icon click';
  } else {
    password.type = 'password';
    showHide.className = 'fa-solid fa-eye icon click';
  }
};

showHide.addEventListener('click', (e) => {
  showHidePassword();
});

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

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters!`
    );
  } else {
    showSuccess(input);
  }
};

const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
};

// Get field name and capitalize only the first letter
const getFieldName = (input) => {
  return input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1);
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([email, country, zip, password, passwordVerifivation]);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passwordVerifivation);
});
