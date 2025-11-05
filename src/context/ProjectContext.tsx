import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ProjectContextProps } from '@/interfaces';
import { useAuthContext } from './AuthContext';
import { createProject, getProjectByUserId } from '@/services/project-service';
import type { ProjectResultType } from '@/types'
import { Outlet } from 'react-router-dom';
import { reInitFlyonUi } from '@/hooks/use-init-flyoui';

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
    const { currentUser } = useAuthContext()
    const [loading, setLoading] = useState<boolean>(false);
    const [providerLoading, setProviderLoading] = useState<boolean>(true);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [projects, setProjects] = useState<ProjectResultType>([])

    const handleGetProject = useCallback(async () => {
        //console.log('Getting projects for user:', currentUser)
        return await getProjectByUserId(currentUser.localId)
            .then((data) => setProjects(data))
            .catch((error) => setErrorMsg(error.message))
    }, [currentUser.localId])

    useEffect(() => {
        //console.log('Fetching projects...')
        setProviderLoading(true)
        handleGetProject().finally(() => {
            setProviderLoading(false);
            reInitFlyonUi()
        })
    }, [])

    const handleCreateProject = async (data: any, callback?: () => void) => {
        setErrorMsg('')
        setLoading(true)
        await createProject(currentUser.localId, data.name)
            .then((docRef) => {
                //console.log("New projects added with ID:", docRef.id);
                callback && callback()
            })
            .catch((error) => setErrorMsg(error.message))
            .finally(() => setLoading(false))
    }

    const context = { loading, errorMsg, projects, handleCreateProject, handleGetProject };

    return (
        <ProjectContext.Provider value={context}>
            {!providerLoading ? children : <Outlet />}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};

