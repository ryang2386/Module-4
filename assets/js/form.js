// TODO: Create a variable that selects the form element
const formInput = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const formSubmission = function (event) {
    event.preventDefault();
    
    const usernameText = document.querySelector('#username').value.trim();
    const titleText = document.querySelector('#title').value.trim();
    const contentText = document.querySelector('#content').value.trim();
    
    if (usernameText === '' || titleText === '' || contentText === '') {
        const errorMsg = document.getElementById('error');
        errorMsg.textContent = "Please complete the form."
        return errorMsg;
    }

    const newBlog = {
        username: usernameText,
        title: titleText,
        content: contentText,
    };
    let formArray = JSON.parse(localStorage.getItem('formArray')) || [];
    formArray.push(newBlog);
    storeLocalStorage(formArray);
    let redirectURL = '';

    const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
    };

    redirectPage('blog.html');
};




// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formInput.addEventListener('submit', formSubmission);
