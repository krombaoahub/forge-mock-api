import AppLogo from "@/components/logo";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { Search } from "lucide-react";
import { ProjectProvider, useProjectContext } from "@/context/ProjectContext";
import CreateProjectModal from "./create-project-modal"
import { getByAttribute } from "@/libs/domUtils";
import ProjectTable from "./projects-table";

export default function DashboardPage() {
    return (
        <ProjectProvider>
            <Dashboard />
        </ProjectProvider >
    )
}
export function Dashboard() {
    const { projects } = useProjectContext()

    const onCreateProjectModal = () => {
        const modalBtn = getByAttribute('data-modal-btn', '#create-project', document)
        modalBtn && modalBtn.click()
    }

    return (
        <DashboardLayout>
            <div className="card p-6">
                {/* <div className="flex flex-col justify-center min-h-[80dvh] gap-4"> */}
                <CreateProjectModal refId="create-project" className="hidden" />
                {projects.length
                    ? <ProjectTable />
                    : <div className="flex flex-col gap-4 justify-center min-h-[80dvh] items-center">
                        <p className="font-medium text-sm flex gap-2 items-center"><Search size={15} />No porjects yet...</p>
                        <AppLogo logoOnly logoSize={70} className="[&>div]:size-60 [&>div]:btn [&>div]:btn-secondary [&>div]:bg-secondary/20 [&>div]:border-0 [&>div]:shadow-none [&>div]:rounded-full" />
                        {/* <CreateProjectModal refId="create-project-no-data"><div className="btn btn-secondary">Create new project</div></CreateProjectModal> */}
                        <div onClick={onCreateProjectModal}><div className="btn btn-secondary">Create new project</div></div>
                    </div>}
            </div>
        </DashboardLayout >
    )
}
