import { FormField } from "@/components/forms";
import { useProjectContext } from "@/context/ProjectContext";
import type { CreateProjectModalProps } from "@/interfaces";
import { getBySelector } from "@/libs/domUtils";
import { destroyInitModal } from "@/libs/utils";
import { createProjectFormSchema, type CreateProjectFormSchema } from "@/zod/schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ children, refId }) => {
    const { loading, errorMsg, handleCreateProject, handleGetProject } = useProjectContext()
    const query = getBySelector(`#${refId}`, document)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<CreateProjectFormSchema>({
        resolver: zodResolver(createProjectFormSchema),
    });

    useEffect(() => {
        if (query) {
            destroyInitModal(query)
        }
        return () => reset(); // cleanup on unmount
    }, []);

    const onCreateProject = async (data: any) => {
        await handleCreateProject(data, () => {
            if (query && !errorMsg) {
                setTimeout(() => {
                    handleGetProject()
                }, 100);
                destroyInitModal(query)
                reset()
            }
        })
    }

    return (
        <div>
            <div aria-haspopup="dialog" aria-expanded="false" data-overlay={`#${refId}`} data-modal-btn={`#${refId}`}>
                {children}
            </div>

            <div id={`${refId}`} className="overlay modal overlay-open:opacity-100 overlay-open:duration-300 modal-middle hidden" role="dialog" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">New Project</h3>
                            <button type="button" className="btn btn-text btn-circle btn-sm absolute end-3 top-3" aria-label="Close" data-overlay={`#${refId}`}><span className="icon-[tabler--x] size-4"></span></button>
                        </div>
                        <div className={`${errors.root?.message || errorMsg ? 'rounded border p-5 alert-error alert-soft w-full alert' : 'hidden'}`}>
                            {errors.root?.message && (
                                <small className="font-medium">{errors.root.message}</small>
                            )}
                            {errorMsg && <small className='text-red-500'>{errorMsg}</small>}
                        </div>
                        <FormField handleSubmit={handleSubmit((data) => onCreateProject(data))} className='w-full p-6 pt-0' inputs={[{
                            className: 'border-0 border-b-1 rounded-none rounded-t',
                            register,
                            placeholder: 'Example: App, Project, Todo, etc...',
                            errors,
                            field: 'name',
                            label: 'Name'
                        }]} >
                            <div className="flex justify-end gap-4 w-full">
                                <button type="button" className="btn btn-soft btn-secondary" data-overlay={`#${refId}`}>Cancel</button>
                                <button type="submit" className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`}>
                                    {loading && <span className="loading loading-spinner"></span>}
                                    Create
                                </button>
                            </div>
                        </FormField>
                    </div>
                </div>
            </div>
        </div>)
}

export default CreateProjectModal;