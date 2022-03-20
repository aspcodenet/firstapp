import React from 'react'

export const SingleProduct = ({activeProduct}) => {
  console.log(activeProduct)
  return (
    <section class="about" id="about">
    <h1 class="heading"> {activeProduct.title} </h1>

    <div class="row">
      <div class="content">
        <h3>{activeProduct.price}</h3>
        <p>{activeProduct.description}</p>
        <p><img src={activeProduct.image}></img></p>
      </div>
    </div>


</section>
    
  )
}
