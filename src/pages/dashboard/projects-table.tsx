import { Plus, Trash } from "lucide-react";
import type React from "react";
import type { DocumentData } from "firebase/firestore";
import { deleteProject } from "@/services/project-service";
import { getByAttribute } from "@/libs/domUtils";
import { useCallback, useEffect, useMemo, useRef, useState, type BaseSyntheticEvent } from "react";
import { HSDropdown } from "flyonui/flyonui";
import { useProjectContext } from "@/context/ProjectContext";

const ProjectTable: React.FC = () => {
    const maxVisibleButtons = 3;
    const itemsPerPage = 10; // Number of items to display per page
    const { projects, handleGetProject } = useProjectContext()
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemLength, setItemLength] = useState<number>(projects.length);
    const [buttonPages, setButtonPages] = useState<{ startPage: number, endPage: number }>({ startPage: 1, endPage: 3 });
    const [itemsToDisplay, setItemsToDisplay] = useState<DocumentData[]>(projects.slice(0, itemsPerPage))

    console.log('Projects in table:', JSON.stringify(projects));
    const searchRef = useRef<HTMLInputElement>(null);

    const totalPages = useMemo(() => Math.ceil(itemLength / itemsPerPage), [itemLength]);

    const onDelete = (item: DocumentData) => {
        deleteProject(item.uid)
            .then(isDeleted => {
                isDeleted && handleGetProject()
            })
    }

    const onCreateProjectModal = () => {
        const modalBtn = getByAttribute('data-modal-btn', '#create-project', document)
        modalBtn && modalBtn.click()
    }

    useEffect(() => {
        setTimeout(() => {
            HSDropdown.autoInit()
        }, 1000);
    }, [handleGetProject])

    const fillMissingPage = useCallback((start: number, end: number) => {
        const numbers = [];
        if (start > end) {
            [start, end] = [end, start]; // Swap values if they are out of order
        }

        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }
        return numbers;
    }, [buttonPages])

    useEffect(() => {
        let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (totalPages < endPage) {
            endPage = totalPages
        }
        setButtonPages({ startPage, endPage });
    }, [totalPages, currentPage])

    const paginate = useCallback((pageNumber: number = 1) => {

        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = getItemsForPage(searchRef.current?.value.toLowerCase() || '');
        setCurrentPage(pageNumber);

        setItemsToDisplay(items.slice(startIndex, endIndex));

    }, [projects]);

    const getItemsForPage = useCallback((query: string) => {
        setItemLength(projects.length);

        if (query.trim() === '') {
            setItemsToDisplay(projects.slice(0, itemsPerPage));
            return projects
        }

        const filteredItems = projects.filter((item: DocumentData) =>
            item.name.toLowerCase().includes(query)
        );
        setItemsToDisplay(filteredItems.slice(0, itemsPerPage));

        setItemLength(filteredItems.length);
        return filteredItems

    }, [searchRef.current?.value]);

    const search = useCallback((e: BaseSyntheticEvent) => {
        const query = e.target.value.toLowerCase();
        setCurrentPage(1);
        getItemsForPage(query)
    }, [searchRef.current?.value]);

    const pageInfo = useCallback(() => {
        let start = (((currentPage - 1) * itemsPerPage) + 1);
        let end = currentPage * (itemLength < itemsPerPage ? itemLength : itemsPerPage);
        if (end > itemLength) end = itemLength;
        return (
            <>
                <div className="me-2 max-w-sm text-sm text-base-content/80 sm:mb-0 gap-1 flex">
                    Showing
                    <span className="font-semibold text-base-content/80">{start}-{end}</span>
                    of
                    <span className="font-semibold">{itemLength}</span>
                    projects
                </div>
            </>)
    }, [currentPage])

    return (
        <div className="w-full overflow-x-auto ">
            <table className="table bg-secondary/5 rounded-md p-6">
                <caption className="flex  justify-between border-b border-secondary/20 text-base-content p-5 text-left text-lg font-semibold rtl:text-right">
                    <div className="flex gap-2 items-center">
                        <span>Projects</span>
                        {/* <span className="text-secondary/50">/</span> */}
                        <div onClick={onCreateProjectModal}>
                            <div className="btn btn-primary size-8 p-0">
                                <Plus size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:justify-between my-2">
                        <div className="input max-w-xs">
                            <span className="icon-[tabler--search] text-base-content/80 my-auto me-3 size-5 shrink-0"></span>
                            <input ref={searchRef} onInput={search} type="search" className="grow" placeholder="Search" id="leadingIconDefault" />
                        </div>
                    </div>
                </caption>

                <tbody>
                    {
                        itemsToDisplay.map((item: DocumentData, key: number) => (
                            <tr className="cursor-pointer row-hover" key={key}>
                                <td className="flex justify-between items-center">
                                    <div className="size-full p-1">{item.name}</div>
                                    <div>
                                        <div className="dropdown relative inline-flex">
                                            <button id="dropdown-avatar" type="button" className="p-0 border-0 dropdown-toggle flex items-center gap-2 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                                <div className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--dots-vertical] size-5"></span></div>
                                            </button>
                                            <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-20 max-w-65" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
                                                <li className="p-3 flex items-center gap-2 btn btn-soft" onClick={() => onDelete(item)}>
                                                    <Trash size={16} /> <div>Delete</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {totalPages && <div className="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
                {pageInfo()}
                <nav className="join">
                    {currentPage != 1 && <button onClick={() => paginate(currentPage - 1)} type="button" className="btn btn-soft btn-square join-item" aria-label="previous button">
                        <span className="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
                    </button>}
                    {
                        totalPages > 1 && fillMissingPage(buttonPages.startPage, buttonPages.endPage).map((page: number, key: number) => {
                            let pageNumber = Number(page);
                            return (
                                <div key={key}>
                                    <button onClick={() => paginate(pageNumber)} type="button" className={`btn btn-soft join-item btn-square ${currentPage == pageNumber ? 'text-bg-primary' : ''}`}>{pageNumber}</button>
                                </div>
                            )
                        })
                    }
                    {currentPage != totalPages &&
                        <button onClick={() => paginate(currentPage + 1)} type="button" className="btn btn-soft btn-square join-item" aria-label="next button">
                            <span className="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
                        </button>}
                </nav>
            </div>}
        </div>
    )
}

export default ProjectTable