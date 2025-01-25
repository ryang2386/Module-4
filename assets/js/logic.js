// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggleMode() {
  const toggleBtn = document.querySelector('#toggle');
  const body = document.querySelector('body');
  let isDark = false;
  toggleBtn.addEventListener('click', function(event) {
    if (isDark === false) {
      body.classList.remove('light');
      localStorage.setItem('mode', 'dark');
      isDark = true;
    } else {
      body.classList.add('light');
      localStorage.setItem('mode', 'light');
      isDark = false;
    }
  });
}

toggleMode();

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const data = JSON.parse(localStorage.getItem('formArray'));
  if (!data) {
    return [];
  }
  return data;
}

readLocalStorage();

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (data) {
  localStorage.setItem('formArray', JSON.stringify(data));

}

// ! Use the following function whenever you need to redirect to a different page

// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };