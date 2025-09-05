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
                            {/* TABLE — visible on md and above */}
                            <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
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


                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                            {/* CARDS — visible below lg */}
                            <div className="lg:hidden grid grid-cols-1 gap-4">
                                {tableData.map((item) => {
                                    // const theme = getStatusTheme(item.status);
                                    return (
                                        <div
                                            key={item.id}
                                            className={`rounded-2xl border p-4 shadow-sm `}
                                        >
                                            {/* Top row: ID + Status */}
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <div className="text-[11px] uppercase tracking-wide text-gray-500">ID</div>
                                                    <div className="text-sm font-semibold text-gray-800">{item.id}</div>
                                                </div>
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium `}
                                                >
                                                    <span className={`h-1.5 w-1.5 rounded-full `} />
                                                    {item.status.trim()}
                                                </span>
                                            </div>

                                            {/* Main details */}
                                            <div className="mt-3">
                                                <div className="text-base font-semibold text-gray-900">{item.student}</div>
                                                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-gray-600">Job</span>
                                                        <span className="font-medium text-gray-900">{item.job}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-gray-600">Company</span>
                                                        <span className="font-medium text-gray-900">{item.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
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