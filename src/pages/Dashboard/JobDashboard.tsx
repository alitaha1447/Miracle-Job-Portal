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
import { Modal } from "../../components/ui/modal";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import Select from '../../components/form/Select';
import ReactQuill from 'react-quill';

const JobDashboard: React.FC = () => {
    const [openPostJob, setOpenPostJob] = useState<boolean>(false)
    const [value, setValue] = useState<string>('');

    const options = [
        { value: "marketing", label: "Marketing" },
        { value: "template", label: "Template" },
        { value: "development", label: "Development" },

    ];

    const tableData = [

        { role: 'Developer', skill: 'HTML, CSS, Javascript', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Hold', assignedBy: 5 },
        { role: 'Accountant', skill: 'Tally, SAP', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Posted', assignedBy: 8 },
        { role: 'IT', skill: 'HTML, CSS, Javascript', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Draft', assignedBy: 0 },
        { role: 'Operator', skill: 'HTML, CSS, Javascript', salary: 15000, jobType: 'Full Time', desc: 'Full Time	', status: 'Completed', assignedBy: 1 },
        { role: 'HR', skill: 'Communication, Excel, Word', salary: 5000, jobType: 'Intern', desc: 'Intern	', status: 'Hold', assignedBy: 15 },
    ]


    const togglePostJob = () => {
        setOpenPostJob(!openPostJob)
    }

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };
    return (
        <>
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
                                Jobs List
                            </h3>
                            <button
                                onClick={togglePostJob}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                            >
                                Add New Job
                            </button>

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
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Role
                                                        </TableCell>
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Skill
                                                        </TableCell>
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Salary
                                                        </TableCell>
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Job Type
                                                        </TableCell>
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Job Description
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
                                                            Assigned By

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
                                                    {tableData.map((order) => (
                                                        <TableRow >
                                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                                {order.role}

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">

                                                                {order.skill}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                                {order.salary}

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.jobType}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.desc}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.status}

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.assignedBy}
                                                            </TableCell>
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
            <Modal isOpen={openPostJob} onClose={togglePostJob} className="max-w-6xl ">
                {/* Card container with fixed height and flex layout */}
                <div className="relative w-full h-[85vh] bg-white rounded-3xl dark:bg-gray-900 flex flex-col">

                    {/* Header (fixed) */}
                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Post Job
                        </h4>
                    </div>

                    {/* Body (scrollable) */}
                    <form className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Role</Label>
                                <Select
                                    options={options}
                                    placeholder="Select an option"
                                    onChange={handleSelectChange}
                                    className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Skills</Label>
                                <Select
                                    options={options}
                                    placeholder="Select an option"
                                    onChange={handleSelectChange}
                                    className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Job Description</Label>
                                <ReactQuill theme="snow" value={value} onChange={setValue} />
                            </div>

                            <div>
                                <Label>Preferred</Label>
                                <Select
                                    options={options}
                                    placeholder="Select an option"
                                    onChange={handleSelectChange}
                                    className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Salary Range</Label>
                                <div className="mt-1 flex items-center gap-3">

                                    <Input
                                        type="text"
                                        // inputMode="numeric"
                                        placeholder="25,000"
                                        // value={salaryMin}
                                        // onChange={handleMinChange}
                                        className="flex-1"
                                    />
                                    <span className="text-gray-400 dark:text-gray-500">to</span>
                                    <Input
                                        type="text"
                                        // inputMode="numeric"
                                        placeholder="55,000"
                                        // value={salaryMax}
                                        // onChange={handleMaxChange}
                                        className="flex-1"
                                    />
                                </div>
                                {/* <Input type="text" value="AS4568384" /> */}
                            </div>

                            <div>
                                <Label>Min. Experience</Label>
                                <Input type="text" id="input" />                            </div>

                            <div>
                                <Label>Interview Mode</Label>
                                <Select
                                    options={options}
                                    placeholder="Select an option"
                                    onChange={handleSelectChange}
                                    className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Interview Round</Label>
                                <Input type="text" id="input" />                            </div>

                            <div>
                                <Label>Total Marks</Label>
                                <Input type="text" id="input" />
                            </div>

                            {/* <div>
                                <Label>Postal Code</Label>
                                <Input type="text" value="ERT 2489" />
                            </div> */}




                        </div>
                    </form>

                    {/* Footer (fixed) */}
                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                        <div className="flex items-center gap-3 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={togglePostJob}>
                                Close
                            </Button>
                            <Button size="sm">Save Job</Button>
                        </div>
                    </div>
                </div>
            </Modal>

        </>

    )
}

export default JobDashboard