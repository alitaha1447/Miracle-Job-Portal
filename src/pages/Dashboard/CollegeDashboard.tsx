import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// import { BsThreeDotsVertical } from "react-icons/bs";

const tableData = [

    { id: 1, student: 'Taha Ali', job: 'Developer', company: 'Miracle', status: 'Joined	', },
    { id: 2, student: 'Ahmed Khan', job: 'Designer', company: 'Miracle', status: 'Applies	', },
    { id: 3, student: 'Sara Ali', job: 'Manager', company: 'Miracle', status: 'Pending	', },
    { id: 4, student: 'Ayesha Khan', job: 'Developer', company: 'Miracle', status: 'Applies	', },]

const CollegeDashboard: React.FC = () => {
    return (
        <div>
            {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
            {/* <PageBreadcrumb pageTitle="Basic Tables" /> */}
            <div className="space-y-6">
                {/* <ComponentCard title="Jobs List"> */}
                <div
                    className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
                >
                    {/* Card Header */}
                    <div className="px-6 py-5 flex items-center justify-between">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            College Dashboard
                        </h3>
                        {/* <button
                            // onClick={togglePostJob}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                            Add New Job
                        </button> */}

                    </div>

                    {/* Card Body */}
                    <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                        <div className="space-y-6">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                                <div className="max-w-full overflow-x-auto">
                                    <div className="min-w-[1102px]">
                                        <Table>
                                            {/* Table Header */}
                                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                                <TableRow>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        S.No.
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Student
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Applied For Job
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Company Name
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Status
                                                    </TableCell>



                                                </TableRow>
                                            </TableHeader>

                                            {/* Table Body */}
                                            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                                {tableData.map((order, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {order.id}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">

                                                            {order.student}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {order.job}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.company}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.status}
                                                        </TableCell>
                                                        {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <div className="relative inline-flex">

                                                                <button
                                                                    type="button"
                                                                    // onClick={() => toggleStatusMenu(idx)}
                                                                    className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"


                                                                >
                                                                    {order.status}
                                                                </button>
                                                                <Dropdown
                                                                    isOpen={openStatusIdx === idx}
                                                                    onClose={closeStatusMenu}
                                                                    className="absolute right-0 top-full z-50 mt-2 flex w-48 flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                                >
                                                                    <button
                                                                        type="button"
                                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                                        Update Status
                                                                    </button>

                                                                </Dropdown>
                                                            </div>

                                                        </TableCell> */}
                                                        {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.assignedBy}
                                                        </TableCell> */}
                                                        {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <div className="relative inline-flex">
                                                                <button
                                                                    // onClick={() => toggleRowMenu(idx)}
                                                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300"
                                                                    aria-haspopup="menu"
                                                                    // aria-expanded={openMenuIdx === idx}
                                                                    style={{ lineHeight: 0 }}
                                                                >
                                                                    <BsThreeDotsVertical size={20} />
                                                                    <span className="sr-only">Open actions</span>
                                                                </button>

                                                                <Dropdown
                                                                        isOpen={openMenuIdx === idx}
                                                                        onClose={closeMenu}
                                                                        className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                                    >
                                                                        <button
                                                                            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                                            onClick={() => { navigate("/participants-list"); closeMenu(); }}
                                                                        >
                                                                            View Participants
                                                                        </button>
                                                                       
                                                                    </Dropdown>
                                                            </div>
                                                        </TableCell> */}

                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BasicTableOne /> */}


                {/* </ComponentCard> */}
            </div>
        </div>
    )
}

export default CollegeDashboard