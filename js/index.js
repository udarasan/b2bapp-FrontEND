loginCheck();
function loginCheck() {
    let email=sessionStorage.getItem('email');
    let password=sessionStorage.getItem('password');
    let userName=sessionStorage.getItem('userName')
    if (email && password && userName == null){
        console.log("null")
    }else {
        $('#userName').append(userName);
        console.log(email,password,userName);
    }
}