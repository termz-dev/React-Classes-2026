import { useState } from "react"
import axiosInstance from "../../../../api/axiosInstance";

export const useUpdateCeleb = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function updateCeleb(celebData, id) {

        setLoading(true);
        try {
             const res = await axiosInstance.patch(`/celebs/${id}`, celebData)
        console.log(res.data)
        setSuccess(true);
        return true;
        } catch (error) {
            setError(error.message || "failed to update")
            return false;
        } finally {
            setLoading(false)
        }
       
        
    }


    return {
        loading,
        error,
        success,
        updateCeleb
    }
}