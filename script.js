// clicking on a task allows you to toggle between checked/unchecked

const formElement = document.querySelector("form");
console.log(formElement);

//add a submit event listener on the form
formElement.addEventListener("submit", function (e) {
  // stop the page from refreshing when the form is submitted
  e.preventDefault();

  const inputElement = document.querySelector("#toDoItem");

  // check that user has entered in a value
  if (inputElement.value) {
    // grab the user's to-do item from the form input and put into an li
    const liElement = document.createElement("li");
    liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
    console.log(liElement);
    // add li element to the ul
    document.querySelector("main ul").appendChild(liElement);
    // display to do on the page (within an li)
    // include a checkbox icon within the li
  } else {
    console.log(`please enter in a value`);
  }
  // clear the input
  inputElement.value = "";
});
