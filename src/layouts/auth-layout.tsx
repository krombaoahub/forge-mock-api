import type React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="min-h-lvh items-center flex m-auto max-w-md text-center">
            {children}
        </div>
    )

}

export default AuthLayout