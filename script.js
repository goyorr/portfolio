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
