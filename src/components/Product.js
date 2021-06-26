import React from 'react'

const Product = ({ product }) => {
  const { name, description, price } = product
  return (
    <div className='card'>
      <img className='card__image' alt={`${name}`} />
      <div className='card__content'>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Product
