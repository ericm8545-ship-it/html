document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'grid'; // Show matching card
                } 
                
                else 
                {
                    card.style.display = 'none'; // Hide non-matching card
                }
            });
    
        });
    });

    // CONTACT FORM VALIDATION & SUBMISSION
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (contactForm && formMessage) 
    {
        contactForm.addEventListener('submit', (e) => 
        {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const serviceInput = document.getElementById('service');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const service = serviceInput.value.trim();
            const message = messageInput.value.trim();

            if ((name === '' || email === '' || message === '')) {
                formMessage.textContent = 'Please fill in all name, email address and message before submitting.';
                formMessage.style.color = 'red';
                return;
            }

            formMessage.style.color = 'black';
            formMessage.textContent = `Thank you, ${name}, for your message! We will get back to you shortly.`;
            contactForm.reset();
        });
    } // 

    // INTERACTIVE FAQ SECTION
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => 
        {
            const answer = button.closest('.faq-item').querySelector('.faq-answer');
            if (!answer) return;

            const isHidden = answer.style.display === 'none' || answer.style.display === '';
            answer.style.display = isHidden ? 'block' : 'none';
        });
    });

}); 
