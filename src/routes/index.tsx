import DashboardPage from "@/pages/dashboard";
import LoginPage from "@/pages/login";
import { useAuth } from "@/context/AuthContext";
import RegisterPage from "@/pages/register";
import type { JSX } from "react";
import type React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => {
    const { currentUser } = useAuth();

    return (
        <Routes>
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute><Navigate to={'/dashboard'} replace /></ProtectedRoute>}></Route>
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/login" element={currentUser ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
            <Route path="/register" element={currentUser ? <Navigate to="/dashboard" replace /> : <RegisterPage />} />
        </Routes>
    )
}

interface PropsInterface {
    children: JSX.Element;
}

export const ProtectedRoute = ({ children }: PropsInterface) => {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/login" replace />;
};
