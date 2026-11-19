import { Product } from "./product.js";

export async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data.map(product => new Product(
        product.id, product.title, product.price, product.description,
        product.category, product.image, product.rating
    ));
}


export function filterProductsByCategory(products, category) {
    if (category === "") {
        return products;
    }
    return products.filter(product => product.category === category);
}
