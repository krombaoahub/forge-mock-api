import type React from "react";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="flex w-full mx-auto">
            {children}
        </div>
    )

}