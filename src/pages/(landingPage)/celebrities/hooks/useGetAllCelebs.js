import {useState, useEffect, useCallback} from 'react';
import axiosInstance from '../../../../api/axiosInstance';

export const useGetAllCelebs = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [celebs, setCelebs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    


   const allCelebs = useCallback(async () => {
    setLoading(true)
    try {
        const res = await axiosInstance.get(`/celebs?search=${encodeURIComponent(searchQuery)}`);
        setCelebs(res.data.celebs)
    } catch (error) {
        setError(error.message || "unable to fetch Celeb");
    } finally {
        setLoading(false)
    }
}, [searchQuery])

useEffect(() => {
    allCelebs()
}, [allCelebs])

    return {
        loading,
        error,
        celebs,
        searchQuery,
        setSearchQuery
    }
}