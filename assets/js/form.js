// TODO: Create a variable that selects the form element
const formInput = document.querySelector('form');

console.log(formInput.value);
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function formSubmission (formInput) {
    const usernameValue = formInput.document.querySelector("#username");
    const titleValue = formInput.document.querySelector("#title");
    const contentValue = formInput.document.querySelector("#content");
    const errorMsg = document.getElementById("#error");
    if (usernameValue == "" || titleValue == "" || contentValue == "") {
        errorMsg.textContent = "Please complete the form."
    } else {
        localStorage.setItem('formInput', formInput);
        redirectPage(blog.html);
    }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.