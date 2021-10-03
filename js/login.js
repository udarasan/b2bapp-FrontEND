hideAll();

function hideAll() {
    $('.loginPage').css({display: "block"});
    $('.createCustomerAccount').css({display: "none"});
    $('.createVendorAccount').css({display: "none"});
}

function showLogin() {
    $('.loginPage').css({display: "block"});
    $('.createCustomerAccount').css({display: "none"});
    $('.createVendorAccount').css({display: "none"});
}

function showCreateCustomerAccount() {
    $('.loginPage').css({display: "none"});
    $('.createCustomerAccount').css({display: "block"});
    $('.createVendorAccount').css({display: "none"});
}

function showCreateVendorAccount() {
    $('.loginPage').css({display: "none"});
    $('.createCustomerAccount').css({display: "none"});
    $('.createVendorAccount').css({display: "block"});
}
$('#toggle-button-1').click(function () {
    showLogin();
})
$('#toggle-button-2').click(function () {
    showCreateCustomerAccount();
})
$('#toggle-button-3').click(function () {
    showLogin();
})
$('#toggle-button-4').click(function () {
    showCreateCustomerAccount();
})

$('#createAccount').click(function () {
    showCreateCustomerAccount();
})

$('#topMenu-logButton').click(function () {
    showLogin();
})

$('#sellOnB2B').click(function () {
    showCreateVendorAccount();
})
/* ---------------------------- login Function is Here ------------------------*/

$('#loginButton').click(function () {

    let email = $('#loginInputEmail').val()
    let password = $('#loginInputPassword').val()
    if (email != "" && password != "") {
        console.log(email)
        loginFunction();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Input Email & Password',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

})

function loginFunction() {
    const email = $('#loginInputEmail').val()
    const password = $('#loginInputPassword').val()

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/user/login?email=" + email + "&password=" + password,
        success: function (resp) {
            if (resp.code == 202) {
                if (resp.data.userType == "CUSTOMER") {
                    console.log(resp.data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    window.location.href = "../index.html";
                } else if (resp.data.userType == "VENDOR") {
                    console.log(resp.data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500

                    })
                    window.location.href = "../pages/vendorDashBoard.html";
                } else {
                    alert("Site admin Login")
                }

            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Wrong!',
                    text: 'Please Input Check Email OR Password',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }

        }
    })
}

/* ---------------------------- Customer Account Create Function is Here ------------------------*/
$('#customerCreateAccButton').click(function () {

    const customerFullName = $('#fullCustomerName').val()
    const customerEmail = $('#customerEmail').val()
    const customerPassword = $('#customerPassword').val()
    const customerCNumber = $('#customerCNumber').val()
    if (customerFullName != "" && customerEmail != "" && customerPassword != "" && customerCNumber != "") {
        console.log(customerEmail)
        createAccount();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All Fields Required',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

})

function createAccount() {
    const customerFullName = $('#fullCustomerName').val()
    const customerEmail = $('#customerEmail').val()
    const customerCNumber = $('#customerCNumber').val()
    const customerPassword = $('#customerPassword').val()

    console.log(customerFullName, customerEmail, customerPassword, customerCNumber)

    $.ajax({
        method: "POST",
        contentType: "application/json",
        async: true,
        url: "http://localhost:8080/api/v1/user/registerUser",
        data: JSON.stringify({
            'userID': "",
            'fullName': customerFullName,
            'email': customerEmail,
            'contact': customerCNumber,
            'userType': "CUSTOMER",
            'password': customerPassword
        }),
        success:function (resp) {
            if (resp.code==201){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account Create Success!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
        error: function (resp) {
           if (resp.status === 400) {
                console.log(resp.data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: '"This User Already Have An Account!"',
                    showDenyButton: false,
                    timer: 1500

                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Wrong!',
                    text: 'Network Error',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    })

}

/* ---------------------------- Vendor Account Create Function is Here ------------------------*/
$('#vendorCreateAccButton').click(function () {

    const vendorFullName = $('#fullVendorName').val()
    const vendorEmail = $('#vendorEmail').val()
    const vendorPassword = $('#vendorPassword').val()
    const vendorCNumber = $('#vendorCNumber').val()
    if (vendorFullName != "" && vendorEmail != "" && vendorPassword != "" && vendorCNumber != "") {
        console.log(vendorEmail)
        createVendorAccount();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All Fields Required',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

})

function createVendorAccount() {
    const vendorFullName = $('#fullVendorName').val()
    const vendorEmail = $('#vendorEmail').val()
    const vendorPassword = $('#vendorPassword').val()
    const vendorCNumber = $('#vendorCNumber').val()

    $.ajax({
        method: "POST",
        contentType: "application/json",
        async: true,
        url: "http://localhost:8080/api/v1/user/registerUser",
        data: JSON.stringify({
            'userID': "",
            'fullName': vendorFullName,
            'email': vendorEmail,
            'contact': vendorCNumber,
            'userType': "VENDOR",
            'password': vendorPassword
        }),
        success:function (resp) {
            if (resp.code==201){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Seller Account Create Success!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },
        error: function (resp) {
            if (resp.status === 400) {
                console.log(resp.data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: '"This Vendor Already Have An Account!"',
                    showDenyButton: false,
                    timer: 1500

                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Wrong!',
                    text: 'Network Error',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    })

}

