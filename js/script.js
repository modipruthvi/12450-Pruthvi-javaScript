
let productList = document.querySelector("#productList");
let list = JSON.parse(localStorage.getItem("list")) || [];

list.forEach((product) => {
    productList.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="${product.img}" class="card-img-top" height="250" style="object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title"> ${product.title} </h5>
                    <h6 class="text-primary"> ₹${product.price} </h6>
                    <p class="card-text"> Quantity: ${product.qty} </p>
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    `;
});


