import { useEffect, useState } from "react"
import axiosInstance from "../../../Api/Instance";

 export const useGetAllProducts = () => {
     const [products, setProducts ] = useState([]);
     const [loading, setLoading] = useState(false)

    async function getAllProducts() {
        setLoading(true)
        try {
            const allProducts = await axiosInstance.get('/products')
            console.log(allProducts.data.products);
            setProducts(allProducts.data.products)
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        getAllProducts()
    }, []);
    return{products, loading}
}
