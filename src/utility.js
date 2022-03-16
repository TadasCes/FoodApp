export function getCartCount(array) {
  let total = 0;
  array.forEach((element) => {
    total += element.count;
  });
  return total;
}
