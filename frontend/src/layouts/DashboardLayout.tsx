import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}


export default function DashboardLayout({
    children
}: DashboardLayoutProps) {

    return (

        <div className="flex min-h-screen bg-[#F8F9FA]">

            {/* Sidebar */}
            <Sidebar />


            {/* Main Area */}
            <div className="flex-1 flex flex-col">


                {/* Navbar */}
                <Navbar />


                {/* Page Content */}
                <main className="
                    flex-1
                    p-6
                ">
                    {children}
                </main>


            </div>

        </div>

    );
}