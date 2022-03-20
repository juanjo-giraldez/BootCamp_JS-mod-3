const product = { count: 3, price: 12.55, type: "ropa" };

let priceItem;

valueProduct = product.count <= 0 ? 0 : product.price * product.count;

console.log("priceItem", valueProduct);

let iva;

// if (product.type === "alimentacion") {
//   iva = valueProduct * 0.1;
// } else if (product.type === "libro") {
//   iva = valueProduct * 0.04;
// } else {
//   iva = valueProduct * 0.21;
// }

switch (product.type) {
  case "alimentacion":
    iva = valueProduct * 0.1;
    break;
  case "libro":
    iva = valueProduct * 0.04;
    break;
  default:
    iva = valueProduct * 0.21;
    break;
}

const priceTotal = iva + valueProduct;

console.log("priceWithIva", priceTotal);
