loginCheck();

function loginCheck() {
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let userName = localStorage.getItem('userName')
    if (email && password && userName == null) {
        console.log("null")
    } else {
        $('#userName').append(userName);
        console.log(email, password, userName);
    }
}
/*allx();
function allx(){
    if (localStorage.getItem("products")===null){

    }else {
        countCartItems()
    }
}*/

function logout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('userName');
    localStorage.removeItem('userType');
    localStorage.removeItem('products');
    window.location.href = "index.html";
}

countCartItems();
function countCartItems() {


    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/cart/itemCount/"+localStorage.getItem('userID'),
        success: function (resp) {
            console.log(resp);
            $('#cartItemCount').text(resp.data)
        }

    })



}


/************************Load Home Page Products***************************/
topSixProductLoader();

function topSixProductLoader() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product/getTopSix",
        success: function (resp) {
            console.log(resp);

            for (let product of resp.data) {
                /*if (resp.data.length > 2) {
                    break;
                }*/
                //console.log(resp.data.length)
                //console.log(resp.data[2])

                let pid = product.pid;
                let productName = product.productName;
                let sellerID = (product.sellerID).fullName;
                let productDetail = product.productDetail;
                let productQTy = product.productQTy;
                let onePiecePrice = product.onePiecePrice;
                let productImage = product.productImage;
                //let image = "<img style='width: 100px; height: 100px' src='../image/product" + productImage + "'>"
                let totalPrice = product.totalPrice;
                let productLocation = product.productLocation;
                let productCategoryID = product.productCategoryID;


                var card = " <div class=\" border w-50 h-25  m-2 p-2\">\n" +
                    "                <div class=\"productImage\">\n" +
                    "                    <img src=\"image/product/" + productImage + "\" style=\"width: 180px;height: 180px; border-radius: 13px\">\n" +
                    "                </div>\n" +
                    "                <div  class=\"productDescription\">\n" +
                    "                    <h5 class=\"productname\">" +
                    productName +
                    "</h5>\n" +
                    "                    <div >\n" +
                    "                        <p  class=\"productDecFont pDetail\">" +
                    productDetail +
                    "</p>\n" +


                    "                        <p class=\"productDecFont fst-italic\">" +
                    sellerID + pid +
                    "</p>\n" +

                    "                        <p class=\"productFont fw-bold mt-1\">One Price : " +
                    onePiecePrice +
                    "LKR</p>\n" +
                    "                        <p class=\"productFont fw-bold\">Total price : " +
                    totalPrice +
                    "LKR</p>\n" +
                    "\n" +
                    "                    </div>\n" +
                    "\n" +
                    "                    <div>\n" +
                    "                        <a class=\"btn add-to-cart1 mt-3\" data-pid=" + pid + " data-name=" + productName + " data-onePrice=" + onePiecePrice + " data-totlePrice=" + totalPrice + " data-image=" + productImage + " type=\"button\"> Add to Card</a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>";

                $('.productFrame').append(card);

                console.log(product)
                /************************Limt P tage Length***************************/
                var pDetail = $('.pDetail');
                pDetail.text(pDetail.text().substring(0, 50))

            }
            $(".add-to-cart1").click(function (event) {
                event.preventDefault();
                var pid = $(this).attr("data-pid");
                var name = $(this).attr("data-name");
                var onePrice = $(this).attr("data-onePrice");
                var totlePrice = $(this).attr("data-totlePrice");
                var iamge = $(this).attr("data-image");
                var uid=localStorage.getItem('userID')
                var qty=1;
                saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                /*if (uid==null){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: '"Please Login To Your Account"',
                        showDenyButton: false,
                        timer: 1500

                    })
                }else {
                    saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                }*/




            });
        }

    })
}


/************************Load Home Page Products***************************/
AllProductLoader();



function AllProductLoader() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product",
        success: function (resp) {
            console.log(resp);

            for (let product of resp.data) {
                /*if (resp.data.length > 2) {
                    break;
                }*/
                //console.log(resp.data.length)
                //console.log(resp.data[2])

                let pid = product.pid;
                let productName = product.productName;
                let sellerID = (product.sellerID).fullName;
                let productDetail = product.productDetail;
                let productQTy = product.productQTy;
                let onePiecePrice = product.onePiecePrice;
                let productImage = product.productImage;
                //let image = "<img style='width: 100px; height: 100px' src='../image/product" + productImage + "'>"
                let totalPrice = product.totalPrice;
                let productLocation = product.productLocation;
                let productCategoryID = product.productCategoryID;


                var card = " <div class=\" border w-50 h-25  m-2 p-2\">\n" +
                    "                <div class=\"productImage\">\n" +
                    "                    <img src=\"image/product/" + productImage + "\" style=\"width: 180px;height: 180px; border-radius: 13px\">\n" +
                    "                </div>\n" +
                    "                <div  class=\"productDescription\">\n" +
                    "                    <h5 class=\"productname\">" +
                    productName +
                    "</h5>\n" +
                    "                    <div >\n" +
                    "                        <p  class=\"productDecFont pDetail\">" +
                    productDetail +
                    "</p>\n" +


                    "                        <p class=\"productDecFont fst-italic\">" +
                    sellerID + pid +
                    "</p>\n" +

                    "                        <p class=\"productFont fw-bold mt-1\">One Price : " +
                    onePiecePrice +
                    "LKR</p>\n" +
                    "                        <p class=\"productFont fw-bold\">Total price : " +
                    totalPrice +
                    "LKR</p>\n" +
                    "\n" +
                    "                    </div>\n" +
                    "\n" +
                    "                    <div>\n" +
                    "                        <a class=\"btn add-to-cart2 mt-3\" data-pid=" + pid + " data-name=" + productName + " data-onePrice=" + onePiecePrice + " data-totlePrice=" + totalPrice + " data-image=" + productImage + " type=\"button\"> Add to Card</a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>";

                $('.productFrame2').append(card);

                console.log(product)
                /************************Limt P tage Length***************************/
                var pDetail = $('.pDetail');
                pDetail.text(pDetail.text().substring(0, 50))

            }
            $(".add-to-cart2").click(function (event) {
                event.preventDefault();
                var pid = $(this).attr("data-pid");
                var name = $(this).attr("data-name");
                var onePrice = $(this).attr("data-onePrice");
                var totlePrice = $(this).attr("data-totlePrice");
                var iamge = $(this).attr("data-image");
                var uid=localStorage.getItem('userID');
                var qty=1;
                console.log(name)
                saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                /*if (uid==null){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: '"Please Login To Your Account"',
                        showDenyButton: false,
                        timer: 1500

                    })
                }else {
                    saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                }*/

               /* let products = [];
                if (localStorage.getItem('products')) {
                    products = JSON.parse(localStorage.getItem('products'));
                }
                if (localStorage.getItem('userID')==null){
                    alert('please login!')
                }else {
                    products.push({
                        'userID':uid,
                        'productId': pid,
                        'name': name,
                        'onePrice': onePrice,
                        totlePrice: totlePrice,
                        image: iamge
                    });

                    localStorage.setItem('products', JSON.stringify(products));

                    countCartItems()
                }*/

            });
        }

    })
}

AllProductLoader3();

function AllProductLoader3() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product/desc",
        success: function (resp) {
            console.log(resp);

            for (let product of resp.data) {
                /*if (resp.data.length > 2) {
                    break;
                }*/
                //console.log(resp.data.length)
                //console.log(resp.data[2])

                let pid = product.pid;
                let productName = product.productName;
                let sellerID = (product.sellerID).fullName;
                let productDetail = product.productDetail;
                let productQTy = product.productQTy;
                let onePiecePrice = product.onePiecePrice;
                let productImage = product.productImage;
                //let image = "<img style='width: 100px; height: 100px' src='../image/product" + productImage + "'>"
                let totalPrice = product.totalPrice;
                let productLocation = product.productLocation;
                let productCategoryID = product.productCategoryID;


                var card = " <div class=\" border w-50 h-25  m-2 p-2\">\n" +
                    "                <div class=\"productImage\">\n" +
                    "                    <img src=\"image/product/" + productImage + "\" style=\"width: 180px;height: 180px; border-radius: 13px\">\n" +
                    "                </div>\n" +
                    "                <div  class=\"productDescription\">\n" +
                    "                    <h5 class=\"productname\">" +
                    productName +
                    "</h5>\n" +
                    "                    <div >\n" +
                    "                        <p  class=\"productDecFont pDetail\">" +
                    productDetail +
                    "</p>\n" +


                    "                        <p class=\"productDecFont fst-italic\">" +
                    sellerID + pid +
                    "</p>\n" +

                    "                        <p class=\"productFont fw-bold mt-1\">One Price : " +
                    onePiecePrice +
                    "LKR</p>\n" +
                    "                        <p class=\"productFont fw-bold\">Total price : " +
                    totalPrice +
                    "LKR</p>\n" +
                    "\n" +
                    "                    </div>\n" +
                    "\n" +
                    "                    <div>\n" +
                    "                        <a class=\"btn add-to-cart3 mt-3\" data-pid=" + pid + " data-name=" + productName + " data-onePrice=" + onePiecePrice + " data-totlePrice=" + totalPrice + " data-image=" + productImage + " type=\"button\"> Add to Card</a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>";

                $('.productFrame3').append(card);

                console.log(product)
                /************************Limt P tage Length***************************/
                var pDetail = $('.pDetail');
                pDetail.text(pDetail.text().substring(0, 50))

            }
            $(".add-to-cart3").click(function (event) {
                event.preventDefault();
                var pid = $(this).attr("data-pid");
                var name = $(this).attr("data-name");
                var onePrice = $(this).attr("data-onePrice");
                var totlePrice = $(this).attr("data-totlePrice");
                var iamge = $(this).attr("data-image");
                var uid=localStorage.getItem('userID');
                var qty=1;

                saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                /*if (uid==null){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: '"Please Login To Your Account"',
                        showDenyButton: false,
                        timer: 1500

                    })
                }else {
                    saveProduct(pid,name,onePrice,totlePrice,iamge,uid,qty);
                }*/

            });
        }

    })
}

function saveProduct(pid, name, onePrice, totlePrice, iamge, uid, qty) {
    console.log(pid, name, onePrice, totlePrice, iamge, uid, qty)
    if (uid==null){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '"Please Login To Your Account"',
            showDenyButton: false,
            timer: 1500

        })
    }else {
        $.ajax({
            method: "POST",
            contentType: "application/json",
            async: true,
            url: "http://localhost:8080/api/v1/cart/addProductToCart",
            data: JSON.stringify({
                'cid':'',
                'pid': pid,
                'name': name,
                'onePrice': onePrice,
                'totlePrice': totlePrice,
                'iamge': iamge,
                'uid': uid,
                'qty': qty
            }),
            success:function (resp) {
                if (resp.code==201){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add To Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    countCartItems();
                }
            },
            error: function (resp) {
                if (resp.status === 400) {
                    console.log(resp.data)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: '"Are You Logout?"',
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

}

