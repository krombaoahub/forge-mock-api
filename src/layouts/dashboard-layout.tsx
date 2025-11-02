import Footer from "@/components/footer";
import Header from "@/components/header";
import type React from "react";

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className="flex flex-col w-full mx-auto">
            <Header dashboardHeader />
            <main className="mt-18 min-h-[90dvh]">
                <section className="w-full min-h-[90dvh] [&>div]:max-w-7xl py-10 bg-primary/15">
                    <div className='mx-auto flex flex-col'>{children}</div>
                </section>
            </main>
            <Footer />
        </div>
    )

}