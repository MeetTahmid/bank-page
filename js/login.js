function showPass() {
    var show = document.getElementById('user-password')
    if (show.type == 'password') {
        show.type = 'text';
    }
    else (
        show.type = 'password'
    )
}
//step 1 add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
   
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value

    if (email === 'redfox@tahmid.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else (
        alert("Your Password is Wrong")
    )
})