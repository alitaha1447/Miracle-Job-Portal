import React, { useState } from 'react'
// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ComponentCard from "../../components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
// import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// import Badge from "../../components/ui/badge/Badge";
import { Modal } from '../../components/ui/modal';
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import TextArea from '../../components/form/input/TextArea';
import Checkbox from '../../components/form/input/Checkbox';
import { FiEye } from "react-icons/fi";
import Select from "react-select";

const role = [
    { value: "0", label: "Frontend Developer" },
    { value: "1", label: "Backend Developer" },
    { value: "2", label: "QA tester" },
]


const tableData = [{ name: 'Alex', applyDate: '20-02-2026', remark: 'Pending', status: 'Selected' }, { name: 'Alex', applyDate: '20-02-2026', remark: 'Pending', status: 'Selected' }]

const ParticipantDashboard: React.FC = () => {
    // const [isChecked, setIsChecked] = useState<boolean>(false);
    const [openInterview, setOpenInterview] = useState<boolean>(false)
    const toggleInterview = () => {
        setOpenInterview(!openInterview)
    }
    return (
        <>
            <div>
                {/* <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            /> */}
                {/* <PageBreadcrumb pageTitle="Basic Tables" /> */}
                <div className="space-y-6">
                    <div className="px-6 py-5 flex items-center justify-between">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            Participant List
                        </h3>
                        <button
                            onClick={toggleInterview}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                            Schedule Interview
                        </button>

                    </div>
                    {/* <ComponentCard title="Participant List"> */}
                    {/* <BasicTableOne /> */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                        <div className="max-w-full overflow-x-auto">
                            <div className="min-w-[1102px]">
                                <Table>
                                    {/* Table Header */}
                                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                        <TableRow>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                <div />

                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                S.No.
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Name
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Apply Date
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Remark
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                View Resume
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Status
                                            </TableCell>
                                        </TableRow>
                                    </TableHeader>

                                    {/* Table Body */}
                                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                        {tableData.map((order, index) => (
                                            <TableRow key={index}>

                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {order.name}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {order.applyDate}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {order.remark}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                    >
                                                        <FiEye className="text-sm" />
                                                        View Resume
                                                    </button>
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {order.status}
                                                </TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/* </ComponentCard> */}
                </div>
            </div>
            <Modal isOpen={openInterview} onClose={toggleInterview} className="max-w-2xl ">
                {/* Card container with fixed height and flex layout */}
                <div className="relative w-full h-[85vh] bg-white rounded-3xl dark:bg-gray-900 flex flex-col">

                    {/* Header (fixed) */}
                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Interview
                        </h4>
                    </div>

                    {/* Body (scrollable) */}
                    <form className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">










                            <div>
                                <Label>Name</Label>
                                <Input type="text" id="input" />
                            </div>
                            <div>
                                <Label>Role</Label>
                                <Select
                                    options={role}
                                    placeholder="Select an option"

                                />
                            </div>


                            <div>
                                <Label>Marks</Label>
                                <Input type="text" id="input" />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <TextArea
                                    // value={message}
                                    // onChange={(value) => setMessage(value)}
                                    rows={6}
                                />
                            </div>





                        </div>
                    </form>

                    {/* Footer (fixed) */}
                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                        <div className="flex items-center gap-3 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={toggleInterview}>
                                Close
                            </Button>
                            <Button size="sm">Submit</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default ParticipantDashboard