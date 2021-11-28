function filterProduct() {

    $('.filterProductFrame').empty();
    let productName=$('#productName').val();
    let minPrice=$('#minPrice').val();
    let maxPrice=$('#maxPrice').val();
    let productLocation=$('#productLocation').val();
    let minQTY=$('#minQTY').val();
    let maxQTY=$('#maxQTY').val();

    if (!productName=="" & !productLocation==""){
        $.ajax({
            method: "GET",
            url: "http://localhost:8080/api/v1/product/getFilterProducts?productName="
                +productName+"&minPrice="+minPrice+"&maxPrice="+maxPrice+"&productLocation="+productLocation+"&minQTY="+minQTY+"&maxQTY="+maxQTY,
            success: function (resp) {
                console.log(resp);
                let arrayLength=resp.data.length;
                if (arrayLength==0){
                    var message="<h4 class='mt-5 mx-5'>******Empty Products for these Filters!</h4>"
                        $('.filterProductFrame').append(message);
                }else {
                    for (let product of resp.data) {
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



                        var card ="<div class=\" border m-2 d-flex\">\n" +
                            "                <div class=\"productImage\">\n" +
                            "                    <img src=\"../image/product/" +
                            productImage +
                            "\" style=\"width: 150px;height: 150px\">\n" +
                            "                </div>\n" +
                            "                <div class=\"productDescription\">\n" +
                            "                    <h5 class=\"productname\">" +
                            productName +
                            "</h5>\n" +
                            "                    <div>\n" +
                            "                        <p class=\"productDecFont\">" +
                            productDetail +
                            "</p>\n" +
                            "                        <p class=\"productDecFont\">" +
                            sellerID +pid+
                            "</p>\n" +
                            "                        <p class=\"productFont fw-bold\">One Price : " +
                            onePiecePrice +
                            "LKR</p>\n" +
                            "                        <p class=\"productFont fw-bold\">Total price : " +
                            totalPrice +
                            "LKR</p>\n" +
                            "\n" +
                            "                    </div>\n" +
                            "\n" +
                            "                    <div>\n" +
                            "                        <a class=\"btn add-to-cart5 mt-3\" data-pid=" + pid + " data-name=" + productName + " data-onePrice=" + onePiecePrice + " data-totlePrice=" + totalPrice + " data-image=" + productImage + " type=\"button\"> Add to Card</a>\n" +
                            "                    </div>\n" +
                            "                </div>\n" +
                            "\n" +
                            "            </div>"

                        $('.filterProductFrame').append(card);

                        console.log(product)
                        /* /!************************Limt P tage Length***************************!/
                         var pDetail = $('.pDetail');
                         pDetail.text(pDetail.text().substring(0,50))*/
                        $(".add-to-cart5").click(function (event) {
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
                }

            }

        })
    }else {
        alert("please Fill the Basic req")
    }





}

