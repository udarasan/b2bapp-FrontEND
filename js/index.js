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



                var card = " <div class=\" border w-50 h-25  m-2 p-2\">\n" +
                    "                <div class=\"productImage\">\n" +
                    "                    <img src=\"image/product/" + productImage + "\" style=\"width: 150px;height: 150px\">\n" +
                    "                </div>\n" +
                    "                <div  class=\"productDescription\">\n" +
                    "                    <h5>" +
                    productName +
                    "</h5>\n" +
                    "                    <div >\n" +
                    "                        <p  class=\"productDecFont pDetail\">" +
                    productDetail +
                    "</p>\n" +
                    "                        <p class=\"productDecFont fst-italic\">" +
                    sellerID +
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
                    "                        <button type=\"button\"> Add to Card</button>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "\n" +
                    "            </div>";

                $('.productFrame').append(card);

                    console.log(product)
/************************Limt P tage Length***************************/
                var pDetail = $('.pDetail');
                pDetail.text(pDetail.text().substring(0,50))
            }
        }

    })
}
