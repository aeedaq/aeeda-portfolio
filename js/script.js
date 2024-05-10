document.addEventListener("DOMContentLoaded", () => {
  // Get the navigation links and add event listeners for clicks
  const aiContentLink = document.querySelector('nav a[href="#ai-content"]');
  const experienceLink = document.querySelector('nav a[href="#experience"]');
  const photographyLink = document.querySelector('nav a[href="#photography"]');

  // Function to handle smooth scrolling
  function handleScroll(event) {
      event.preventDefault();
      // Scroll smoothly to the target element
      document.querySelector(event.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  }

  // Attach event listeners to the links
  if (aiContentLink) {
      aiContentLink.addEventListener('click', handleScroll);
  }
  if (experienceLink) {
      experienceLink.addEventListener('click', handleScroll);
  }
  if (photographyLink) {
      photographyLink.addEventListener('click', handleScroll);
  }
});

document.querySelector('.more-non-profit-videos').addEventListener('click', function() {
  // Redirect the user to the specified URL when the button is clicked
  window.location.href = 'https://cleanairpartnership.thinkific.com/courses/Municipalclimate101';
});
