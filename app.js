/* QUESTION 01
1. Create a signup form and display form data in your web
page on submission. */

const signupForm = document.getElementById('signupForm');
const outputDiv = document.getElementById('output');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    const outputHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    outputDiv.innerHTML = outputHTML;
    signupForm.reset();
});

/* QUESTION 02 
2. Suppose in your webpage there is content area in which
you have entered your item details, but user can only see
some details on first look. When user clicks on “Read
more” button, full detail of that particular item will be
displayed. */

// document.addEventListener("DOMContentLoaded", function () {
//     const readMoreButtons = document.querySelectorAll(".read-more-button");

//     readMoreButtons.forEach(button => {
//         button.addEventListener("click", function () {
//         });
//     });
// });
const readMoreButton = document.getElementById("read-more-button");

readMoreButton.addEventListener('click', function () {
    const item = this.closest(".item");
    const summary = item.querySelector(".summary");
    const details = item.querySelector(".details");

    if (details.style.display === "none") {
        details.style.display = "block";
        summary.style.display = "none";
        readMoreButton.textContent = "Read less";
    } else {
        details.style.display = "none";
        summary.style.display = "block";
        readMoreButton.textContent = "Read more";
    }
});

/* QUESTION 03
3. In previous assignment you have created a tabular data
using javascript. Let’s modify that. Create a form which
takes student’s details and show each student detail in
table. Each row of table must contain a delete button and
an edit button. On click on delete button entire row should
be deleted. On click on edit button, a hidden form will
appear with the values of that row. */

