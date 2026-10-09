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
                    <button class="btn btn-warning btn-sm">
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
displayProduct();