import {useState, useEffect} from 'react';
import axiosInstance from '../../../../api/axiosInstance';

export const useGetAllCelebs = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [celebs, setCelebs] = useState([]);


    async function allCelebs() {

        setLoading(true)

        try {
            const res = await axiosInstance.get('/celebs');
            setCelebs(res.data.celebs)
        } catch (error) {

            setError(error.message || "unable to fetch Celeb");
            
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        allCelebs()
    }, [])

    return {
        loading,
        error,
        celebs
    }
}