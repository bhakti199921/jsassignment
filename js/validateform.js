var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var email = document.getElementById("mail");
var password=document.getElementById("pwd");
var cpassword=document.getElementById("cpwd");
var form =document.getElementById("signup");
var submit =document.getElementById("submit");

var registrationForm = document.getElementById("form");
var lerror = document.getElementById("fnameerror");
var lastError = document.getElementById("lnameerror");
var mailnameerror = document.getElementById("mailerror");
var passwordError =document.getElementById("pwderror");
var cpasswordError =document.getElementById("cpwderror");


firstName.addEventListener('input',function(e){
var pattern=/^[a-zA-Z]{2,10}$/;
var currentValue=e.target.value;
var valid=pattern.test(currentValue);
if(valid){
lerror.style.display='none';
return false;

}else{
lerror.style.display='block';
return true;
}
return
});

lastName.addEventListener('input',function(d){
var last=/^[a-zA-Z]{4,50}$/;
var currentValue=d.target.value;
var validlast=last.test(currentValue);
if(validlast){
lastError.style.display='none';
return false;
}else{
lastError.style.display='block';
return true;
}
});

email.addEventListener('input',function(m){
var mailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var currentValue=m.target.value;
var validmail=mailexp.test(currentValue);
if(validmail){
mailnameerror.style.display='none';
return false;
}else{
mailnameerror.style.display='block';
return true;
}
});

password.addEventListener('input',function(p){
var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var currentValue=p.target.value;
var validpassword=regularExpression.test(currentValue);
if(validpassword){
passwordError.style.display='none';
return false;
}else{
passwordError.style.display='block';
return true;
}
});

cpassword.addEventListener('input',function(cp){
// var confirmpwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// var currentValue=cp.target.value;
// var validCpassword=confirmpwd.test(currentValue);
if(password.value === cpassword.value){
cpasswordError.style.display='none';
return false;
}else{
cpasswordError.style.display='block'
return true;
}
});



submit.addEventListener("click",()=>{
    
    if(firstName==''){
        lerror.style.display='block';
        return false;
    }
    if(lastName==''){
        lastError.style.display='block';
        return false;
    }

    else{
        lerror.style.display='none';
        return true;
//         lastError.style.display='none';
//         let cred={
// firstName:`${firstName.currentValue}`,
// lastName:`${lastName.currentValue}`,
//         }
//         console.log(cred);
    }
});
