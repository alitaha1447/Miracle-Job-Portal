import React, { useState } from 'react'
import { useNavigate } from 'react-router';

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
import { FaPlus, FaMinus } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
// import Badge from "../../components/ui/badge/Badge";
import { Modal } from "../../components/ui/modal";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
// import Select from '../../components/form/Select';
import ReactQuill from 'react-quill';
import Select from "react-select";
import { Dropdown } from '../../components/ui/dropdown/Dropdown';

const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },

];

const role = [
    { value: "0", label: "Frontend Developer" },
    { value: "1", label: "Backend Developer" },
    { value: "2", label: "QA tester" },
]

const skills = [
    { value: "0", label: "HTML" },
    { value: "1", label: "CSS" },
    { value: "2", label: "Javascript" },
    { value: "3", label: "Tailwind" },
    { value: "4", label: "Typescript" },
    { value: "5", label: "React JS" },
    { value: "6", label: "React Native" },
    { value: "7", label: "Node JS" },
    { value: "8", label: "Mongo DB" },
    { value: "9", label: "SQL" },
    { value: "10", label: "GitHub" },
    { value: "11", label: "Jira" },
    { value: "12", label: "Trello" },
];
const mode = [
    { value: "0", label: "Online" },
    { value: "1", label: "Offline" },
]


const tableData = [

    { role: 'Developer', skill: 'HTML, CSS, Javascript', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Hold', assignedBy: 5 },
    { role: 'Accountant', skill: 'Tally, SAP', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Posted', assignedBy: 8 },
    { role: 'IT', skill: 'HTML, CSS, Javascript', salary: 25000, jobType: 'Full Time', desc: 'Full Time	', status: 'Draft', assignedBy: 0 },
    { role: 'Operator', skill: 'HTML, CSS, Javascript', salary: 15000, jobType: 'Full Time', desc: 'Full Time	', status: 'Completed', assignedBy: 1 },
    { role: 'HR', skill: 'Communication, Excel, Word', salary: 5000, jobType: 'Intern', desc: 'Intern	', status: 'Hold', assignedBy: 15 },
]

// const interviewModeOptions = [
//     { value: "online", label: "Online" },
//     { value: "offline", label: "Offline" },
//     { value: "hybrid", label: "Hybrid" },
// ];

const JobDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [openMenuIdx, setOpenMenuIdx] = useState<number | null>(null);
    const [openStatusIdx, setOpenStatusIdx] = useState<number | null>(null);
    const [openPostJob, setOpenPostJob] = useState<boolean>(false)
    const [value, setValue] = useState<string>('');
    const [experience, setExperience] = useState([
        { skill: null, expYears: "" },
    ]);
    const [interviewStructure, setInterviewStructure] = useState([
        { interviewMode: null }
    ])

    const toggleRowMenu = (idx: number) =>
        setOpenMenuIdx(prev => (prev === idx ? null : idx));

    const closeMenu = () => setOpenMenuIdx(null);

    // Status menu (new)
    const toggleStatusMenu = (idx: number) =>
        setOpenStatusIdx(prev => (prev === idx ? null : idx));

    const closeStatusMenu = () => setOpenStatusIdx(null);




    const togglePostJob = () => {
        setOpenPostJob(!openPostJob)
    }

    const handleAddExperience = () => {
        setExperience((prev) => [
            ...prev, {
                skill: null, expYears: ""
            }
        ])
    }
    const handleRemoveExperience = (index: any) => {
        setExperience((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAddInterviewMode = () => {
        setInterviewStructure((prev) => [
            ...prev, {
                interviewMode: null
            }
        ])
    }

    const handleRemoveInterviewMode = (index: any) => {
        setInterviewStructure((prev) => prev.filter((_, i) => i !== index));
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
                                                            // isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Role
                                                        </TableCell>
                                                        <TableCell
                                                            // isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Skill
                                                        </TableCell>
                                                        <TableCell
                                                            // isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Salary
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
                                                            Job Description
                                                        </TableCell>
                                                        <TableCell
                                                            // isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Status
                                                        </TableCell>
                                                        <TableCell
                                                            // isHeader
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
                                                    {tableData.map((order, idx) => (
                                                        <TableRow key={idx}>
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
                                                                <div className="relative inline-flex">

                                                                    <button
                                                                        type="button"
                                                                        onClick={() => toggleStatusMenu(idx)}
                                                                        className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"


                                                                    >
                                                                        {order.status}
                                                                    </button>
                                                                    {/* Status dropdown */}
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

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.assignedBy}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <div className="relative inline-flex">
                                                                    <button
                                                                        onClick={() => toggleRowMenu(idx)}
                                                                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300"
                                                                        aria-haspopup="menu"
                                                                        aria-expanded={openMenuIdx === idx}
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
                                                                        {/* <button
                                                                            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                                            onClick={() => { console.log('Edit Job', order); closeMenu(); }}
                                                                        >
                                                                            Edit Job
                                                                        </button>
                                                                        <button
                                                                            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                                            onClick={() => { console.log('Duplicate', order); closeMenu(); }}
                                                                        >
                                                                            Duplicate
                                                                        </button>

                                                                        <div className="my-2 h-px bg-gray-200 dark:bg-gray-800" />

                                                                        <button
                                                                            className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                                                            onClick={() => { console.log('Delete', order); closeMenu(); }}
                                                                        >
                                                                            Delete
                                                                        </button> */}
                                                                    </Dropdown>
                                                                </div>
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
                                    options={role}
                                    placeholder="Select an option"
                                // onChange={handleSelectChange}
                                // className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Skills</Label>
                                <Select
                                    isMulti
                                    options={skills}
                                    placeholder="Select an skills"
                                // onChange={handleSelectChange}
                                // className="dark:bg-dark-900"
                                />
                            </div>

                            <div>
                                <Label>Job Description</Label>
                                <ReactQuill theme="snow" value={value} onChange={setValue} />
                            </div>

                            <div>
                                <Label>Preferred Organization</Label>
                                <Select
                                    options={options}
                                    placeholder="Select an option"
                                // onChange={handleSelectChange}
                                // className="dark:bg-dark-900"
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

                            <div >
                                <div className="flex items-center justify-between mb-2">
                                    <Label>Min Experience (Skill-wise)</Label>

                                    <div className="flex items-center gap-2">
                                        <div
                                            onClick={handleAddExperience}
                                            className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center cursor-pointer"
                                            title="Add Experience"
                                        >
                                            <FaPlus size={10} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {experience.map((_, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 flex-nowrap overflow-hidden"
                                        >
                                            {/* Skill Select (grows & shrinks, starts ~260px) */}
                                            <div className="min-w-0 basis-[260px]">
                                                <Select
                                                    options={options}
                                                    placeholder="Select an option"
                                                // onChange={handleSelectChange}
                                                // className="dark:bg-dark-900"
                                                />
                                            </div>

                                            {/* Years Input (shrinks, starts ~140px, won't go below 96px) */}
                                            <div className="shrink basis-[140px] min-w-[96px]">
                                                <Input className="w-full" type="text" placeholder="Years (e.g., 2)" />
                                            </div>

                                            {/* Remove button (fixed) */}
                                            <div className="flex-none w-[28px] h-[28px] flex items-center justify-center">
                                                {experience.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveExperience(index)}
                                                        className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                                        title="Remove"
                                                    >
                                                        <FaMinus size={10} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>


                                    ))}
                                </div>
                            </div>


                            <div>
                                <Label>Interview Mode</Label>
                                <Select
                                    options={mode}
                                    placeholder="Select an option"
                                // onChange={handleSelectChange}
                                // className="dark:bg-dark-900"
                                />
                            </div>



                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <Label>Interview Round</Label>

                                    <button
                                        type="button"
                                        onClick={handleAddInterviewMode}
                                        className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                                        title="Add Interview Mode"
                                    >
                                        <FaPlus size={10} />
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {interviewStructure.map((_, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(240px,1fr)_40px]"
                                        >
                                            {/* Interview Mode Select */}
                                            <div>
                                                <Input type="text" id="input" />
                                            </div>

                                            {/* Remove */}
                                            <div className="flex items-center justify-center">
                                                {interviewStructure.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveInterviewMode(index)}
                                                        className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center"
                                                        title="Remove"
                                                    >
                                                        <FaMinus size={10} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

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