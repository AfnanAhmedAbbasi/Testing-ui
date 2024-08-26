const signupBtn = document.getElementById('signupBtn');

signupBtn.addEventListener('click', (e) => {

    e.preventDefault();
    const name1 = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name1 === '' || email === '' || password === '') {
        alert('Fill all the Inputs');
    } else {
        const studentObj = {
            Name: name1,
            Email: email,
            Password: password
        };
        console.log(studentObj);
    }
});

function myFunction() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
