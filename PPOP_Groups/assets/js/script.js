'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const orderNowBtn = document.getElementById('order-now-btn1');
  const orderModal = document.getElementById('orderModal');
  const modalSubmitBtn = orderModal.querySelector('form button[type="submit"]');
  const backgroundError = document.querySelector('.background_error');
  const body = document.body;

  let clickCount = 0;

  // Hide the .background_error div initially
  backgroundError.style.display = 'none';

  // Event listener for ORDER NOW button clicks
  orderNowBtn.addEventListener('click', function() {
      clickCount++;

      // Determine if click count is even or odd
      if (clickCount % 2 === 0) {
          // Even click count: Show background error, cover entire page
          backgroundError.style.display = 'flex';
          body.classList.add('no-scroll'); // Add class to hide scrollbar
          
          setTimeout(function() {
              window.location.reload(); // Refresh the page after 5 seconds
          }, 5000);
      } else {
          // Odd click count: Show the modal
          orderModal.style.display = 'block';
      }
  });

  // Event listener for modal form submit button
  modalSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (for demonstration)
    
    // Check if all required inputs have values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const concert = document.getElementById('concert').value;
    const tickets = document.getElementById('tickets').value;

    if (name && email && concert && tickets) {
        // All required fields have values: submit the form
        alert('Thank you for submitting! Buzzing Beats will email you about the ticket.');
        orderModal.style.display = 'none'; // Close the modal after submission
    } else {
        // Show an error message or handle empty fields as needed
        alert('Please fill in all required fields.');
    }
});

  // Modal close button functionality
  const closeModalBtn = orderModal.querySelector('.close');
  closeModalBtn.addEventListener('click', function() {
      orderModal.style.display = 'none';
  });
});

// Get the modal element
var modal = document.getElementById('orderModal');

// Get the close button element
var closeBtn = document.getElementsByClassName('close')[0];

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// When the close button is clicked, hide the modal
closeBtn.onclick = function(event) {
  event.stopPropagation(); // Prevents the click event from bubbling up
  modal.style.display = 'none';
};

// Example: Triggering modal on button click
var orderBtn = document.getElementById('order-now-btn1');
orderBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevents the click event from bubbling up
  showModal();
});

// Prevent modal from closing when clicking outside of it
modal.onclick = function(event) {
  event.stopPropagation(); // Prevents the click event from bubbling up
};

// Hide modal when clicking outside of it
window.onclick = function(event) {
  modal.style.display = 'none';
};


document.getElementById('orderForm').addEventListener('submit', function(event) {
  var form = event.target;
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});
