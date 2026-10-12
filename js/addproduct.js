
let productForm = document.querySelector("#productForm");
let input = document.querySelectorAll("#productForm input");

let data = {};
let list = JSON.parse(localStorage.getItem("list")) || [];

input.forEach((input) => {
    input.addEventListener("input", (e) => {
        const { name, value } = e.target;
        data = {...data,[name]:value};
    });
});
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    list.push({ ...data,id: Date.now() });
    localStorage.setItem("list", JSON.stringify(list));
    alert("Product Added successfully.");
    productForm.reset();

});
