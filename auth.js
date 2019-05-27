const signupForm = document.querySelector('#form-signin');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});