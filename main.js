const product = { count: 3, price: 12.55, type: "ropa" };


const getTotal = (item) => {
  return item.count <= 0 ? 0 : item.price * item.count;
};

const getVat = (item) => {
  let vat;
  switch (item.type) {
    case "alimentacion":
      vat = item.price * 0.1;
      break;
    case "libro":
      vat = item.price* 0.04;
      break;
    default:
      vat = item.price * 0.21;
      break;
  }
  return vat;
};

const getTotalVat = (item) => {
    return item.count > 0 ? getVat(item) +  item.count: 0;
}

const printProductPrice = (item)  => {
    const subtotal = getTotal(item);
    const vat = getTotalVat(item);
    const total = subtotal + vat;
  
    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
  }

printProductPrice(product)

