import React, {useState, useEffect} from 'react'

const DataFetch = () => {

    const [products, setProducts] = useState([]);

    async function  getProducts(){
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getProducts();
},[])




        
  return (
    <div>
      <h1 className='text-3xl font-bond underline'>Products</h1>
      {
        products.map((item, index) =>{
            return(
                <div key={item.id} className='border-2 p-4 m-4'>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt={item.title} />
                    <p className='font-bold'>{item.price}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default DataFetch
