const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('email-error');
const signUpCard = document.getElementById('sign-up-card');
const thanksCard = document.getElementById('thanks-message');
const dismissButton = document.getElementById('dismiss-button');

function handleSubmit(event) {
    event.preventDefault(); // prevent page reload

    // retrieve email
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    // validate email
    const email = data.email;
    if (validateEmail(email)) {
        // success state
        console.log('Email is valid');
        emailInput.classList.remove('invalid');
        errorMessage.style.display = 'none';
        signUpCard.style.display = 'none';
        thanksCard.style.display = 'block';
    } else {
        // error state
        console.log('Email is invalid');
        emailInput.classList.add('invalid');
        errorMessage.style.display = 'inline';
    }
    
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', handleSubmit);

dismissButton.addEventListener('click', () => {
    thanksCard.style.display = 'none';
    signUpCard.style.display = 'flex';
    emailInput.value = '';
});

