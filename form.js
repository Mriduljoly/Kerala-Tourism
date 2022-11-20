//Email validation//
let email = document.getElementById("email");
let error = document.getElementById("emailerror");
function validate() {
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
    }
    else {
        error.innerHTML = "Invalid";
        error.style.color = "red";
    }
}

//Phone Number Validation
let pn = document.getElementById("phonenumber")
let pnerror = document.getElementById("pnerror")
function checkpn() {
    let regex2 = /^\(?([1-9]{3})\)?[-. ]?([1-9]{3})[-. ]?([1-9]{4})$/;
    if (regex2.test(pn.value)) {
        pnerror.innerHTML = "valid";
        pnerror.style.color = "green";
    }
    else {
        pnerror.innerHTML = "Invalid"
        pnerror.style.color = "Red";
    }
}

//Pwd validation
let pwd = document.getElementById("Password");
let pwderror = document.getElementById("pwderror");

function pwdvalidation(){
    if (pwd.value.length<=8){
        pwderror.innerHTML = "Poor Password!";
        pwderror.style.color = "red";
    }
    else (pwd.value.length=10);{
        pwderror.innerHTML = "Password Strength:Medium";
        pwderror.style.color = "orange";
    }
    if (pwd.value.length>=11){
        pwderror.innerHTML = "Strong Password!";
        pwderror.style.color = "green";
    }
}