import { useState } from "react";
import axiosInstance from "../../../../api/axiosInstance";

export const useDeleteCeleb = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    async function deleteCeleb(id) {
        setLoading(true);
        setSuccess(false)
        setError(null)

        try { const res = await axiosInstance.delete(`/celebs/${id}`)
            res.data.celeb
            setSuccess(true);
            return true;
        } catch (error) {
            setError(error.message || "Failed to Delete")
        }
        finally {
            setLoading(false)
        }
    } 

    return{
        loading,
        error,
        success,
        deleteCeleb,
    }
}