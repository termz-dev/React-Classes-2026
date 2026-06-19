

import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "./useGetCurrentUser"
import { Sidebar } from "./Sidebar";


export default function Dashboard() {
  const { currentUser , setCurrentUser, isloading} = useGetCurrentUser();
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    // Clear user session logic here (e.g., remove token, clear state, etc.)
    setCurrentUser(null);
    navigate("/auth/signin"); // Redirect to login page after logout
  };4



  if(isloading){
    return(
      <div className="max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-600 mb-2">Loading...</h1>
        <p className="text-gray-600">Please wait while we fetch your data.</p>
      </div>
    )
  }

  // if (!currentUser) {
  //   return (
  //     <div className="max-w-lg mx-auto mt-20 bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col items-center">
  //       <h1 className="text-2xl font-bold text-red-600 mb-2">Logged Out</h1>
  //       <p className="text-gray-600">You have been logged out.</p>
  //     </div>
  //   );
  // }

  return (
  <div className="flex min-h-screen">
    
    <Sidebar />

    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-lg mx-auto mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-800">Dashboard</h1>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <p className="text-gray-700 text-base mb-6">
          Welcome to your dashboard!
        </p>

        {currentUser && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-indigo-900 mb-3">
              User Details
            </h2>
            <div className="flex flex-col gap-2 text-indigo-800">
              <div>
                <span className="font-medium text-indigo-600">Name:</span>{" "}
                {currentUser.firstName} {currentUser.lastName}
              </div>
              <div>
                <span className="font-medium text-indigo-600">Email:</span>{" "}
                {currentUser.email}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  </div>
  );
}