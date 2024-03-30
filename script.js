'use sctict';

console.log('script file added');

const btnSubmit = document.querySelector('.form_submit');
const firstName = document.querySelector('.first_name');
const lastName = document.querySelector('.last_name');
const email = document.querySelector('.email_field');
const website = document.querySelector('.website_field');
const textField = document.querySelector('.textarea_field');
const textOutput = document.querySelector('.text-output');

const submitFunc = () => {
  let sub = [firstName.value, lastName.value, email.value, website.value, textField.value];
  for (item of sub) {
    if (item == null || item == '') {
      textOutput.innerHTML = 'Заполните все плоя';
      return false;
    } else {
      textOutput.innerHTML = `${sub[0]}<br/>${sub[1]}<br/>${sub[2]}<br/>${sub[3]}<br/>${sub[4]}<br/>`;
    }
  }

  save(firstName.value, lastName.value, email.value, website.value, textField.value);

  function save(firstName, lastName, email, website, textField) {
    if (window.localStorage) {
      localStorage.loan_firstName = firstName;
      localStorage.loan_lastName = lastName;
      localStorage.loan_email = email;
      localStorage.loan_website = website;
      localStorage.loan_textField = textField;
      console.log('datas added');
    }
  }

  // восстанавливать заполненные поля

  window.onload = function () {
    console.log('ok');
    if (window.localStorage && localStorage.loan_firstName) {
      document.querySelector('.first_name').value = localStorage.loan_firstName;
      document.querySelector('.last_name').value = localStorage.loan_lastName;
      document.querySelector('.email_field').value = localStorage.loan_email;
      document.querySelector('.website_field').value = localStorage.loan_website;
      document.querySelector('.textarea_field').value = localStorage.loan_textField;
      console.log('2');
    }
  };
};
btnSubmit.onclick = submitFunc;
