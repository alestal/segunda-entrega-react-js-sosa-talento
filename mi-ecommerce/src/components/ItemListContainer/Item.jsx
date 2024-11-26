import React from 'react'

const Item = (elemnto) => {
  return (
    <div>
        <h3>
            elemento.nombre
        </h3>
        <img src='{elemento.img}' alt= 'botella' width={'250pc'} height={'300px'}/>
        <p>(elemento.category)</p>
       <p>elemento.precio</p>
       <button>Mas detalles</button>
    </div>
  )
}

export default Item