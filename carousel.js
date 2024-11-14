// Get the elements
const editor = document.getElementById('editor');
const applyChangesButton = document.getElementById('apply-changes');
const sectionToEdit = document.getElementById('section-to-edit');

// Function to update the content of the section with the new HTML
applyChangesButton.addEventListener('click', () => {
  const newHTML = editor.value; // Get the HTML content from the textarea
  sectionToEdit.innerHTML = newHTML; // Update the section content
  alert('Changes applied!');
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.animate-carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalWidth = items.length * items[0].offsetWidth;
  
  // Set the width of the carousel to fit all the items in one line
  carousel.style.width = `${totalWidth}px`;

  // Duplicate the items at the end for seamless scrolling
  const cloneItems = Array.from(items).map(item => item.cloneNode(true));
  cloneItems.forEach(item => carousel.appendChild(item));

  // Add event listener to detect when the animation completes a cycle
  let forward = true;
  carousel.addEventListener('animationiteration', () => {
      // Reverse the direction of the animation after a complete cycle
      if (forward) {
          carousel.style.animation = 'carouselBackward 10s linear infinite';
      } else {
          carousel.style.animation = 'carouselForward 10s linear infinite';
      }
      forward = !forward; // Toggle direction
  });
});
