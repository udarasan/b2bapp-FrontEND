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

let productName=$('#productName').val();
let sellerID=sessionStorage.getItem('userID');
let productDetail=$('#productDetail').val();
let productQTy=$('#productQTY').val();
let onePiecePrice=$('#onePiecePrice').val();
let totalPrice=$('#productTotalPrice').val();
let productLocation=$('#productLocation').val();
let productCategoryID=$('#productCategory').val();
let productImage= new FormData();
for (let file of document.getElementById('productImage').files) {
    productImage.append("file", file);
}
//todo : check image upload api and seller id caching? and flow and image file save location,after that do the home page design complte
$('#addProduct').click(function () {

    if (productName != "" && sellerID != "" && productDetail != "" && productQTy != "" &&
        onePiecePrice != "" && totalPrice != "" && productLocation != "" && productCategoryID != "" && productImage != "" ) {
        console.log(productName,sellerID,productDetail,productQTy,onePiecePrice,totalPrice,productLocation,productCategoryID,productImage)
        addProduct();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All Fields Required',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }




})

function addProduct() {
    $.ajax({
        method: "POST",
        contentType: false,
        processData: false,
        url: "http://localhost:8080/api/v1/product/saveProductImage",
        async: true,
        data: productImage,

        success: function (resp) {
            console.log(resp.data);

            if (resp.code == 200) {
                $.ajax({
                    method: "POST",
                    contentType: "application/json",
                    url: "http://localhost:8080/api/v1/product/saveProduct",
                    data: JSON.stringify({
                        'PID': "",
                        'productName': productName,
                        'sellerID': sellerID,
                        'productDetail': productDetail,
                        'productQTy': productQTy,
                        'onePiecePrice': onePiecePrice,
                        'totalPrice': totalPrice,
                        'productLocation': productLocation,
                        'productCategoryID': productCategoryID,
                        'productImage': productImage,
                    }),
                    success: function (rt) {
                        if (rt.code == 201) {
                            console.log("Uba nm mara waddek oi habai oluwa loku karagnnepa.thawa igena ganin hondata")
                            confirm("Product is Added");
                            getAllCars();
                        } else {
                            console.log("Please Try Again")
                        }
                    }
                })

            }
        }
    })
}

