topSixProductLoader();

function topSixProductLoader() {

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/api/v1/user/getAllShops?userType=VENDOR",
        success: function (resp) {
            console.log(resp);
            for (let user of resp.data) {

                let uid = user.userID;
                let contact = user.contact;
                let email =user.email ;
                let fullName = user.fullName;

                var card =" <div class=\" border p-2 m-2\">\n" +
                    "                <div class=\"shopImage\" style=\"text-align: center\">\n" +
                    "                    <img src=\"../image/shops/429324.png\" style=\"width: 120px;height: 120px;border-radius: 100%;border: solid\" >\n" +
                    "                </div>\n" +
                    "                <div class=\"productDescription\">\n" +
                    "                    <h5 style=\"text-align: center\" class=\"mt-2\">"+fullName+"</h5>\n" +
                    "                    <div style=\"text-align: center\">\n" +
                    "                        <p class=\"productDecFont\">"+uid+"</p>\n" +
                    "                        <p class=\"productDecFont\">"+email+"</p>\n" +
                    "                        <p class=\"productFont fw-bold\">"+contact+"</p>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>";

                $('.shopFrame').append(card);
            }

        }

    })
}

