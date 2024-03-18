// Get all category links
const categoryLinks = document.querySelectorAll('.category-link');

// Add click event listener to category links
categoryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links
    categoryLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    e.target.classList.add('active');

    // Update doctors list based on clicked category
    const category = e.target.textContent.toLowerCase();
    updateDoctorsList(category);
  });
});

// Function to update doctors list
function updateDoctorsList(category) {
  // TODO: Implement logic to fetch and display doctors based on the selected category
  console.log(`Showing doctors for category: ${category}`);
}