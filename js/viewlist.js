let display = document.querySelector("#display");
let list = JSON.parse(localStorage.getItem("list")) || [];
function displayProduct() {

    display.innerHTML = "";
    list.forEach((product) => {
        display.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.qty}</td>
                <td>
                    <img
                        src="${product.img}"
                        width="80"
                        height="80"
                        style="object-fit: cover;"
                    >
                </td>
                <td>
                    <button 
                    class="btn btn-warning" 
                    onclick="editProduct(${product.id})"
                    >
                        Edit
                    </button>
                    <button
                        class="btn btn-danger"
                        onclick="deleteProduct(${product.id})"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


function deleteProduct(id) {
    list = list.filter((product) => product.id != id);
    localStorage.setItem(
        "list",
        JSON.stringify(list)
    );
    displayProduct();
}


function editProduct(id) {
    let product = list.find((p) => p.id == id);

    let title = prompt("Enter Title", product.title);
    if (title == null) return;

    let price = prompt("Enter Price", product.price);
    if (price == null) return;

    let qty = prompt("Enter Quantity", product.qty);
    if (qty == null) return;

    let img = prompt("Enter Image URL", product.img);
    if (img == null) return;

    product.title = title;
    product.price = price;
    product.qty = qty;
    product.img = img;

    localStorage.setItem("list", JSON.stringify(list));

    displayProduct();

    alert("Product Updated!");
}
displayProduct();