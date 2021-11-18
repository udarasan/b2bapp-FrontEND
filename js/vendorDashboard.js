loginCheck();
function loginCheck() {
    let email=localStorage.getItem('email');
    let password=localStorage.getItem('password');
    let userName=localStorage.getItem('userName');
    let userType=localStorage.getItem('userType');

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


//todo : check image upload api and seller id caching? and flow and image file save location,after that do the home page design complte
$('#addProduct').click(function () {

    let productName=$('#productName').val();
    let sellerID=localStorage.getItem('userID');
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

    if (productName != "" && sellerID != "" && productDetail != "" && productQTy != "" &&
        onePiecePrice != "" && totalPrice != "" && productLocation != "" && productCategoryID != "" && productImage != "" ) {
        console.log(productName,sellerID,productDetail,productQTy,onePiecePrice,totalPrice,productLocation,productCategoryID,productImage)
        addProduct();
    } else {
        console.log(productName)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'All Fields Required',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

    function addProduct() {
        console.log(productLocation)
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
                            'sellerID': {"userID":sellerID},
                            'productDetail': productDetail,
                            'productQTy': productQTy,
                            'onePiecePrice': onePiecePrice,
                            'totalPrice': totalPrice,
                            'productLocation': productLocation,
                            'productCategoryID': productCategoryID,
                            'productImage': resp.data,
                        }),
                        success: function (rt) {
                            if (rt.code == 201) {
                                console.log("Uba nm mara waddek oi habai oluwa loku karagnnepa.thawa igena ganin hondata")
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                window.location.reload();
                            } else {
                                console.log("Please Try Again")
                            }
                        },
                        error: function (request, status, error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Please Provide valid Details',
                                footer: '<a href="">Why do I have this issue?</a>'
                            })
                        }
                    })

                }
            },
            error: function (request, status, error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Upload Image!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        })
    }


})

function logout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    localStorage.removeItem('products');
    window.location.href = "../index.html";
}
loadAllProductByUserID();

function loadAllProductByUserID() {

    let userID=localStorage.getItem('userID')
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product/getProductsByUserID/"+userID,
        success: function (resp) {
            if (resp.code == 200) {

                $('#productTable>tbody').empty();
                console.log(resp.data)

                for (let prod of resp.data) {

                    let productImage = "<img style='width: 100px; height: 100px' src='../image/product/" + prod.productImage + "'>"
                    let productName = prod.productName;
                    let productCategory = prod.productCategoryID;
                    let productOnePiecePrice = prod.onePiecePrice;
                    let productTotalPrice = prod.totalPrice;
                    let productQTY = prod.productQTy;
                    let productDetail = prod.productDetail;
                    let productLocation = prod.productLocation;
                    let pid=prod.pid;


                    var row = `<tr><td>${pid}</td><td>${productImage}</td><td>${productName}</td><td>${productCategory}</td><td>${productOnePiecePrice}</td><td>${productTotalPrice}</td><td>${productQTY}</td><td>${productDetail}</td><td>${productLocation}</td></tr>`;
                    $('#productTable').append(row);
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }

    })
}


$(document).ready(function () {
    $(document).on('click', '#productTable tr', function () {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();
        var col4 = $(this).find('td:eq(4)').text();
        var col5 = $(this).find('td:eq(5)').text();
        var col6 = $(this).find('td:eq(6)').text();
        var col7 = $(this).find('td:eq(7)').text();
        var col8 = $(this).find('td:eq(8)').text();

        $('#productID').val(col0);
        $('#productImage').val(col1);
        $('#productName').val(col2);
        $('#productCategory').val(col3);
        $('#onePiecePrice').val(col4);
        $('#productTotalPrice').val(col5);
        $('#productQTY').val(col6);
        $('#productDetail').val(col7);
        $('#productLocation').val(col8);

    })

})

$('#deleteProduct').click(function () {
    let pid = $('#productID').val();
    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/product/"+pid,
        success: function (resp) {
            console.log(resp.message);

            if (resp.code == 200) {
                confirm("Product is Deleted");
                loadAllProductByUserID();
                window.location.reload();
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        error: function () {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    })
})
