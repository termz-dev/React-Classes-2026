import { useEffect, useState } from "react"
import axiosInstance from "../../../Api/Instance"

export const useGetUserProducts = ()=>{
       const [userProducts, setUserProducts] = useState([])
       const [loading, setLoading] = useState(false)
       const [error, seterror] = useState('')



    async function getUserProducts(){
        try {
            setLoading(true)
            const res =  await axiosInstance.get('/products/user' )
            console.log(res)
            setUserProducts(res.data.products)


        } catch (error) {
            seterror(error.response?.data?.message || 'Something went wrong')
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getUserProducts()
    },[])

    return{
        userProducts,
        loading,
        error
    }
}

