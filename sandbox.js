const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

let usernamePattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = form.username.value;
    if (usernamePattern.test(username) === true){
        feedback.textContent = 'RESULT: Valid username entered';
    }
    else {
        feedback.textContent ='RESULT: Invalid username (username should be 6-12 characters long and must have only letters!)';
    }
});
//live feedback
form.username.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
        console.log('success!');
    }else {
        form.username.setAttribute('class', 'failure');
        console.log('failed');
    }
})


// let testString = "abh2ishek";
// let result = pattern.test(testString);
// console.log(result);