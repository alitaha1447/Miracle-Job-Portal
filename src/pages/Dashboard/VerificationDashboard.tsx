import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Select, { SingleValue } from "react-select";

type Row = {
    id: number;
    name: string;
    mobile: string;
    email: string;
    status: string; // stores the LABEL text
};

const initialRows: Row[] = [
    { id: 0, name: "Prince Jain", mobile: "9981341559", email: "p@gmail.com", status: "Pending for verification" },
    { id: 1, name: "Kuldeep Mishra", mobile: "9981341559", email: "p@gmail.com", status: "Verified" },
    { id: 2, name: "Joney", mobile: "9981341559", email: "p@gmail.com", status: "Verification failed" },
    { id: 3, name: "Jatin", mobile: "9981341559", email: "p@gmail.com", status: "Verification in Progress" },
];

const STATUS_OPTIONS = [
    { value: "0", label: "Pending for verification" },
    { value: "1", label: "Verified" },
    { value: "2", label: "Verification failed" }, // fixed typo
    { value: "3", label: "Verification in Progress" },
];

type StatusOption = { value: string; label: string };



const VerificationDashboard: React.FC = () => {


    const [rows, setRows] = useState<Row[]>(initialRows);
    // const [selectedStatus, setselectedStatus] = useState<StatusOption | null>(null);



    const handleStatusChange = (index: number, selected: SingleValue<StatusOption>) => {

        if (!selected) return;

        setRows(prev =>
            prev.map((r, i) => (i === index ? { ...r, status: selected.label } : r))
        );
        // setselectedStatus(selected)
    };

    return (
        <div>

            <div className="space-y-6">
                <div
                    className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
                >
                    {/* Card Header */}
                    <div className="px-6 py-5 flex items-center justify-between">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            Jobs List
                        </h3>
                        {/* <button
                            onClick={togglePostJob}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                            Add New Job
                        </button> */}

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
                                                        Mobile No.
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        Email
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        View Eduacational Details
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        View Certifications
                                                    </TableCell>
                                                    <TableCell
                                                        isHeader
                                                        className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                    >
                                                        View Experience
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
                                                {rows.map((row, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {row.id}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">

                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {row.mobile}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {row.email}

                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            <button type="button"
                                                                className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                            >
                                                                {'Educational Details'}
                                                            </button>
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <button type="button"
                                                                className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                            >
                                                                {'Certifications'}
                                                            </button>
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <button type="button"
                                                                className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                            >
                                                                {'Experiences'}
                                                            </button>
                                                        </TableCell>

                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <div className="relative inline-flex">
                                                                <Select
                                                                    options={STATUS_OPTIONS}
                                                                    value={STATUS_OPTIONS.find(o => o.label === row.status) || null}
                                                                    onChange={(opt) => handleStatusChange(idx, opt)}
                                                                    placeholder="Select status"
                                                                    isSearchable={false}
                                                                    menuPortalTarget={document.body}
                                                                    menuPosition="fixed"
                                                                    styles={{
                                                                        // menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                                        control: base => ({
                                                                            ...base,
                                                                            minHeight: 28,   // smaller control
                                                                            height: 28,
                                                                            borderRadius: 9999,
                                                                            fontSize: 12,
                                                                            width: 180,
                                                                        }),
                                                                        // valueContainer: base => ({
                                                                        //     ...base,
                                                                        //     paddingTop: 0,
                                                                        //     paddingBottom: 0,
                                                                        //     paddingLeft: 8,
                                                                        //     paddingRight: 8,
                                                                        // }),
                                                                        // indicatorsContainer: base => ({
                                                                        //     ...base,
                                                                        //     height: 28,
                                                                        // }),
                                                                        // menu: base => ({
                                                                        //     ...base,
                                                                        //     width: 180,
                                                                        //     fontSize: 12,        // smaller text
                                                                        //     borderRadius: 8,
                                                                        //     marginTop: 2,
                                                                        // }),
                                                                        option: (base, state) => ({
                                                                            ...base,
                                                                            fontSize: 12,        // smaller font
                                                                            padding: "4px 8px",  // tighter padding
                                                                            cursor: "pointer",
                                                                            backgroundColor: state.isSelected
                                                                                ? "#2563eb"  // your theme blue
                                                                                : state.isFocused
                                                                                    ? "#e5e7eb"  // gray-200 on hover
                                                                                    : "white",
                                                                            color: state.isSelected ? "white" : "#374151", // dark text
                                                                        }),
                                                                        dropdownIndicator: base => ({
                                                                            ...base,
                                                                            padding: 2,
                                                                        }),
                                                                        clearIndicator: base => ({
                                                                            ...base,
                                                                            padding: 2,
                                                                        }),
                                                                    }}
                                                                />

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
                        {rows.map((row, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex flex-col gap-3"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                                {index + 1}. {row.id}
                                            </h4>
                                            <Select
                                                options={STATUS_OPTIONS}
                                                value={STATUS_OPTIONS.find(o => o.label === row.status) || null}
                                                onChange={(opt) => handleStatusChange(index, opt)}
                                                placeholder="Select status"
                                                isSearchable={false}
                                                menuPortalTarget={document.body}
                                                menuPosition="fixed"
                                                styles={{
                                                    // menuPortal: base => ({ ...base, zIndex: 9999 }),
                                                    control: base => ({
                                                        ...base,
                                                        minHeight: 28,   // smaller control
                                                        height: 28,
                                                        borderRadius: 9999,
                                                        fontSize: 12,
                                                        width: 180,
                                                    }),
                                                    // valueContainer: base => ({
                                                    //     ...base,
                                                    //     paddingTop: 0,
                                                    //     paddingBottom: 0,
                                                    //     paddingLeft: 8,
                                                    //     paddingRight: 8,
                                                    // }),
                                                    // indicatorsContainer: base => ({
                                                    //     ...base,
                                                    //     height: 28,
                                                    // }),
                                                    // menu: base => ({
                                                    //     ...base,
                                                    //     width: 180,
                                                    //     fontSize: 12,        // smaller text
                                                    //     borderRadius: 8,
                                                    //     marginTop: 2,
                                                    // }),
                                                    option: (base, state) => ({
                                                        ...base,
                                                        fontSize: 12,        // smaller font
                                                        padding: "4px 8px",  // tighter padding
                                                        cursor: "pointer",
                                                        backgroundColor: state.isSelected
                                                            ? "#2563eb"  // your theme blue
                                                            : state.isFocused
                                                                ? "#e5e7eb"  // gray-200 on hover
                                                                : "white",
                                                        color: state.isSelected ? "white" : "#374151", // dark text
                                                    }),
                                                    dropdownIndicator: base => ({
                                                        ...base,
                                                        padding: 2,
                                                    }),
                                                    clearIndicator: base => ({
                                                        ...base,
                                                        padding: 2,
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>


                                </div>

                                <div className="grid grid-cols-1 gap-2 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">Name</span>
                                        <span className="font-medium text-gray-800 dark:text-white/90">{row.name}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">Email</span>
                                        <span className="font-medium text-gray-800 dark:text-white/90">{row.email || "N/A"}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">Mobile No.</span>
                                        <span className="font-medium text-gray-800 dark:text-white/90">₹{row.mobile}</span>
                                    </div>




                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">View Eduacational Details</span>
                                        <button
                                            type="button"
                                            // onClick={() => toggleStatusMenu(index)}
                                            className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                        >
                                            {'Eduacational Details'}

                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">View Certifications</span>
                                        <button
                                            type="button"
                                            // onClick={() => toggleStatusMenu(index)}
                                            className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                        >
                                            {'Certifications'}

                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">View Experience</span>
                                        <button
                                            type="button"
                                            // onClick={() => toggleStatusMenu(index)}
                                            className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                        >
                                            {'View Experience'}

                                        </button>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default VerificationDashboard