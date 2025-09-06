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
// import { Dropdown } from '../../components/ui/dropdown/Dropdown';

// interface Item {
//     name: string;
//     status: string;
// }

const STATUS_OPTIONS = [
    "Hold",
    "Posted",
    "Draft",
    "Completed",
    "Cancelled",
];



// const options = [
//     { value: "marketing", label: "Marketing" },
//     { value: "template", label: "Template" },
//     { value: "development", label: "Development" },

// ];

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

const preferredOrganization = [
    { value: "0", label: "LNCT" },
    { value: "1", label: "TIT" },
    { value: "2", label: "Bansal" },
    { value: "3", label: "TRUBA" },
    { value: "4", label: "All Saints" },
    { value: "5", label: "Sagar" },
    { value: "6", label: "MIRACLE" },
    { value: "7", label: "Sagar" },
    { value: "8", label: "Sagar" },
];
const mode = [
    { value: "0", label: "Online" },
    { value: "1", label: "Offline" },
]
const jobMode = [
    { value: "0", label: "Onsite" },
    { value: "1", label: "Hybrid" },
    { value: "2", label: "WFH" },
]


const tableData = [

    { role: 'Developer', skill: 'HTML, CSS, Javascript', qualification: 'BE', salary: 25000, age: '20 - 29', jobType: 'Full Time', desc: 'Full Time	', status: 'Hold', date: '20/20/2025', assignedBy: 5 },
    { role: 'Accountant', skill: 'Tally, SAP', salary: 25000, age: '20 - 29', jobType: 'Full Time', desc: 'Full Time	', status: 'Posted', assignedBy: 8 },
    { role: 'IT', skill: 'HTML, CSS, Javascript', salary: 25000, age: '20 - 29', jobType: 'Full Time', desc: 'Full Time	', status: 'Draft', assignedBy: 0 },
    { role: 'Operator', skill: 'HTML, CSS, Javascript', salary: 15000, age: '20 - 29', jobType: 'Full Time', desc: 'Full Time	', status: 'Completed', assignedBy: 1 },
    { role: 'HR', skill: 'Communication, Excel, Word', salary: 5000, age: '20 - 29', jobType: 'Intern', desc: 'Intern	', status: 'Hold', assignedBy: 15 },
]

// const courseFeesOptions = [
//     { value: "0", label: "Per Month" },
//     { value: "1", label: "Per Annum" },
//     { value: "2", label: "One Time" },
// ]

// const interviewModeOptions = [
//     { value: "online", label: "Online" },
//     { value: "offline", label: "Offline" },
//     { value: "hybrid", label: "Hybrid" },
// ];

const JobDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [openMenuIdx, setOpenMenuIdx] = useState<number | null>(null);
    // const [openStatusIdx, setOpenStatusIdx] = useState<number | null>(null);
    const [openPostJob, setOpenPostJob] = useState<boolean>(false)
    const [value, setValue] = useState<string>('');

    // Min Experience (Skill-wise)
    const [experience, setExperience] = useState([
        { skill: null, expYears: "" },
    ]);

    const [interviewStructure, setInterviewStructure] = useState([
        { interviewMode: null }
    ])

    const [rows, setRows] = useState(tableData);


    // Update a specific row's status
    const handleStatusChange = (rowIndex: number, newStatus: string) => {
        setRows(prev => prev.map((r, i) => (i === rowIndex ? { ...r, status: newStatus } : r)));
    };




    const toggleRowMenu = (idx: number) =>
        setOpenMenuIdx(prev => (prev === idx ? null : idx));

    const closeMenu = () => setOpenMenuIdx(null);

    // Status menu (new)
    // const toggleStatusMenu = (idx: number) =>
    //     setOpenStatusIdx(prev => (prev === idx ? null : idx));

    // const closeStatusMenu = () => setOpenStatusIdx(null);




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
                        <div className="hidden lg:block p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
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
                                                            Min Qualification
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
                                                            Min /Max age
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
                                                            Last Submission Date
                                                        </TableCell>
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Total Applicant

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

                                                                {order.qualification}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                                {order.salary}

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                                {order.age}

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.jobType}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <button
                                                                    // type="button"

                                                                    className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                                >
                                                                    {order.desc}
                                                                </button>
                                                            </TableCell>
                                                            {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <div className="relative inline-flex">

                                                                    <button
                                                                        // type="button"
                                                                        onClick={() => toggleStatusMenu(idx)}
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
                                                                            // type="button"
                                                                            className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                                            Update Status
                                                                        </button>

                                                                    </Dropdown>
                                                                </div>

                                                            </TableCell> */}
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <div className="relative inline-flex">
                                                                    <select
                                                                        value={rows[idx].status}
                                                                        onChange={(e) => handleStatusChange(idx, e.target.value)}
                                                                        className="appearance-none px-3 py-1 pr-8 rounded-full border text-xs font-medium
                                               bg-white text-gray-700 hover:opacity-90 transition
                                               focus:outline-none focus:ring focus:ring-brand-500/10
                                               dark:bg-gray-dark dark:text-gray-300 dark:border-gray-800"
                                                                    >
                                                                        {STATUS_OPTIONS.map((opt) => (
                                                                            <option
                                                                                key={opt}
                                                                                value={opt}
                                                                                className="text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                                                                            >
                                                                                {opt}
                                                                            </option>
                                                                        ))}
                                                                    </select>

                                                                    {/* Chevron */}
                                                                    <svg
                                                                        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.185l3.71-2.955a.75.75 0 1 1 .94 1.17l-4.24 3.38a.75.75 0 0 1-.94 0l-4.24-3.38a.75.75 0 0 1 .02-1.06z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </TableCell>

                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.date}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <button
                                                                    className="text-center text-[black] px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                                    onClick={() => {
                                                                        navigate("/participants-list");
                                                                        closeMenu();
                                                                    }}
                                                                >
                                                                    {order.assignedBy}
                                                                </button>

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
                                                                    {openMenuIdx === idx && (
                                                                        <div
                                                                            className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                                            onClick={closeMenu}
                                                                        >
                                                                            <button
                                                                                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                                                onClick={() => {
                                                                                    navigate("/participants-list");
                                                                                    closeMenu();
                                                                                }}
                                                                            >
                                                                                View Participants
                                                                            </button>
                                                                        </div>
                                                                    )}
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
                        {/*  */}
                        {/* Mobile Card View */}
                        <div className="lg:hidden overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            {tableData.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex flex-col gap-3"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            {/* <Checkbox /> */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                                    {index + 1}. {item.role}
                                                </h4>
                                                <select
                                                    value={rows[index].status}
                                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                                    className="appearance-none px-3 py-1 pr-8 rounded-full border text-xs font-medium
                                               bg-white text-gray-700 hover:opacity-90 transition
                                               focus:outline-none focus:ring focus:ring-brand-500/10
                                               dark:bg-gray-dark dark:text-gray-300 dark:border-gray-800"
                                                >
                                                    {STATUS_OPTIONS.map((opt) => (
                                                        <option
                                                            key={opt}
                                                            value={opt}
                                                            className="text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                                                        >
                                                            {opt}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="relative inline-flex">
                                            <button
                                                onClick={() => toggleRowMenu(index)}
                                                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300"
                                                aria-haspopup="menu"
                                                aria-expanded={openMenuIdx === index}
                                                style={{ lineHeight: 0 }}
                                            >
                                                <BsThreeDotsVertical size={20} />
                                                <span className="sr-only">Open actions</span>
                                            </button>
                                            {openMenuIdx === index && (
                                                <div
                                                    className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                    onClick={closeMenu}
                                                >
                                                    <button
                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                        onClick={() => {
                                                            navigate("/participants-list");
                                                            closeMenu();
                                                        }}
                                                    >
                                                        View Participants
                                                    </button>
                                                </div>
                                            )}


                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Skills</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.skill}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Qualification</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.qualification || "N/A"}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Salary</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">₹{item.salary}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Age</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.age}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Job Type</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.jobType}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Last Date</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.date}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Applicants</span>
                                            <button
                                                className="text-center text-[black] px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800"
                                                onClick={() => {
                                                    navigate("/participants-list");
                                                    closeMenu();
                                                }}
                                            >
                                                {item.assignedBy}
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Job Description</span>
                                            <button
                                                type="button"
                                                // onClick={() => toggleStatusMenu(index)}
                                                className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                            >
                                                {item.desc}
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="pt-2 flex flex-col gap-2">
                                        <div className="relative inline-flex self-start">
                                            <button
                                                type="button"
                                                onClick={() => toggleStatusMenu(index)}
                                                className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                            >
                                                {item.status}
                                            </button>
                                          
                                            {openStatusIdx === index && (
                                                <div
                                                    className="absolute left-0  top-full z-50 mt-2 flex w-48 flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleStatusMenu(index)}

                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                        Update Status
                                                    </button>

                                                </div>
                                            )}
                                           
                                        </div>

                                     
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
            <Modal isOpen={openPostJob} onClose={togglePostJob} className="max-w-6xl ">
                <div className="relative w-full h-[85vh] bg-white rounded-3xl dark:bg-gray-900 flex flex-col">

                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Post Job
                        </h4>
                    </div>

                    <form className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Role</Label>
                                <Select
                                    options={role}
                                    placeholder="Select an option"

                                />
                            </div>

                            <div>
                                <Label>Skills</Label>
                                <Select
                                    isMulti
                                    options={skills}
                                    placeholder="Select an skills"

                                />
                            </div>

                            <div className='lg:col-span-2'>
                                <Label>Job Description</Label>
                                <ReactQuill theme="snow" value={value} onChange={setValue} />
                            </div>

                            <div>
                                <Label>Preferred Organization</Label>
                                <Select
                                    options={preferredOrganization}
                                    placeholder="Select an option"
                                />
                            </div>

                            <div>
                                <Label>Salary Range</Label>
                                <div className="mt-1 flex items-center gap-3">

                                    <Input
                                        type="number"
                                        placeholder="25,000"
                                        className="flex-1"
                                    />
                                    <span className="text-gray-400 dark:text-gray-500">to</span>
                                    <Input
                                        type="number"
                                        placeholder="55,000"

                                        className="flex-1"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label>Interview Mode</Label>
                                <Select
                                    options={mode}
                                    placeholder="Select an option"

                                />
                            </div>
                            <div>
                                <Label>Job Mode</Label>
                                <Select
                                    options={jobMode}
                                    placeholder="Select an option"

                                />
                            </div>


                            <div>
                                <Label>Total Marks</Label>
                                <Input type="number" id="input" />
                            </div>

                            <div className='lg:col-span-2'>
                                <div className="flex items-center gap-5 mb-2">
                                    <Label>Min Experience (Skill-wise)</Label>

                                    <div className="flex items-center gap-2">
                                        <div
                                            onClick={() => {
                                                handleAddExperience();
                                            }}
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
                                            className="flex items-center gap-3 flex-nowrap"
                                        >

                                            <div className="min-w-0 basis-[260px]">
                                                <Select
                                                    options={skills}
                                                    placeholder="Select an option"

                                                />
                                            </div>

                                            <div className="shrink basis-[140px] min-w-[96px]">
                                                <Input className="w-full" type="number" placeholder="Years (e.g., 2)" />
                                            </div>


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



                            <div className='lg:col-span-2'>
                                <div className="flex items-center gap-5 mb-2">
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
                                            className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(240px,420px)_40px]"
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


                        </div>
                    </form>

                    {/* Footer (fixed) */}
                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                        <div className="flex items-center gap-3 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={togglePostJob}>
                                Close
                            </Button>
                            <Button size="sm" onClick={togglePostJob}>Save Job</Button>
                        </div>
                    </div>
                </div>
            </Modal>

        </>

    )
}

export default JobDashboard