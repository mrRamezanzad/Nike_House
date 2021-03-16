// render product cards
function renderCards(products) {
    $("main").html("")
    products.forEach(product => {
        $("main").append(`
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
                <div class="card">
                    <img src="${product.image}"
                        class="card-img-top" alt="nike shoe">
                    <div class="card-body pb-2">
                        <h5 class="card-title text-center mb-5">${product.name}</h5>
                        <p class="card-text text-end">رنگ: <span class="card-text-value me-5">${product.color}</span></p>
                        <p class="card-text text-end">سایز: <span class="card-text-value me-5">${product.size}</span></p>
                        <p class="card-text text-end">جنس: <span class="card-text-value me-5">${product.type}</span></p>
                        <div class="mt-5 d-flex justify-content-between">
                            <a href="/product/${product.id}" class="btn btn-buy text-white d-inline">خرید</a>
                            <span class="rtl">
                                <span>تومان</span>
                                <span>${product.price.toLocaleString()}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        `);
    });
}
renderCards(db)

// search-bar render
$("[type='search']").keyup(function (e) {
    let searchQuery = $(this).val().trim().toLowerCase()
    searchProducts(searchQuery)
});

// search functionality
function searchProducts(searchQuery) {

    if (searchQuery === "") return renderCards(db)
    // console.log(db);

    // solution-1 simple search by includes function
    // let filteredProducts = db.filter(el => {
    //     return el["id"] == parseInt(searchQuery) || el["name"].includes(searchQuery) ||
    //         el["color"].includes(searchQuery) || el["size"] == parseInt(searchQuery) ||
    //         el["type"].includes(searchQuery) || el["id"] == parseInt(searchQuery) ||
    //         el["image"].includes(searchQuery)

    // })

    // solution-2 improved search by includes function
    let filteredProducts = db.filter(el => {
        let searchSource = ""
        // console.log(searchSource.concat(el["id"], el["name"], el["color"], el["size"], el["type"], el["id"], el["image"]).toLowerCase());
        return searchSource.concat(el["id"], el["name"], el["color"], el["size"], el["type"], el["id"], el["image"], el["price"]).toLowerCase().includes(searchQuery)

    })

    // solution-3  regex

    // console.log(filteredProducts);
    renderCards(filteredProducts)
}

// card hover shadow
$("body").on("mouseover mouseout", ".btn-buy", function () {
    // over
    $(this).toggleClass("shadow");
});

// btn hover shadow 
$(document).on("mouseover mouseout", ".card", function () {
    // over
    $(this).toggleClass("shadow");
});

// go to search-bar action
$(document).on("keyup", function (e) {
    console.log(e.key);
    if (e.key === "/") {
        $("[type='search']").focus()

    // $("[type='search']").toggleClass("shadow");
    }
    if (e.key === "Escape") {
        $("[type='search']").blur()
    // $("[type='search']").toggleClass("shadow");
    }
})