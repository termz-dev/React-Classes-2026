
import { useState, useEffect } from "react"
import axiosInstance from "../../../Api/Instance";

 export const useGetAllcars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState("")

    async function getAllCars(){
        setLoading(true)
         try {
            const res = await axiosInstance.get(`/cars?search=${encodeURIComponent(search)}`)
            console.log(res.data);
            setCars(res.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    function handleQuery(e){
        const value = e.target.value
        setQuery(value)
    }
    function handleSearch(){
        setSearch(query)
    }

    useEffect(() => {
    getAllCars()
}, [search]);
    return{
        cars, loading, handleQuery, handleSearch,query
    }
}
