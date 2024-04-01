'use sctict';

console.log('script file added');

var btnSubmit = document.querySelector('.form_submit');
var firstName = document.querySelector('.first_name');
var lastName = document.querySelector('.last_name');
var email = document.querySelector('.email_field');
var website = document.querySelector('.website_field');
var textField = document.querySelector('.textarea_field');
var textOutput = document.querySelector('.text-output');

var submitFunc = () => {
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
      localStorage.form_firstName = firstName;
      localStorage.form_lastName = lastName;
      localStorage.form_email = email;
      localStorage.form_website = website;
      localStorage.form_textField = textField;
      console.log(localStorage.form_firstName);
    }
  }

  // восстанавливать заполненные поля
};

window.onload = function () {
  if (window.localStorage && localStorage.form_firstName) {
    document.querySelector('.first_name').value = localStorage.form_firstName;
    document.querySelector('.last_name').value = localStorage.form_lastName;
    document.querySelector('.email_field').value = localStorage.form_email;
    document.querySelector('.website_field').value = localStorage.form_website;
    document.querySelector('.textarea_field').value = localStorage.form_textField;
  }
};

btnSubmit.onclick = submitFunc;
