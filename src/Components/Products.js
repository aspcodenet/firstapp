import React, {useState, useEffect} from 'react'
import { Product } from './Product'

export const Products = (props) => {

  const [filteredProducts,setFilteredProducts] = useState(props.products)

   const filterData = (e)=> {
        const search = e.target.value
        console.log(search)

        const newRes = props.products.filter(p=>p.title.includes(search))
        console.log(newRes)

        setFilteredProducts(newRes)
   }


  return (
    <section class="products" id="products">
    <h1 class="heading"> <span>our</span> products </h1>
    <input name="aaa" onChange={(e)=>filterData(e)} />

    <div class="productgallery">
        {filteredProducts.map((prod)=>  <Product setActiveProduct={props.setActiveProduct} product={prod} key={prod.id} /> ) }
    </div>

</section>
  )
}
