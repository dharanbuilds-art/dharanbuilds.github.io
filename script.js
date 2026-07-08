const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.onclick = () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  if (!typingText) return;
  const words = [" Open to Opportunities "," Aspiring Web Developer "," Final Year Ct Student "];
  let i = 0, j = 0, current = "", isDeleting = false;

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) { 
        current = words[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        current = words[i].substring(0, j--);
      }

      typingText.textContent = current; 

      if (!isDeleting && j === words[i].length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
  }

  type();
});




const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        const bars = entry.target.querySelectorAll('.skills-grid');
        bars.forEach(b => b.classList.add('in'));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));


/*  ****************  ************  Contact form -> mailto redirect  ****************  *************** */

const YOUR_EMAIL = "jhdkf12@gmail.com"; // change this to the email you want messages sent to

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subjectField = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your name, email and message before sending.');
      return;
    }

    const subject = subjectField || `Portfolio contact from ${name}`;

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      '',
      'Message:',
      message
    ];
    const body = bodyLines.join('\n');

    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}

