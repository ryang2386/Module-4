// TODO: Create a variable that selects the main element, and a variable that selects the back button element
var main = document.querySelector('main');
var backBtn = document.querySelector('#back');
const formArray = JSON.parse(localStorage.getItem('formArray'));
const titleText = formArray.title;
const contentText = formArray.content;
// console.log(titleText);
// console.log(contentText);
// TODO: Create a function that builds an element and appends it to the DOM
function appendDOM(title, content) {
  const contentEl = document.createElement('p');
  const titleEl = document.querySelector('h2');
  contentEl.textContent = content;
    titleEl.textContent = title;
    const parentElement = document.querySelector('article');
    parentElement.appendChild(contentEl);
    parentElement.appendChild(titleEl);
}

// appendDOM(titleText, contentText);
// TODO: Create a function that handles the case where there are no blog posts to display
function NoBlogPosts(blog) {
  // If no blog posts exist, display a message to the user
  if (blog.title === '' && blog.content === '') {
    const noPosts = document.createElement('p');
    noPosts.textContent = 'No blog posts yet!';
    const mainEl = document.querySelector('main');
    // console.log(noPosts);
    mainEl.insertBefore(noPosts, mainEl.firstChild);
  }
}

// NoBlogPosts(formArray);
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(blog) {
  if (blog.title !== '' && blog.content !== '') {
    appendDOM(blog.title, blog.content);
  } else {
    NoBlogPosts(blog);
  }
}

// TODO: Call the `renderBlogList` function
renderBlogList(formArray);

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function() {
  redirectPage('../index.html');
});