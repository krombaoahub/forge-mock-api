import type React from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="flex flex-col mx-auto ">
            {children}
        </div>
    )

}
export default AppLayout