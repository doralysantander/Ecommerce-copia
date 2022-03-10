import React from 'react'
//recibe la data y el producto para agregarse
const ProductItem = ({data,addToCart}) => {
  //desestructurar
  let {id, description,price,image }= data;
console.log({data})
  return (
    <div>
       <img
        src={image}
        alt="sds"
        className="w-3/6 h-3/6 overflow-hidden aspect-square"
      />
      <p>{description}</p>
      <span>valor: ${price} Libra</span>
      <div>
      <button
            type="button"
            className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold"
            onClick={() => addToCart(id)}
          >
            </button>
      </div>

    Producto
    </div>
  )
}

export default ProductItem