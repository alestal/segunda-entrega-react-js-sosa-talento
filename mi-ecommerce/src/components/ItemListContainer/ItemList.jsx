import React from 'react'
import Item from './Item'

const ItemList =({products}) => {
    console.log(products.map)(e => e.nombre)

    return (
        <div>
            { products.map ((elemento,index) =>{
                return ( 
                    <Item elemento= {elemento} Key={elemento.id}/>
             ) }
             ) }
        </div>
    )
}

export default ItemList