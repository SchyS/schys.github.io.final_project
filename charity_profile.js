const volunteerButton = document.getElementById('volunteer-btn');

volunteerButton.addEventListener('click', () => {
  const contactForm = document.getElementById('contact-form');
  contactForm.style.display = 'block';
});

const charityName = document.getElementById('charity-name');
const charityDetails = document.getElementById('charity-details');

charityName.addEventListener('mouseover', () => {
  charityDetails.style.display = 'block';
});

charityName.addEventListener('mouseout', () => {
  charityDetails.style.display = 'none';
});
