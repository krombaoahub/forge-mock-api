import { useAuthContext } from "@/context/AuthContext";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
    const navigate = useNavigate()
    const { currentUser, handleLogout, loading } = useAuthContext();
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
