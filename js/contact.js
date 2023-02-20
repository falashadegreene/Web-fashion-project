'use strict';

// Submit form 

let emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Input a value in both fields!");
  } else {

    alert("Submitted successfully! Thank you!");
    console.log(
      `This form has a name of ${name.value} and email of ${email.value}`
    );

    name.value = "";
    email.value = "";
  }

});