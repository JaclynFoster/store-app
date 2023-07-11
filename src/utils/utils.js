export const calculateQuantity = (quantity, price) => {
    return quantity * Number(price)
  }

  export const totalCartAmount = (cartAnimal) => {
    console.log('Animal:', Object.values(cartAnimal))

    return Object.values(cartAnimal)
      .reduce((acc, curr) => {
        return acc + calculateQuantity(curr.quantity, curr.price)
      }, 0)
      .toFixed(2)
  }

 export const cartTax = (cartAnimal) => {
    return (totalCartAmount(cartAnimal) * 0.0825).toFixed(2)
  }

  export const grandTotal = (cartAnimal) => {
    return Number(cartTax(cartAnimal)) + Number(totalCartAmount(cartAnimal))
  }