import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";

export const useCreateProduct = () => {
    const [productData, setProductData] = useState({
        image: "",
        title: "",
        description: "",
        price: "",
        category: "",
        rating: {
            rate: 0, 
            count: 0,
        }
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
function handleChange(e) {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
        setProductData({
            ...productData,
            rating: {
                ...productData.rating,
                [name]: value,
            },
        });
    } else {
        setProductData({
            ...productData,
            [name]: value,
        });
    }
}

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axiosInstance.post("/products", productData);     
            console.log("Product created:", res.data);
            alert("Product Created Successfully");
            navigate("/products");
        } catch (error) {
            console.error("Error creating product:", error);
        } finally {
            setLoading(false);
        }
}
return {
    productData,
    handleChange,
    handleSubmit,
    loading,    
};
}