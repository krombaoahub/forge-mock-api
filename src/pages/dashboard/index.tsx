import { useAuth } from "@/context/AuthContext";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import type React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
    const navigate = useNavigate()
    const { currentUser, handleLogout, loading } = useAuth();
    const { email } = currentUser;
    console.log(currentUser)
    return (
        <DashboardLayout>
            <h1>Welcome, {email}</h1>

            <div className="flex justify-center w-full">
                <button onClick={() => handleLogout(navigate)} type="submit" className={`w-full btn btn-primary ${loading ? 'btn-disabled' : ''}`}>
                    {loading && <span className="loading loading-spinner"></span>}
                    handleLogout
                </button>
            </div>
        </DashboardLayout>
    )
}

export default DashboardPage;