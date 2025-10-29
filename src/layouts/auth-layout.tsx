import type React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="flex w-full mx-auto">
            {children}
        </div>
    )

}

export default AuthLayout