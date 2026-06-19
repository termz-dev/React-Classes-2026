import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const useDeleteCar = () => {

    const [isDeleting, setIsDeleting] = useState(false)

    const navigate = useNavigate()
    const {id } = useParams()



    async function deleteCar() {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?")
        if(!confirmDelete) return;


        setIsDeleting(true)
        try {
            const res  = await axios.delete(`http://localhost:3000/api/v1/cars/${id}`)
            console.log(res)
            alert("Car deleted successfully")
            navigate('/cars')
        } catch (error) {
            console.log(error)
            
        }finally{
            setIsDeleting(false)
        }
    }


    return{
        deleteCar,
        isDeleting
    }
}