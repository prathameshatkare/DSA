let shopName = "My Store";

function showShop() {
  console.log(shopName);
  shopName = "New "
}

showShop();
console.log(shopName);



function calculatePrice() {
  const price = 500;
  console.log(price);
}

calculatePrice();

console.log(price); // ReferenceError