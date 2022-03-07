let border1="solid red 2px";
let border2="solid green 2px";

let fname=document.getElementById("fname");
let error1=document.getElementById("fnameerror");

function fName(){
    let userName=fname.value;
    error1.innerHTML=""
    if(userName==""){
        error1.innerHTML="This field is required";
        fname.style.border=border1;
        return false;
    }

    else{
        fname.style.border=border2;
        return true;
    }
}

let lname=document.getElementById("lname");
let error2=document.getElementById("lnameerror");

function lName(){
    let lastName=lname.value;
    error2.innerHTML=""
    if(lastName==""){
        error2.innerHTML="This field is required";
        lname.style.border=border1;
        return false;
    }

    else{
        lname.style.border=border2;
        return true;
    }
}

let mail=document.getElementById("mail");
let error3=document.getElementById("mailerror");

function eMail(){
    let emailid=mail.value;
    error3.innerHTML=""
    if(emailid==""){
        error3.innerHTML="This field is required";
        mail.style.border=border1;
        return false;
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid)==false){
        error3.innerHTML="invalid email id";
        mail.style.border=border1;
        return false;
    }
    else{
        mail.style.border=border2;
        return true;
    }
}

let passwd=document.getElementById("pwd");
let error4=document.getElementById("pwderror");

function myPassword(){
    let password=passwd.value;
    error4.innerHTML=""
    if(password==""){
        error4.innerHTML="This field is required";
        passwd.style.border=border1;
        return false;
    }

    else{
        passwd.style.border=border2;
        return true;
    }
}

let cpasswd=document.getElementById("cpwd");
let error5=document.getElementById("cpwderror");

function myConfirmpassword(){
    let confirmpassword=cpasswd.value;
    let password=passwd.value;
    error5.innerHTML=""
    if(confirmpassword==""){
        error5.innerHTML="This field is required";
        cpasswd.style.border=border1;
        return false;
    }

    else if(confirmpassword != password){
        error5.innerHTML="This password not match";
        cpasswd.style.border=border1;
        return false;
    }

    else{
        cpasswd.style.border=border2;
        return true;
    }
}




function vali(){
    let s1= fName();
    let s2= lName();
    let s3= eMail();
    let s4=myPassword();
    let s5=myConfirmpassword();

    return (s1 && s2 && s3 && s4 && s5);
}