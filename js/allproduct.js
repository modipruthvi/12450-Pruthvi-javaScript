let productList = document.querySelector("#productList");
let list = JSON.parse(localStorage.getItem("list")) || [];

let search = document.querySelector("#searchInput");
let sort = document.querySelector("#sortProducts");
let productCount = document.querySelector("#productCount");

// Display Products
function shortdis(products) {
    productList.innerHTML = "";
    productCount.innerText = products.length + " Products Available";

    products.forEach((product) => {
        productList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow">
                    <img src="${product.img}" class="card-img-top"
                        height="250" style="object-fit: contain;">

                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <h6 class="text-primary">₹${product.price}</h6>
                        <p>Quantity: ${product.qty}</p>

                        <button class="btn btn-primary"
                            onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

search.addEventListener("input", function () {
    let value = search.value.toLowerCase();

    let products = list.filter((product) =>
        product.title.toLowerCase().includes(value)
    );
    shortdis(products);
});

sort.addEventListener("change", function () {
    let products = [...list];

    if (sort.value == "priceLow") {
        products.sort((a, b) => a.price - b.price);
    }
    else if (sort.value == "priceHigh") {
        products.sort((a, b) => b.price - a.price);
    }
    else if (sort.value == "nameAZ") {
        products.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sort.value == "nameZA") {
        products.sort((a, b) => b.title.localeCompare(a.title));
    }

    shortdis(products);
});

shortdis(list);


