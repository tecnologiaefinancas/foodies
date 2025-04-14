export const calculateCartTotals = (cartItems, quantities) => {
         //calculating
         const subTotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0);
         const shipping = subTotal === 0 ? 0.00: 4.90;
         const tax = subTotal * 0.1; //10 percent tax
         const total = subTotal + shipping + tax;

         return {subTotal, shipping, tax, total};
}