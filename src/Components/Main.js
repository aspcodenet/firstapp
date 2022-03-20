import React, { useEffect } from 'react'
import { Home } from './Home'
import { Products } from './Products'
import { SingleProduct } from './SingleProduct'

export const Main = (props) => {



  return (
    <main>

      {props.activePage == 'Products' ? <Products setActiveProduct={props.setActiveProduct} products={props.products} setProducts={props.setProducts}/> : ''}
      {props.activePage == 'Product' ? <SingleProduct activeProduct={props.activeProduct}/> : ''}
      {props.activePage == 'Home' ? <Home/> : ''}



    </main>
  )
}
