import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [products, setProducts] = useState([]);
     async function getProduct(){
        try {
        
            const response = await fetch("https://fakestoreapi.com/products");
            const data =await response.json();
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
 useEffect(()=> {
        getProduct()
    }, [])
  return (
    <div className='bg-white text-black p-4'>
      <h1 className='text-3xl font-bold underline '></h1>
      {products.map((item) => {
        return(
        <div key={item.id} className='border-2 p-4 m-4'>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <img src={item.image} alt={item.title} className='w-32' />
            <p>{item.description}</p>
        </div>)
      })}
    </div>
  )
}

export default DataFetch
