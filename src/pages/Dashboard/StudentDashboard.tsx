import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import Select from "react-select";
// import Input from "../../components/form/input/InputField";

import { FiSearch, FiChevronDown, FiX, FiEye } from "react-icons/fi";
import { FaUsers, FaComment, FaHandshake } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
// import { Modal } from '../../components/ui/modal';
import CommentModal from '../../components/customModal/commentModal/CommentModal';

const APPLY_OPTIONS = [
    "Apply",
    "Downloading Appointment",
    "Confirming Joining",
];

const tableData = [

    { id: 1, company: 'Miracle', jobTitle: 'Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
    { id: 2, company: 'Google', jobTitle: 'SDE', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Confirming Joining' },
    { id: 3, company: 'Meta', jobTitle: 'Frontend Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Downloading Appointment' },
    { id: 4, company: 'Amazon', jobTitle: 'Backend Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Confirming Joining' },
    { id: 5, company: 'Microsoft', jobTitle: 'Full Stack Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Downloading Appointment' },
    { id: 6, company: 'Apple', jobTitle: 'iOS Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Apply' },
    { id: 7, company: 'Netflix', jobTitle: 'Android Developer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Confirming Joining' },
    { id: 8, company: 'Tesla', jobTitle: 'Data Scientist', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Remote', detail: '', attachemnt: '', openTo: 'All', status: 'Pending', action: 'Downloading Appointment' },
    { id: 9, company: 'SpaceX', jobTitle: 'Machine Learning Engineer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Hybrid', detail: '', attachemnt: '', openTo: 'All', status: 'Rejected', action: 'Confirming Joining' },
    { id: 10, company: 'IBM', jobTitle: 'DevOps Engineer', skill: 'HTML, CSS, JS, React.js', lastdate: '20/02/2026', jobType: 'Onsite', detail: '', attachemnt: '', openTo: 'All', status: 'Selected', action: 'Apply' },
]

type JobsFilterProps = {
    countries?: { label: string; value: string }[];
    defaultCountry?: string;
    initialQuery?: string;
    onSearch: (params: { country: string; query: string }) => void;
};
type Comment = {
    id: string;
    author: string;
    text: string;
    createdAt: string;
    replies?: { id: string; author: string; text: string; createdAt: string }[];
};


const DEFAULT_COUNTRIES = [
    { label: "Company Name", value: "1" },
    { label: "Job Type", value: "2" },
    { label: "Skill", value: "3" },
    { label: "Job Title", value: "4" },
];

const JobsFilter: React.FC<JobsFilterProps> = ({
    countries = DEFAULT_COUNTRIES,
    defaultCountry = "1",
    initialQuery = "",
    onSearch,
}) => {
    const [country, setCountry] = useState(defaultCountry);
    const [query, setQuery] = useState(initialQuery);

    const submit = (e?: React.FormEvent) => {
        e?.preventDefault();
        onSearch({ country, query: query.trim() });
    };

    const clearQuery = () => setQuery("");

    return (
        <form
            onSubmit={submit}
            className="w-full rounded-md border border-gray-300 bg-white p-2 sm:p-3"
            role="search"
            aria-label="Job search"
        >
            {/* container */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {/* Country select (pill-like) */}
                <div className="relative flex-shrink-0 sm:w-56">
                    {/* <FiMapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" /> */}
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 text-sm text-gray-800 outline-none ring-0 focus:border-gray-400"
                    >
                        {countries.map((c) => (
                            <option key={c.value} value={c.value}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* Search input + button */}
                <div className="flex minw-[480px] items-stretch">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={`Search  "By Name, Skill, Job Title"`}
                            className="h-11 w-full rounded-l-md border border-gray-300 bg-white px-4 pr-10 text-sm text-gray-800 outline-none ring-0 focus:border-gray-400"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={clearQuery}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:bg-gray-100"
                                aria-label="Clear search"
                                title="Clear"
                            >
                                <FiX />
                            </button>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="h-11 shrink-0 rounded-r-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                        aria-label="Search"
                        title="Search"
                    >
                        <div className="flex items-center gap-2">
                            <FiSearch size={20} />
                            {/* <span className="hidden sm:inline">Search</span> */}
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
};

const StudentDashboard: React.FC = () => {
    const [rows, setRows] = useState(tableData);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState<number | null>(null);
    const [commentLists, setCommentLists] = useState<Comment[][]>([])

    const toggleCommentModal = (id: number) => {
        setIsCommentModalOpen((prev) => prev === id ? null : id);
    }

    // Add top-level comment
    const onSendComment = (text: string) => {
        if (isCommentModalOpen === null) return;
        setCommentLists(prev => {
            const updated = [...prev];
            if (!updated[isCommentModalOpen]) updated[isCommentModalOpen] = [];
            updated[isCommentModalOpen] = [
                ...updated[isCommentModalOpen],
                {
                    id: crypto.randomUUID(),
                    author: "You",
                    text,
                    createdAt: new Date().toLocaleString(),
                }
            ];
            return updated;
        });
    };

    // Recursively add reply to correct comment (by id)
    const addReplyRecursively = (comments: Comment[], commentId: string, text: string): Comment[] => {
        return comments.map(c => {
            if (c.id === commentId) {
                console.log('first')
                return {
                    ...c,
                    replies: [
                        ...(c.replies || []),
                        {
                            id: crypto.randomUUID(),
                            author: "reply by TAHA",
                            text,
                            createdAt: new Date().toLocaleString(),
                        }
                    ]
                };
            } else if (c.replies) {
                console.log('second')
                return {
                    ...c,
                    replies: addReplyRecursively(c.replies, commentId, text)
                };
            }
            console.log('third')
            return c;
        });
    };

    const onSendReply = (commentId: string, text: string) => {
        if (isCommentModalOpen === null) return;
        setCommentLists(prev => {
            const updated = [...prev];
            if (!updated[isCommentModalOpen]) updated[isCommentModalOpen] = [];
            updated[isCommentModalOpen] = addReplyRecursively(updated[isCommentModalOpen], commentId, text);
            console.log(updated[isCommentModalOpen])
            return updated;
        });
    };

    // Recursively delete comment or reply by id
    const deleteRecursively = (comments: Comment[], commentId: string): Comment[] => (
        comments
            .filter(c => c.id !== commentId)
            .map(c => ({
                ...c,
                replies: c.replies ? deleteRecursively(c.replies, commentId) : []
            }))
    );

    const onDeleteCommentById = (commentId: string) => {
        if (isCommentModalOpen === null) return;
        setCommentLists(prev => {
            const updated = [...prev];
            updated[isCommentModalOpen] = deleteRecursively(updated[isCommentModalOpen] || [], commentId);
            return updated;
        });
    };







    // Update a specific row's status
    const handleApplyChange = (rowIndex: number, newStatus: string) => {
        setRows(prev => prev.map((r, i) => (i === rowIndex ? { ...r, action: newStatus } : r)));
    };

    // const toggleCommentModal = (idx: number) => {
    //     setOpenCommentModal(prev => (prev === idx ? null : idx));
    // }
    return (
        <>
            <div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-2'>
                    <div
                        // onClick={toggleTotalStudent}
                        className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                            <FaUsers className="text-gray-800 size-6 dark:text-white/90" />
                        </div>
                        <div className="mt-5">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Total Jobs Applied
                            </span><br />
                            <span className="mt-2 font-bold text-gray-800 dark:text-white/90">
                                30
                            </span>
                        </div>
                    </div>

                    {/* 2. Selected & Rejected */}
                    <div
                        //  onClick={toggleSelectionStatus} 
                        className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/30">
                            <MdWorkOutline className="text-blue-600 size-6 dark:text-blue-400" />
                        </div>
                        <div className="mt-5">

                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                You are best suits for <strong className="text-[1rem] font-bold text-blue-600 dark:text-blue-400">
                                    30
                                </strong> open vacancies
                            </span>

                        </div>

                    </div>

                    {/* 3. Upcoming Interviews */}
                    <div
                        // onClick={toggleInterviewList} 
                        className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl dark:bg-red-900/30">
                            <FaHandshake className="text-red-600 size-6 dark:text-red-400" />
                        </div>
                        <div className="mt-5">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Job ofered by <strong className="text-[1rem] mt-2 font-bold text-red-600 dark:text-red-400">2</strong> compnaies
                            </span><br />
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Appointment confirmation pending <strong className="text-[1rem] mt-2 font-bold text-red-600 dark:text-red-400">2</strong>
                            </span>
                        </div>
                    </div>
                </div>
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

                                <JobsFilter
                                    onSearch={({ country, query }) => {
                                        // call your API or set filters in state
                                        // e.g., fetchJobs({ country, q: query })
                                        console.log({ country, query });
                                    }}
                                />
                                {/* TABLE — desktop only (lg ≥ 1024px) */}
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
                                                        <TableCell
                                                            isHeader
                                                            className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                        >
                                                            Comment
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
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <div className="relative inline-flex">

                                                                    <button
                                                                        type="button"
                                                                        // onClick={() => toggleStatusMenu(idx)}
                                                                        className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"


                                                                    >
                                                                        {order.status}
                                                                    </button>


                                                                </div>

                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {/* {order.jobType} */}
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                                >
                                                                    <FiEye className="text-sm" />

                                                                </button>
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {/* {order.detail} */}
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                                >
                                                                    <FiEye className="text-sm" />

                                                                </button>
                                                            </TableCell>
                                                            {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            {order.attachemnt}
                                                        </TableCell> */}
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.openTo}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                {order.status}
                                                            </TableCell>
                                                            <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                                <div className="relative inline-flex">
                                                                    <select
                                                                        value={rows[idx].action}
                                                                        onChange={(e) => handleApplyChange(idx, e.target.value)}
                                                                        className="appearance-none px-3 py-1 pr-8 rounded-full border text-xs font-medium
                                                                                                      bg-white text-gray-700 hover:opacity-90 transition
                                                                                                      focus:outline-none focus:ring focus:ring-brand-500/10
                                                                                                      dark:bg-gray-dark dark:text-gray-300 dark:border-gray-800"
                                                                    >
                                                                        {APPLY_OPTIONS.map((opt) => (
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

                                                                <button
                                                                    type="button"
                                                                    onClick={() => toggleCommentModal(idx)}
                                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                                >
                                                                    <FaComment className="text-sm" />

                                                                </button>
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
                                {/* CARDS — mobile + md (sm & md only) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                                    {tableData.map((row, idx) => (
                                        <article
                                            key={idx}
                                            className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]"
                                        >
                                            {/* top line */}
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                                        {idx + 1}. {row.company}
                                                    </h4>
                                                    <p className="text-xs text-gray-500">{row.jobTitle}</p>
                                                </div>

                                                {/* example action spot */}
                                                {/* put your three-dots/dropdown here if needed */}
                                            </div>

                                            {/* details */}
                                            <div className="mt-3 space-y-1 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Skills</span>
                                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                                        {row.skill}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Last Date</span>
                                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                                        {row.lastdate}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Job Type</span>
                                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                                        {row.jobType}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Open To</span>
                                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                                        {row.openTo}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Status</span>
                                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                                        {row.status}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* quick actions */}
                                            <div className="mt-3 grid grid-cols-2 gap-2">
                                                <button className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700">
                                                    View Full Detail
                                                </button>
                                                <button className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700">
                                                    View Attachments
                                                </button>
                                                <button onClick={() => toggleCommentModal(idx)} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700">
                                                    Comment
                                                </button>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <BasicTableOne /> */}


                    {/* </ComponentCard> */}
                </div>
            </div>
            {/* Comment Modal */}
            <CommentModal
                isOpen={isCommentModalOpen !== null}
                onClose={() => setIsCommentModalOpen(null)}
                title={`Comments for Job ${isCommentModalOpen !== null ? tableData[isCommentModalOpen].jobTitle : ''}`}
                commentLists={isCommentModalOpen !== null ? commentLists[isCommentModalOpen] || [] : []}
                onSendComment={onSendComment}
                onSendReply={onSendReply}
                onDeleteCommentById={onDeleteCommentById}
            />
        </>

    )
}

export default StudentDashboard