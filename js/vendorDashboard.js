loginCheck();
function loginCheck() {
    let email=sessionStorage.getItem('email');
    let password=sessionStorage.getItem('password');
    let userName=sessionStorage.getItem('userName');
    let userType=sessionStorage.getItem('userType');

    if (userType == "VENDOR"){
        console.log("ssss"+userName)
        //set dashboard username
        $('#vendorUserName').append(userName);
        //console.log(email,password,userName);
    }else {
        console.log("ee")
        window.location.href = "../index.html";
    }
}