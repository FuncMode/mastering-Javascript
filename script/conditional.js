

/* let day = new Date();

switch(day.getDay()) {
    case 1 : {
        alert('MONDAY');
        break;
    }
    case 2 : {
        alert('TUESDAY');
        break;
    }
    case 3 : {
        alert('WENESDAY');
        break;
    }
    case 4 : {
        alert('THURSDAY');
        break;
    }
    case 5 : {
        alert('FRIDAY');
        break;
    }
    case 6 : {
        alert('SATURDAY');
        break;
    }
    case 7 : {
        alert('SUNDAY');
        break;
    }
    default : {
        alert('invalid day!');
    }
}
 */


// form validation basic

/* 
(() => {
    
    const inputUsername = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const validationMessage = document.querySelector('#message');

    // dynamic validation

    inputUsername.addEventListener('input', (e) => {

        let usernameValue = e.target.value;

        if(usernameValue === '') {
            validationMessage.textContent = '';
            return;
        }

        if(!/^[A-Za-z0-9]{8}$/.test(usernameValue) || /^\s$/.test(usernameValue)) {
            validationMessage.textContent = `please input 6 characters (letters and numbers) and no space`;
        } else {
            validationMessage.textContent = `✅ valid: ${usernameValue}`;

            setTimeout(() => {
                validationMessage.textContent = '';
            }, 2000);
        }
    });


        inputPassword.addEventListener('input', (e) => {

            let passwordValue = e.target.value;

            if(passwordValue === '') {
                validationMessage.textContent = '';
                return;
            }

            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordValue)) {
                validationMessage.textContent = 'May uppercase, lowercase, number, 8+ chars';
            } else {
                validationMessage.textContent = `✅ valid: ${passwordValue}`; 
            }
        })

    // function dynamicValidationInput() {
    //     validationMessage.textContent = '';

    //     const inputUsernameValue = inputUsername.value.trim();
    //     const inputPasswordValue = inputPassword.value.trim();
        

    //     if((inputUsernameValue || inputPasswordValue) === '') {
    //         validationMessage.textContent = '';
    //         return;
    //     }

    //     if(!/^[A-Za-z0-9_]{8}$/.test(inputUsernameValue) || /^\s$/.test(inputUsernameValue)) {
    //         validationMessage.textContent = `please input 6 characters (letters and numbers) and no space`;
    //     }  else {
    //         validationMessage.textContent = `✅ ${inputUsernameValue}`;
    //     }

    //     if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(inputPasswordValue)) {
    //         validationMessage.textContent = `please input format letter upper or lower and has a numbr and 8 characters`;
    //     } else {
    //         validationMessage.textContent = `✅ ${inputPasswordValue}`;
    //     }
    // }

    function submitData(e) {
        e.preventDefault();

        const inputUsernameValue = inputUsername.value.trim();
        const inputPasswordValue = inputPassword.value.trim();

        if(!(inputUsernameValue || inputPasswordValue)) {
            validationMessage.textContent = `please Enter your username and password!`;
            return;
        }

        alert('success!');
        
        inputUsername.value = '';
        inputPassword.value = '';

    }

    document.addEventListener('submit', submitData);


})(); */


/* const inputAge  = prompt('type your age');
                // (ok or false click)         (if true user input not a number)                 
const message = !inputAge ? alert('thanks') : isNaN(inputAge) ? alert('not a number, please try again!') : inputAge >= 18 ? alert('adult') : alert('minor'); */



/* const message = document.querySelector('#message');
// elements addEvent base input
document.querySelector('#username').addEventListener('input', (e) => {
    
    let getValue = e.target.value;

    if(!getValue) {
        message.textContent = '';
        return;
    }

    const isValid = /^[a-z0-9]{8}$/i.test(getValue);

    message.textContent = isValid ? `✅ valid ${getValue}` : `❌ Should be exactly 8-character combination of letters and numbers. Please try again.`;
}) */


// document base

/* document.addEventListener('input', dynamicValidation)

function dynamicValidation(e) {

    let getValue = e.target.value;

    if(!getValue) {
        message.textContent = '';
        return;
    }

    const isValid = /^[a-z0-9]{8}$/i.test(getValue);

    message.textContent = isValid ? `✅ valid ${getValue}` : `❌ Should be exactly 8-character combination of letters and numbers. Please try again.`;
}
 */

// root of the dom

/* window.addEventListener('input', dynamicValidation)

function dynamicValidation(e) {

    let getValue = e.target.value;

    if(!getValue) {
        message.textContent = '';
        return;
    }

    const isValid = /^[a-z0-9]{8}$/i.test(getValue);

    message.textContent = isValid ? `✅ valid ${getValue}` : `❌ Should be exactly 8-character combination of letters and numbers. Please try again.`;
} */

    // document.addEventListener('input', function (e) {

    //     console.log(e)
    // })



/*     (() => {

        const usernameInput = document.querySelector('#username');
        const usernameRegex = /^[a-z0-9]{8}$/i;
        const messageContainer = document.querySelector('#message');

        function attachValidator({input, regex, messageContainer, messageError}) {
            input.addEventListener('input', (e) => {

                const { id, value } = e.target;
                
                if(!value) {
                    messageContainer.textContent = '';
                    input.className = '';
                    return;
                }

                if(id === 'username') {

                    const isValid = regex.test(value);
                    
                    input.className = isValid ? 'valid' : 'invalid';
                    messageContainer.textContent = isValid ? '' : messageError;
                }
            })
        }

        attachValidator({
            input: usernameInput,
            regex: usernameRegex,
            messageContainer: messageContainer,
            messageError: '❌ Invalid username Format'
        })

    })(); */

    // document.addEventListener('click', () => {
    //     document.body.classList.toggle('background');
    // })


/*     let isActive = true;

    document.addEventListener('click', () => {
        isActive = !isActive;

        document.body.style.background = isActive ? '#fff' : '#000';
    }) */


/*     function checkUserStatus(role) {

        switch(role) {
            case 'admin' : {
                alert('Welcome admin!');
                break;
            };
            case 'guest' : {
                alert('Welcome guest!');
                break;
            };

            default : {
                alert('Access Denied!');
                break;
            }
        }
    } 
    checkUserStatus('admin'); */


    