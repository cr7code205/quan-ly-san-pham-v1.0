import { getProductInfo } from "./product.js";
import { fetchProducts, filterProductsByCategory } from "./productService.js";

var vProducts = [];
document.getElementById("btn-load").onclick = onBtnCallAPIGetAll;
document.getElementById("category").onchange = onFilterChange;

async function onBtnCallAPIGetAll() {
    try {
        var vData = await fetchProducts();
        vProducts = vData;
        var vCategories = [];
        var vOptionHtml = '<option value="">Tất cả</option>';
        for (var bIndex = 0; bIndex < vData.length; bIndex++) {
            if (vCategories.indexOf(vData[bIndex].category) === -1) {
                vCategories.push(vData[bIndex].category);
                vOptionHtml += `<option value="${vData[bIndex].category}">${vData[bIndex].category}</option>`;
            }
        }
        document.getElementById("category").innerHTML = vOptionHtml;
        displayProducts(vData);
    } catch (error) {
        console.error(error);
    }
}

function onFilterChange() {
    var vData = filterProductsByCategory(vProducts, document.getElementById("category").value);
    displayProducts(vData);
}

function displayProducts(vData) {
    var vHtml = '';
    for (var bIndex = 0; bIndex < vData.length; bIndex++) {
        vHtml += `<li>${getProductInfo(vData[bIndex])}</li>`;
    }
    document.getElementById("hienthi").innerHTML = vHtml;
}
