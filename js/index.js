loginCheck();
function loginCheck() {
    let email=localStorage.getItem('email');
    let password=localStorage.getItem('password');
    let userName=localStorage.getItem('userName')
    if (email && password && userName == null){
        console.log("null")
    }else {
        $('#userName').append(userName);
        console.log(email,password,userName);
    }
}