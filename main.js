// Get the navbar element
var navbar = document.getElementById("navbar");

// Attach click event listeners to the navbar links
navbar.addEventListener("click", function (event) {
  // Check if the clicked element is a link
  if (event.target.tagName === "A") {
    event.preventDefault();

    // Get the target section ID from the link's href attribute
    var targetSectionId = event.target.getAttribute("href").substring(1);

    // Scroll to the target section with the fixed header offset
    scrollToElement(targetSectionId);
  }
});

// Function to scroll to an element with header offset
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  var header = document.getElementById("header");
  var headerHeight = header.offsetHeight;

  if (element) {
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");

  if (window.pageYOffset > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var coll = document.getElementsByClassName("workEx-item-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function handleSubmit(event) {
  event.preventDefault();

  // Accessing form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Printing inputs to console
  console.group("Contact Form Data");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  console.groupEnd();
}
