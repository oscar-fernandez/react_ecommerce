import React from 'react'
import Product from './Product'

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: '$189' },
  { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$2499' },
]

const Products = () => {
  return (
    <main className='products'>
      <div className='grid'>
        {products.map((product) => (
          <div className='grid__item' key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Products
