const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(email.value)){
    showSuccess(email)
   } else {
       showError(email, 'Email is not valid')
   }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small')
    small.innerText = message
};

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkInput(inputArr) {
    inputArr.forEach(function(input) {if(input.value.trim() === ''){
        showError(input, `${getName(input)} is required`);
    } else {
        showSuccess(input);
    }

    });
}

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getName(input)} must be less than ${max} characters`)
    }
}

function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'password is not matched');
    }
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkInput ([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});