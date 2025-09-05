import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// import { BsThreeDotsVertical } from "react-icons/bs";
import Select from "react-select";
import Input from "../../components/form/input/InputField";
import { FiSearch, FiMapPin, FiChevronDown, FiX } from "react-icons/fi";


const role = [
    { value: "0", label: "Frontend Developer" },
    { value: "1", label: "Backend Developer" },
    { value: "2", label: "QA tester" },
]

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

type JobsFilterProps = {
    countries?: { label: string; value: string }[];
    defaultCountry?: string;
    initialQuery?: string;
    onSearch: (params: { country: string; query: string }) => void;
};

const DEFAULT_COUNTRIES = [
    { label: "India", value: "IN" },
    { label: "USA", value: "US" },
    { label: "UK", value: "GB" },
    { label: "Canada", value: "CA" },
];


const JobsFilter: React.FC<JobsFilterProps> = ({
    countries = DEFAULT_COUNTRIES,
    defaultCountry = "IN",
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
                    <FiMapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 pl-9 pr-9 text-sm text-gray-800 outline-none ring-0 focus:border-gray-400"
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
                            placeholder={`Search  "Properties"`}
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
    )
}

export default StudentDashboard