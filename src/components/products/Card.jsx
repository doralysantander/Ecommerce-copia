import React from 'react'

const Card = ({product, cart, setCart, products}) => {
  //guarda propiedades del estado de los products
const {description, image, price, id} = product;

//funcion para agregar products al carro
const addProduct = id =>{
  const product = products.filter((product)=>product.id===1)
}
return (
<div>
<img src={image} alt="sds" className="w-3/6 h-3/6 overflow-hidden aspect-square" />
<p>{description}</p>
<span>valor: ${price} Libra</span>
<div className="flex gap-y-1 gap-x-1">
<button className="bg-green-900 px-1.5 py-1.5 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
+
</button >
<input type="text" size="1" onkeydown="return false" className=" border border-green-700 px-1.5 py-1.5 text-zinc-900 font-bold" />
<button className="bg-green-900 px-2 py-2 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
-
</button>
<button type="button" className="bg-green-900 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>addProduct(id)} >
Comprar
</button>
</div>
</div>

);
};

/*const Card = (props) => {
  return (
    <div className="flex justify-center items-center">
    <div className="w-64 w-64 shadow-md flex flex-col ">
      
      <div className="flex flex-col justify-center items-center">
       <img src={props.image} alt={props.img} className="w-5/6 h-5/6 overflow-hidden aspect-square"  />
        <p>{props.description}</p>
        <span>valor: ${props.price} Libra</span>
        </div>
 
        <div className="flex gap-1 ">
            <button className="bg-green-900 px-1.5 py-1.5 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
              +
              </button>
              <input type="text" size="1" className="border-green-700 px-1.5 py-1.5 text-zinc-900 font-bold"/>
              <button className="bg-green-900 px-1.5 py-1.5 w-8 h-8 text-center rounded-2xl text-zinc-100 font-bold">
                -
              </button>
              <button className="bg-green-900 px-1.5 py-1.5 rounded-md text-zinc-100 font-bold" >
                Comprar
              </button>
              </div>
        </div>
        

    </div>
}*/

export default Card

