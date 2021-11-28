loadAllProductInToCart();
function loadAllProductInToCart() {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/cart/getCartItemsByUserID/"+localStorage.getItem('userID'),
        success: function (resp) {
            console.log(resp);

    for (var product of resp.data){
        let image=product.iamge;
        let name=product.name;
        let onePrice=product.onePrice;
        let productId=product.pid;
        let totlePrice=product.totlePrice;
        let qty=product.qty;

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
    "                                <input type=\"number\" step=\"1\" min=\"1\" max=\"\" name=\"quantity\" value=\"" +
    "" +qty+
    "\" title=\"Qty\" class=\"input-text qty text\" size=\"4\" pattern=\"\" inputmode=\"\" style=\"width: 70px\">\n" +
    "                                <input type=\"button\" value=\"+\" class=\"plus\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>"

        $('.cartItemCards').append(productRow);

    }

}})

}
countCartItemsTotal();
function countCartItemsTotal() {


    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/cart/oneTPrice/"+localStorage.getItem('userID'),
        success: function (resp) {
            console.log(resp);
            $('#totalPrice').text(resp.data)
        }

    })



}