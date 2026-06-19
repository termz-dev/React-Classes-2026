
import {
    useEffect,
    useState
} from "react";
import {
    useParams
} from "react-router-dom";
import axiosInstance from "../../../../api/axiosInstance";

export const useGetSIngleCar = () => {
    const {
        id
    } = useParams()
    const [singleCar, setSingleCar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    async function getSingleCar() {
        setLoading(true)
        try {
            const res = await axiosInstance.get(`/cars/${id}`);
            setSingleCar(res.data)
        } catch (error) {
            console.log(error)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        getSingleCar()

    }, [id])

    return {
        singleCar,
        loading,
        error,
        getSingleCar
    }


}