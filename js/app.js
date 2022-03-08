function myFun(){
    var a=document.getElementById("User_Name").value;
    var b=document.getElementById("pwd").value;
    var isvalid=true;
    if(a==""){
        document.getElementById("Message").innerHTML="Please fill username";
        isvalid=false;
    }
    // if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.value)){
    //     document.getElementById("Message").innerHTML="Please fill username";
    //     isvalid=false;
    // }

    if(b==""){
        document.getElementById("msg").innerHTML="Please fill email";
        isvalid=false;
    }

    return isvalid;

}