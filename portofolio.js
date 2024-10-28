
//=============== EMAIL JS ===============
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d45h81k', 'template_ctb6ks3', '#contact-form', 'YhirVfsPh-byHkc_A')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully!';
        contactMessage.style.color = 'green'; // Success color

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }, (error) => {
        contactMessage.textContent = `Message not sent (error: ${error.text})`;
        contactMessage.style.color = 'red'; // Error color
    });
};

contactForm.addEventListener('submit', sendEmail);

//=============== SHOW SCROLL UP ===============
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show-scroll');
    } else {
        scrollUpBtn.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

//=============== SCROLL REVEAL ANIMATION ===============
// Add scroll reveal code here if needed.
