// My Solution
// function calculateTotalSalesWithTax(arr, taxRate) {
//   const mapSales = arr.map((num, index, arr) => {
//     return num.price * num.quantity;
//   });

//   console.log(mapSales);

//   const totalSales = mapSales.reduce((total, num) => {
//     return total + num;
//   });

//   console.log(totalSales);

//   taxRate = taxRate / 100;
//   tax = totalSales * taxRate;

//   let total = totalSales + tax;

//   console.log(total);
//   return total;
// }

// Brad's Solution
function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const taxAmount = (totalSales * taxRate) / 100;

  const totalSalesWithTax = totalSales + taxAmount;

  return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
