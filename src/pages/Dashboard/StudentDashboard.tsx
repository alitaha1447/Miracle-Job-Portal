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

    { id: 1, company: 'Miracle', jobTitle: 'Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
    { id: 2, company: 'Google', jobTitle: 'SDE', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Apply' },
    { id: 3, company: 'Meta', jobTitle: 'Frontend Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Apply' },
    { id: 4, company: 'Amazon', jobTitle: 'Backend Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
    { id: 5, company: 'Microsoft', jobTitle: 'Full Stack Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Apply' },
    { id: 6, company: 'Apple', jobTitle: 'iOS Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Apply' },
    { id: 7, company: 'Netflix', jobTitle: 'Android Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
    { id: 8, company: 'Tesla', jobTitle: 'Data Scientist', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Apply' },
    { id: 9, company: 'SpaceX', jobTitle: 'Machine Learning Engineer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Apply' },
    { id: 10, company: 'IBM', jobTitle: 'DevOps Engineer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
]

const StudentDashboard: React.FC = () => {
    return (
        <div>

            <div className="space-y-6">
                <div
                    className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
                >
                    {/* Card Header */}
                    <div className="px-6 py-5 flex items-center justify-between">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            Student Dashboard
                        </h3>
                        {/* <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
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
                                                        Company name
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Job Title
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Skill Required
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Last Submission Date
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Job Type
                                                    </TableCell>
                                                    <TableCell
                                                        // isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        View Full Detail
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        View Attachments
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Open To
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Status
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Action
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

                                                            {order.company}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {order.jobTitle}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.skill}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.lastdate}
                                                        </TableCell>
                                                        {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <div className="relative inline-flex">

                                                                <button
                                                                    type="button"
                                                                    onClick={() => toggleStatusMenu(idx)}
                                                                    className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"


                                                                >
                                                                    {order.status}
                                                                </button>


                                                            </div>

                                                        </TableCell> */}
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.jobType}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.detail}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.attachemnt}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.openTo}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.status}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.action}
                                                        </TableCell>
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

export default StudentDashboard