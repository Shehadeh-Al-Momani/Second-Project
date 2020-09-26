const headerText = "Hello world";
// create a new h1 element with class header
const header = $(`<h1 class="header"> ${headerText} </h1>`);

// select the body
const body = $("body");
// add the header to the body
body.append(header);

// change the header text and color
header.text("Hello");
header.css("color", "#00f");

// remove the header class and add a new class
header.removeClass("header");
header.addClass("new-class");

const numbers = [1, 2, 3, 4, 5, 6, 7];
// create a new ul element
const ul = $(`<ul></ul>`);

// append it to the body
body.append(ul);

numbers.forEach(function (number) {
  // create li element
  const li = $(`<li> ${number}</li>`);
  li.css("list-style", "none");
  ul.append(li);
});

const button = $(`<button> Add </button>`);
const input = $(`<input type="text">`);

body.append(input, button);

// add on click event listener
button.on("click", function () {
    console.log(input.val());
});

