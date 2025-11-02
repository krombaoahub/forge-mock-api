import AppLogo from "@/components/logo";
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
           <AppLogo />
        </DashboardLayout>
    )
}
