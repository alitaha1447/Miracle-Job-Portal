import React, { useState, useMemo } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// import { BsThreeDotsVertical } from "react-icons/bs";
import Select, { MultiValue } from "react-select";
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

type ColumnField = {
    value: number;
    label: string;
}


const DEFAULT_COUNTRIES = [
    { label: "Company Name", value: "1" },
    { label: "Job Type", value: "2" },
    { label: "Skill", value: "3" },
    { label: "Job Title", value: "4" },
];

const columnFields: ColumnField[] = [
    { value: 0, label: 'S.No.' },
    { value: 1, label: 'Company name' },
    { value: 2, label: 'Job Title' },
    { value: 3, label: 'Skill Required' },
    { value: 4, label: 'Last Submission Date' },
    { value: 5, label: 'Job Type' },
    { value: 6, label: 'View Full Detail' },
    { value: 7, label: 'View Attachments' },
    { value: 8, label: 'Open To' },
    { value: 9, label: 'Status' },
    { value: 10, label: 'Action' },
    { value: 11, label: 'Comment' },
]

// your row type
type Row = {
    id: number;
    company: string;
    jobTitle: string;
    skill: string;
    lastdate: string;
    status: string;     // you also use this as Job Type text in your button
    openTo: string;
    // add any others you actually use
};

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
    const [selectedcolumnFields, setSelectedcolumnFields] = useState<MultiValue<ColumnField>>(columnFields.slice(0, 4));
    const [count, setCount] = useState(0); // Dummy state to test
    console.log('type of --------------');

    console.log(selectedcolumnFields);
    console.log('type of --------------');

    /** 1) Column map: how to render each column */
    const columnMap = useMemo(() => ({
        0: { header: "S.No.", render: (_r: Row, idx: number) => idx + 1 },
        1: { header: "Company name", render: (r: Row) => r.company },
        2: { header: "Job Title", render: (r: Row) => r.jobTitle },
        3: { header: "Skill Required", render: (r: Row) => r.skill },
        4: { header: "Last Submission Date", render: (r: Row) => r.lastdate },
        5: {
            header: "Job Type", render: (r: Row) => (
                <div className="relative inline-flex">
                    <button type="button" className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition">
                        {r.status}
                    </button>
                </div>
            )
        },
        6: {
            header: "View Full Detail", render: (_r: Row) => (
                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700">
                    <FiEye className="text-sm" />
                </button>
            )
        },
        7: {
            header: "View Attachments", render: (_r: Row) => (
                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700">
                    <FiEye className="text-sm" />
                </button>
            )
        },
        8: { header: "Open To", render: (r: Row) => r.openTo },
        9: { header: "Status", render: (r: Row) => r.status },
        10: {
            header: "Action", render: (_r: Row, idx: number) => (
                <div className="relative inline-flex">
                    <select
                        value={rows[idx].action}
                        onChange={(e) => handleApplyChange(idx, e.target.value)}
                        className="appearance-none px-3 py-1 pr-8 rounded-full border text-xs font-medium bg-white text-gray-700
                       hover:opacity-90 transition focus:outline-none focus:ring focus:ring-brand-500/10
                       dark:bg-gray-dark dark:text-gray-300 dark:border-gray-800">
                        {APPLY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.185l3.71-2.955a.75.75 0 1 1 .94 1.17l-4.24 3.38a.75.75 0 0 1-.94 0l-4.24-3.38a.75.75 0 0 1 .02-1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            )
        },
        11: {
            header: "Comment", render: (_r: Row, idx: number) => (
                <button
                    type="button"
                    onClick={() => toggleCommentModal(idx)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700">
                    <FaComment className="text-sm" />
                </button>
            )
        },
    } as const), [rows]);

    // const columnMap = {
    //     0: { header: "S.No.", render: (_r: any, idx: number) => idx + 1 },
    //     1: { header: "Company name", render: (r: any) => r.company },
    //     2: { header: "Job Title", render: (r: any) => r.jobTitle },
    //     3: { header: "Skill Required", render: (r: any) => r.skill },
    //     4: { header: "Last Submission Date", render: (r: any) => r.lastdate },
    //     5: { header: "Job Type", render: (r: any) => r.jobType },
    //     6: { header: "View Full Detail", render: () => <button>View</button> },
    //     7: { header: "View Attachments", render: () => <button>View</button> },
    //     8: { header: "Open To", render: (r: any) => r.openTo },
    //     9: { header: "Status", render: (r: any) => r.status },
    //     10: { header: "Action", render: (r: any) => r.action },
    //     11: { header: "Comment", render: (r: any) => r.comment },
    // };
    /** 2) Filter by selected values */
    const selectedValues = useMemo(
        () => selectedcolumnFields.map(s => s.value),
        [selectedcolumnFields]
    );
    // const selectedValues = selectedcolumnFields.map((s: any) => s.value);


    /** 3) Visible columns in order */
    const visibleCols = useMemo(() => {
        // console.log("Recomputing visibleCols with useMemo...");

        return columnFields
            .filter(cf => selectedValues.includes(cf.value))
            .map(cf => ({
                key: cf.value,
                ...columnMap[cf.value as keyof typeof columnMap],
            }));

    }, [selectedValues, columnMap]);

    // const visibleCols = columnFields.filter((cf) => selectedValues.includes(cf.value));

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
                {
                    id: crypto.randomUUID(),
                    author: "You",
                    text,
                    createdAt: new Date().toLocaleString(),
                },
                ...updated[isCommentModalOpen],
            ];
            return updated;
        });
    };

    // Recursively add reply to correct comment (by id)
    const addReplyRecursively = (comments: Comment[], commentId: string, text: string): Comment[] => {
        return comments.map(c => {
            if (c.id === commentId) {

                return {
                    ...c,
                    replies: [
                        {
                            id: crypto.randomUUID(),
                            author: "reply by TAHA",
                            text,
                            createdAt: new Date().toLocaleString(),
                        },
                        ...(c.replies || []),
                    ]
                };
            } else if (c.replies) {

                return {
                    ...c,
                    replies: addReplyRecursively(c.replies, commentId, text),
                };
            }

            return c;
        });
    };

    const onSendReply = (commentId: string, text: string) => {
        if (isCommentModalOpen === null) return;
        setCommentLists(prev => {
            const updated = [...prev];
            if (!updated[isCommentModalOpen]) updated[isCommentModalOpen] = [];
            updated[isCommentModalOpen] = addReplyRecursively(updated[isCommentModalOpen], commentId, text);
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
                                <div className='hidden lg:block'>
                                    <Select
                                        isMulti
                                        options={columnFields}
                                        value={selectedcolumnFields}
                                        onChange={(selected: MultiValue<ColumnField>) => {
                                            setSelectedcolumnFields(selected);
                                        }}
                                        placeholder="Select fields"
                                        defaultValue={columnFields.slice(0, 4)} // 👈 first 4 selected by default

                                    />
                                </div>
                                {/* Dummy Count Increment Button */}
                                <button onClick={() => setCount(count + 1)}>
                                    Increment Count (Current Count: {count})
                                </button>
                                {/* TABLE — desktop only (lg ≥ 1024px) */}
                                <div className="hidden lg:block overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                                    <div className="max-w-full overflow-x-auto">
                                        <div
                                            className="min-w-[1024px]"
                                        >

                                            <Table className="table-auto">

                                                <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                                    <TableRow>
                                                        {visibleCols.map(col => (
                                                            <TableCell key={col.key} className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                                {col.header}
                                                            </TableCell>
                                                        ))}
                                                        {/* {visibleCols.map((col) => (
                                                            <TableCell key={col.value}>
                                                                {columnMap[col.value]?.header}
                                                            </TableCell>
                                                        ))} */}

                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                                    {tableData.map((row, idx) => (
                                                        <TableRow key={row.id ?? idx}>
                                                            {visibleCols.map(col => (
                                                                <TableCell key={col.key} className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                                    {col.render(row, idx)}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                    {/* {tableData.map((row, idx) => (
                                                        <TableRow key={idx}>
                                                            {visibleCols.map((col) => (
                                                                <TableCell key={col.value}>
                                                                    {columnMap[col.value]?.render(row, idx)}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))} */}
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

                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                                        {idx + 1}. {row.company}
                                                    </h4>
                                                    <p className="text-xs text-gray-500">{row.jobTitle}</p>
                                                </div>


                                            </div>


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