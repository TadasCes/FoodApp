export function getArrayElements() {
  foodState.foodInCart.forEach((element) => {
    total += element.count;
    setCountTotal(total);
  });
}
