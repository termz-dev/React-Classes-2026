import { useEffect, useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";
import { useParams } from "react-router-dom";

export const useGetSingleCeleb = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [singleCeleb, setSingleCeleb] = useState(null);


    async function getSingleCeleb(id) {
        setLoading(true)
        try {
            const res = await axiosInstance.get(`/celebs/${id}`)
            setSingleCeleb(res.data.celeb)
        } catch (error) {
            setError(error.message || "failed to fetch single celebrity")
        } finally{
            setLoading(false)
        }
    }
    const id = useParams().id
    useEffect( () => {
        getSingleCeleb(id)
    }, [id])

    return {
        loading,
        error,
        singleCeleb,
        getSingleCeleb
    }
}