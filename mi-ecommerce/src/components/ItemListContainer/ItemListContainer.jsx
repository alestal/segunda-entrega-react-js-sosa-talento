import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import {getProducts, getProductsByCategory} from '../../Data/asyncMock'


const ItemListContainer = ({ mensaje}) => {

    const[products, setProducts]= useState([])
    const [category, setCategory] = useState ([])

    const [cargando,setCargando] = useState (false)

useEffect(() => {

 setCargando(true)
 if(category){
    getProductsByCategory(category)
    .then ( res => setProducts(res))
    .catch (e => console.error (e))
    .finally(()=>setCargando(false))
} else {
    getProducts()
    .then (res => setProducts(res))
    .cathch( e => console.error(e))
    .finally(()=> setCargando(false))
}
}, [category])

const changecategory =() => {
    setCategory('category')
}

console.log(products)

console.log('ell estado del producto, products')

return 
<>
<div> {mensaje}
<Button fn ={fn} text ='agregar al carrito'/>
</div>

<div>

<div>
<Button fn = {() => changecategory(tinto)} text= 'tinto'></Button>
<Button fn = {() => changecategory(tinto)} text= 'rosado'></Button>
<Button fn = {() => changecategory(tinto)} text= 'blanco'></Button>
</div>

cargando
?
<h3> cargando...</h3>
:
< ItemList products={products}/>

</div>

</>

}

export default ItemListContainer