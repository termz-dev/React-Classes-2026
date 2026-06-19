import { useEffect, useState } from "react";
import axiosInstance from "../../../Api/Instance";
import { useParams } from "react-router-dom";

export const useGetSingleProduct = () => {
    const [product, setProduct] = useState({});
    const [loading, setloading] = useState(false);

    async function getSingleProduct(id){
        setloading(true);
        try {
            const res = await axiosInstance.get(`/products/${id}`)
            setProduct(res.data.product)
            // console.log(res.data.product, 'single')
        } catch (error) {
            console.log("Error fetching product:", error);
            
        }finally{
            setloading(false)
        }
    }
    const id = useParams().id;
    useEffect(() => {
        getSingleProduct(id)
    }, [id]);

    return{
    product, loading, getSingleProduct
    }
}