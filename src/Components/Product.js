import React from 'react'

export const Product = ({product, setActiveProduct}) => {
  return (
    <div class="productgallery_card">
    <div class="productgallery_card_container">
        <img src={product.image} alt="cookies" class="hero-image"/>
        <div class="information">

            <div class="name">{product.title}</div>

            <div class="store">{product.category}</div>

            <a href="#" onClick={()=>{setActiveProduct(product)}} class="storebutton">Purchase Product</a>

        </div>
    </div>
</div>

  )
}
