'use strict'
// JavaScript
const password = document.querySelector('.password');
const confirmPass = document.querySelector('.passConfirm');
const RegBtn = document.querySelector('.enter');

RegBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let passVal = password.value;
    let confirm = confirmPass.value;
    // console.log(passVal, confirm);

    if (passVal !== confirm) {
        alert("Passwords are not the same");
    } else {

        console.log("Passwords matched. Proceeding to the next page...");
        // document.querySelector('form').submit();
    }
});

