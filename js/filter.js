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
                        let pid = product.PID;
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
                            "                    <h5>" +
                            productName +
                            "</h5>\n" +
                            "                    <div>\n" +
                            "                        <p class=\"productDecFont\">" +
                            productDetail +
                            "</p>\n" +
                            "                        <p class=\"productDecFont\">" +
                            sellerID +
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
                            "                        <button type=\"button\"> Add to Card</button>\n" +
                            "                    </div>\n" +
                            "                </div>\n" +
                            "\n" +
                            "            </div>"

                        $('.filterProductFrame').append(card);

                        console.log(product)
                        /* /!************************Limt P tage Length***************************!/
                         var pDetail = $('.pDetail');
                         pDetail.text(pDetail.text().substring(0,50))*/
                    }
                }

            }

        })
    }else {
        alert("please Fill the Basic req")
    }





}

