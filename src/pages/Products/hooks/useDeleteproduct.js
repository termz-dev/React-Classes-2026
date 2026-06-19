import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetSingleProduct } from "./useGetSingleProduct";
import axiosInstance from "../../../Api/Instance";

export const useDeleteProduct = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { product } = useGetSingleProduct();
  const navigate = useNavigate();

  async function deleteProduct() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );
    if (!confirmDelete) {
      return;
    }
    setIsDeleting(true);
    try {
      await axiosInstance.delete(`/products/${product._id}`);
      alert("Product deleted successfully");
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  }

  return { deleteProduct, isDeleting };
};
