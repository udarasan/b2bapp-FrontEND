loadAllProductInToCart();
function loadAllProductInToCart() {
    console.log("cart is works")
    var arrayFromStroage = JSON.parse(localStorage.getItem("products"));
    var arrayLength = arrayFromStroage.length;
    console.log(arrayFromStroage)

    for (var product of arrayFromStroage){
        let image=product.image
        let name=product.name
        let onePrice=product.onePrice
        let productId=product.productId
        let totlePrice=product.totlePrice

var productRow="<div class=\"cartItemCard d-flex p-2 border\">\n" +
    "                        <div id=\"cartImage\">\n" +
    "                            <img src=\"../image/product/"+image+"\" style=\"height: 100px; width: 100px\">\n" +
    "                        </div>\n" +
    "                        <div class=\"w-75\" id=\"productDetail\">\n" +
    "                            <div class=\"mx-2\">\n" +
    "                                <h5>"+name+"</h5>\n" +
    "                                <p class=\"productDecFont\">description description description description description </p>\n" +
    "                                <p class=\"productDecFont\">Seller Name - "+productId+"</p>\n" +
    "                                <p class=\"productFont fw-bold\">One Price : "+onePrice+"LKR</p>\n" +
    "                                <p class=\"productFont fw-bold\">Total price : "+totlePrice+"LKR</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\" w-25\">\n" +
    "                            <div class=\"quantity buttons_added\">\n" +
    "                                <input type=\"button\" value=\"-\" class=\"minus\">\n" +
    "                                <input type=\"number\" step=\"1\" min=\"1\" max=\"\" name=\"quantity\" value=\"1\" title=\"Qty\" class=\"input-text qty text\" size=\"4\" pattern=\"\" inputmode=\"\" style=\"width: 70px\">\n" +
    "                                <input type=\"button\" value=\"+\" class=\"plus\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>"

        $('.cartItemCards').append(productRow);

    }
}