

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