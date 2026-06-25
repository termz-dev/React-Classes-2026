import axiosInstance from "../../../../api/axiosInstance";
import { useState } from "react";

export const useCreateCeleb = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);


    async function createCeleb(celebData) {
        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const res = await axiosInstance.post('/celebs', celebData);
        setSuccess(true)
        return res.data.celeb
        } catch (error) {
            setError(error.message || "failed to create Celebrity");
        } finally {
            setLoading(false);
        }
        
    }

    return {
        loading,
        error,
        success,
        createCeleb
    }
}