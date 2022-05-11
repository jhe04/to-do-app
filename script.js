const formElement = document.querySelector("form");

//add a submit event listener on the form
formElement.addEventListener("submit", function (e) {
  // stop the page from refreshing when the form is submitted
  e.preventDefault();

  const inputElement = document.querySelector("#toDoItem");

  // check that user has entered in a value
  if (inputElement.value) {
    // grab the user's to-do item from the form input and put into an li
    const liElement = document.createElement("li");
    // create box icon
    liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;

    // create text node
    const toDoContent = document.createTextNode(inputElement.value);

    liElement.appendChild(toDoContent);
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

// eventListener for our 'li' using event propagation
document.querySelector("ul").addEventListener("click", function (e) {
  // check we're specifically clicking on the checkbox
  if (e.target.nodeName === "I") {
    // toggle between checked/unchecked
    e.target.classList.toggle("fa-square");
    e.target.classList.toggle("fa-square-check");
    e.target.parentElement.classList.toggle("text-muted");
  }
});
