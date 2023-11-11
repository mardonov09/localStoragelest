const loginForm = document.querySelector("#logForm");
const logLogin = document.querySelector("#logLogin");
const logPassword = document.querySelector("#logPassword");
const signUpLink = document.querySelector("#signUpLink");
const logWindow = document.querySelector("#logWindow");

const signUpForm = document.querySelector("#sigForm");

const signUpEmail = document.querySelector("#sigEmail");
const signUpUsername = document.querySelector("#sigUsername");

const signUpPassword = document.querySelector("#sigPassword");
const signUpPassword2 = document.querySelector("#sigPassword2");

const loginLink = document.querySelector("#logLink");
const signUpWIndow = document.querySelector("#signUpWindow");

loginForm.addEventListener("submit", loginCheck);
signUpForm.addEventListener("submit", signUp)
signUpLink.addEventListener("click", showSignUp)

function loginCheck(evt){
    // TODO Предотвращаем обновление страницы
    evt.preventDefault();

    // TODO Проверка логина и пароля
    const userFromLS = JSON.parse(localStorage.getItem(logLogin.value))
    if (!userFromLS){
        alert('There is now user with this email')
    } else {
        if (logLogin.value === userFromLS.email && logPassword.value === userFromLS.password){
            alert("Welcome")
        } else {
            alert("Wrong email or password")
        }
    }

    // TODO Очистка инпутов
    logLogin.value='';
    logPassword.value='';
}

function showSignUp(evt){
    // TODO Предотвращаем обновление страницы
    evt.preventDefault()

    logWindow.classList.toggle("d-none");
    signUpWIndow.classList.toggle("d-none")
}

function signUp(evt){
    evt.preventDefault();

    const user = {};
    if (localStorage.getItem(signUpEmail.value)){
        alert("User with this email already exists")
    } else {
        user['email'] = signUpEmail.value;
        user['username'] = signUpUsername.value;
    
        if (signUpPassword.value === signUpPassword2.value) user['password'] = signUpPassword.value;
    
        localStorage.setItem(signUpEmail.value, JSON.stringify(user))
    }
    
    signUpEmail.value = signUpPassword.value = signUpPassword2.value = signUpUsername.value = ""

    showSignUp()
}