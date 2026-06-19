import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";

export const useCreateCars = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    brand: "",
    model: "",
    year: "",
    color: "",
    transmission: "",
    price: "",
    isAvailable: false,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axiosInstance.post("/cars", {
        ...formData,
        price: Number(formData.price),
        year: Number(formData.year),
      });

      console.log("Car created:", res.data);
      alert("Car Created Successfully");
      router("/cars");
    } catch (error) {
      console.error("Error creating car:", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
  };
};
