import { useState , useEffect} from "react";
import axiosInstance from "../../../Api/Instance";

export const useGetUserProducts = () => {
    const [products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, seterror] = useState('')

   async function getUserProducts() {
       setLoading(true)
       try {
           const userProducts = await axiosInstance.get('/products/user')
           console.log(userProducts.data.products);
           setProducts(userProducts.data.products)
       } catch (error) {
           console.log(error);
             seterror(error.response?.data?.message || 'Something went wrong')
       }finally{
           setLoading(false)
       }
   }
   useEffect(() => {
       getUserProducts()
   }, []);
   return{products, loading, error}
}