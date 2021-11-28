CategoryWiseProductLoader();

function CategoryWiseProductLoader() {
    let category=$('#productCategory').val()
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/product/getAllProductByCategory?category="+category,
        success: function (resp) {
            console.log(resp);

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


                var card = " <div class=\" border h-25  m-2 p-2\">\n" +
                    "                <div class=\"productImage\">\n" +
                    "                    <img src=\"../image/product/" + productImage + "\" style=\"width: 180px;height: 180px; border-radius: 13px\">\n" +
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

                $('.productFrameForCategory').append(card);

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
            });
        }

    })
}
