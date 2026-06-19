import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Api/Instance";

export const useGetSingleCar = () => {
    const [car, setCar] = useState(null);
    const [loading, setloading] = useState(false);

    async function getSingleCar(id){
        setloading(true);
        try {
            const car = await axiosInstance.get(`/cars/${id}`)
            setCar(car.data)
        } catch (error) {
            console.log("Error fetching car:", error);
            
        }finally{
            setloading(false)
        }
    }
    const id = useParams().id;
    useEffect(() => {
        getSingleCar(id)
    }, [id]);

    return{
    car, loading, getSingleCar
    }
}
