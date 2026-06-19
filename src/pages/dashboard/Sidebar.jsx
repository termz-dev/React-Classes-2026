import { Link } from "react-router-dom";

const sidebarItems = [
    {
        name: "Dashboard",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7m6 0v6m0 0h6m-6 0H7" />
            </svg>
        ),
        link: "/dashboard"
    },
    {
        name: "Blogs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
        ),
        link: "/blogs"
    },
    {
        name: "Cars",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6m-6 0H7m6 0v6m0 0h6m-6 0H7" />
            </svg>
        ),
        link: "/dashboard/cars"
    },
    {
        name: "Settings",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        link: "/dashboard/settings"
    }
];

export function Sidebar() {
    return (
        <aside className="w-64 bg-white h-screen shadow-md flex flex-col justify-between">
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Dashboard Menu</h1>
                <nav className="space-y-2">
                    {sidebarItems.map((item, index) => (
                        <Link key={item.name} to={item.link} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="p-4 text-center text-gray-500">
                <p>Inspired by <a href="https://galichat.com" className="text-blue-500 underline">galichat.com</a></p>
            </div>
        </aside>
    );
}