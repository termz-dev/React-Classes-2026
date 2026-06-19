import { useNavigate } from "react-router-dom";
import { useGetSingleProduct } from "./useGetSingleProduct";
import { useEffect, useState } from "react";
import axiosInstance from "../../../Api/Instance";

export const useUpdateProducts = () => {
    const [loading, setLoading] = useState(false)
    const {product} = useGetSingleProduct();
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        image: "",
        title: "",
        description: "",
        price: "",
        category: "",
    });

    useEffect(() => {
        if (product) {
            setProductData({
                image: product.image,
                title: product.title,
                description: product.description,
                price: product.price,
                category: product.category,
            });
        }
    }, [product]);
     async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axiosInstance.patch(`/products/${product._id}`, productData);
            alert('Product updated successfully');
            navigate(-1);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
       }

    return {productData, loading, setProductData, handleSubmit, loading}

}