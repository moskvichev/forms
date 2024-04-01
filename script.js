'use sctict';

console.log('script file added');

const btnSubmit = document.querySelector('.form_submit');
const firstName = document.querySelector('.first_name');
const lastName = document.querySelector('.last_name');
const email = document.querySelector('.email_field');
const website = document.querySelector('.website_field');
const textField = document.querySelector('.textarea_field');
const dateField = document.querySelector('.date_field');
const numberField = document.querySelector('.number_field');
const checkbox = document.getElementById('checkbox');
const textOutput = document.querySelector('.text-output');

const submitFunc = () => {
  let sub = [
    firstName.value,
    lastName.value,
    email.value,
    website.value,
    textField.value,
    dateField.value,
    numberField.value,
  ];
  for (item of sub) {
    if (item == null || item == '') {
      textOutput.innerHTML = 'Заполните все плоя';
      return false;
    } else {
      if (checkbox.checked) {
        textOutput.innerHTML = `${sub[0]}<br/>${sub[1]}<br/>${sub[2]}<br/>${sub[3]}<br/>${sub[4]}<br/>${sub[5]}<br/>${sub[6]}<p>чекбокс выбран</p>`;
      } else {
        textOutput.innerHTML = `${sub[0]}<br/>${sub[1]}<br/>${sub[2]}<br/>${sub[3]}<br/>${sub[4]}<br/>${sub[5]}<br/>${sub[6]}`;
      }
    }
  }

  save(
    firstName.value,
    lastName.value,
    email.value,
    website.value,
    textField.value,
    dateField.value,
    numberField.value,
  );

  function save(firstName, lastName, email, website, textField, dateField, numberField) {
    if (window.localStorage) {
      localStorage.form_firstName = firstName;
      localStorage.form_lastName = lastName;
      localStorage.form_email = email;
      localStorage.form_website = website;
      localStorage.form_textField = textField;
      localStorage.form_dateField = dateField;
      localStorage.form_numberField = numberField;
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
    document.querySelector('.date_field').value = localStorage.form_dateField;
    document.querySelector('.number_field').value = localStorage.form_numberField;
  }
};

btnSubmit.onclick = submitFunc;
