import React from 'react'
//products apples
import tryapple1 from '../../assets/products/apples/tree-apples.png' 
import tryapple2 from '../../assets/products/apples/thre-apples.png' 
import tryapple3 from '../../assets/products/apples/five-apples.png' 
import tryapple4 from '../../assets/products/apples/fourt-apples.png'
import tryapple5 from '../../assets/products/apples/eight-apples.png' 
import tryapple6 from '../../assets/products/apples/five-apples.png'  



const ProductsList = () => {
    const apples =[
        {
            id:1,
            description:"manzana organica del huerto a su mesa",
            image:tryapple1,
            price: 5.000
        },
        {
          id:2,
          description:"manzana organica del huerto a su mesa",
          image:tryapple2,
          price: 5.000
        },

        {
        id:3,
        description:"manzana organica del huerto a su mesa",
        image:tryapple3,
        price: 5.000
        },

          {
          id:4,
          description:"manzana organica del huerto a su mesa",
          image:tryapple4,
          price: 5.000
          },

          {
          id:5,
          description:"manzana organica del huerto a su mesa",
          image:tryapple5,
          price: 5.000
          },

          {
            id:6,
            description:"manzana organica del huerto a su mesa",
            image:tryapple6,
            price: 5.000
            }
      
    ]
  return (
    <div>
      {
         apples.map(apple=>(<Card description={apple.description}></Card>))
      }
     
    </div>
  )
}

export default ProductsList