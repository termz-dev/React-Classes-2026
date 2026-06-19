import { useEffect, useState } from "react"
import { useGetSIngleCar } from "./useGetSIngleCar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

export const useUpdateCar = () => {
  const { singleCar,} = useGetSIngleCar();
  const navigate = useNavigate();

   const [carData, setCarData] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        price: ''
    })
  console.log(singleCar)



  useEffect(()=>{
    if(singleCar){
        setCarData({
            title: singleCar.title,
            description: singleCar.description,
            image: singleCar.image,
            category: singleCar.category,
            price: singleCar.price
        })
    }
  },[singleCar])


 


    async function handleSubmit(e){
        e.preventDefault();
        try {
            const res = await axiosInstance.patch(`/cars/${singleCar._id}`, carData);
            alert('Car updated successfully!')
            navigate('/cars/' + singleCar._id);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return{
        carData,
        setCarData,
        handleSubmit
    }

}