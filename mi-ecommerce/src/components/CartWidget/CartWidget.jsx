import React from 'react'

const CartWidget = ( { valor } ) => {
  return (
    <div class='carrito'>🛒
    <span>{valor}</span>
    </div>
  )
}

export default CartWidget