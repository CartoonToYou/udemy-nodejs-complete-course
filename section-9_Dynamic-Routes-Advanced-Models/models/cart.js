const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previus cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => Find exisiting product
      const exisitingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const exisitingProduct = cart.products[exisitingProductIndex];
      let updatedProduct;
      // Add new product/ increase quantity
      if (exisitingProduct) {
        updatedProduct = { ...exisitingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[exisitingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.error(err);
      });
    });
  }
};
