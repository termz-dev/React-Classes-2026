import { useEffect, useState } from "react"
import axiosInstance from "../../../../api/axiosInstance"

export const useGetAllCars = () => {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [inpVal, setinpVal] = useState('')
  const [search, setSearch] = useState('')




//   const search = searchParams.get("search") || ""

  async function getAllCars() {
    setLoading(true)
    try {
      const res = await axiosInstance.get(`/cars?search=${encodeURIComponent(search)}`)

      setAllCars(res.data.allCars)
      
    } catch (error) {
      console.error(error)
      setError(error.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  function handleSearchChange(e){
    const value = e.target.value
    setinpVal(value)
    
  }

  function handleSearchClick(){
    setSearch(inpVal)
    
  }

  useEffect(() => {
    getAllCars()
  }, [search])

  return {
    allCars,
    loading,
    error,
    inpVal,
    getAllCars,
    handleSearchChange,
    handleSearchClick
  }
}
