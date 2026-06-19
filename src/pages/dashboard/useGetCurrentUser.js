import { useEffect, useState } from "react"
import axiosInstance from "../../Api/Instance"
import { useNavigate } from "react-router-dom";


export const useGetCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isloading, setisloading] = useState(true)

  const navigate = useNavigate();

    async function getCurrentUser() {
        setisloading(true)
        try {
            const res = await axiosInstance.get('/auth/get-user')
            console.log(res)
           setCurrentUser(res.data)
        } catch (error) {
            console.log(error)
        }finally{
            setisloading(false)
        }
    }


    useEffect(() => {
        getCurrentUser()
    }, [])


useEffect(() => {
    // Only navigate when loading is complete
    if (!isloading) {
        const currentPath = window.location.pathname;
        const isAuthPage = currentPath.startsWith('/auth');
        const isDashboardPage = currentPath.startsWith('/dashboard');
        
        // Unauthenticated user trying to access dashboard -> redirect to signin
        if (!currentUser && isDashboardPage) {
            navigate("/auth/signin");
        }
        // Authenticated user trying to access auth pages -> redirect to dashboard
        else if (currentUser && isAuthPage) {
            navigate("/dashboard");
        }
    }
}, [isloading, currentUser, navigate])
    return{
        currentUser,
        isloading,
        getCurrentUser,
        setCurrentUser
    }

}




