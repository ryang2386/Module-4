// TODO: Create a variable that selects the main element, and a variable that selects the back button element
var main = document.querySelector('main');
var backBtn = document.querySelector('#back');
const formArray = JSON.parse(localStorage.getItem('formArray'));
const titleText = formArray.title;
const contentText = formArray.content;

// TODO: Create a function that builds an element and appends it to the DOM
function appendDOM(title, content, username, parentElement) {
  const contentEl = document.createElement('p');
  const titleEl = document.createElement('h2');
  const usernameEl = document.createElement('text');
  contentEl.textContent = content;
  titleEl.textContent = title;
  usernameEl.textContent = 'Created by: ' + username;
    parentElement.appendChild(contentEl);
    parentElement.appendChild(titleEl);
    parentElement.appendChild(usernameEl);
}

// appendDOM(titleText, contentText);
// TODO: Create a function that handles the case where there are no blog posts to display
function NoBlogPosts(blog) {
  // If no blog posts exist, display a message to the user
  if (blog.title === '' && blog.content === '') {
    const noPosts = document.createElement('p');
    noPosts.textContent = 'No blog posts yet!';
    const mainEl = document.querySelector('main');
    mainEl.insertBefore(noPosts, mainEl.firstChild);
    return;
  }
}

// NoBlogPosts(formArray);
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {

  if (formArray.length === 0) {
    NoBlogPosts(formArray);
    return;
  } else {
    const articles = document.querySelectorAll('article');
    articles.forEach((article, index) => {
      if (index < formArray.length) {
        const newPost = formArray[index];
        console.log(newPost);
        appendDOM(newPost.title, newPost.content, newPost.username, article);
      }
    })
      
    };
  }

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function() {
  let redirectURL = '';

  const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
    };
  redirectPage('index.html');
});