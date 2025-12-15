import axios from 'axios'
import React from 'react'



function Home() {
    const[products,setProducts]=React.useState([]);

const fetchProducts=async()=>{
    const response=await axios.get('http://localhost:3000/getallproducts');
    setProducts(response.data.products);
}

React.useEffect(()=>{
    fetchProducts();
},[]);
  return (
   <>
   <h1 className='text-5xl text-center mt-14 '>ALL PRODUCT</h1>
    <div className='grid grid-cols-3 gap-4 m-14'>
    {products.map((product)=>{
        return(
        <div key={product._id} className='border-2 border-gray-300 p-4 rounded-lg bg-white'>
            <h2 className='text-2xl font-bold mb-2 text-gray-700'>{product.name}</h2>
            <p className='text-gray-700 mb-1'>Price: {product.price}</p>
            <p className='text-gray-700'>Brand: {product.brand}</p>
        </div>
    )
    })}
    </div>
   </>
  )
}

export default Home