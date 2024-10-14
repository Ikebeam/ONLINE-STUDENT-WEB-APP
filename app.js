const signupContainer = document.querySelector(".signup_container");
const closebtn = document.querySelector(".close_btn");
const signup = document.querySelector(".signup");
const getStarted = document.querySelector(".learn");

signup.addEventListener("click", () => {
    signupContainer.style.display = "block";
})

closebtn.addEventListener("click", () => {
    signupContainer.style.display = "none";
})

signupContainer.style.display = "none";

getStarted.addEventListener("click", () => {
    signupContainer.style.display = "block";
})

window.addEventListener('click', function(event) {
    if (event.target === signupContainer) {
        signupContainer.style.display = 'none';
    }
});


const siginContainer = document.querySelector(".signin_container");
const closebttn = document.querySelector(".close_bttn");
const login = document.querySelector(".signin_btn");
const signin = document.querySelector(".signin");

signin.addEventListener("click", () => {
    siginContainer.style.display = "block";
})

closebttn.addEventListener("click", () => {
    siginContainer.style.display = "none";
})

window.addEventListener("click", function(event) {
    if(event.target === siginContainer) {
        siginContainer.style.display = "none";
    }
})

