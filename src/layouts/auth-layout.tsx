import Footer from "@/components/footer";
import Header from "@/components/header";
import type React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (

        <div className="flex flex-col mx-auto ">
            <Header />
            <main className="sm:mt-18 mt-8 min-h-dvh items-center flex m-auto  text-center">
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    )

}

export default AuthLayout