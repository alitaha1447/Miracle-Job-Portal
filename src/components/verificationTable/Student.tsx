import React from 'react'
import {
    Table, TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from '../ui/table'
// import Select, { SingleValue } from "react-select";
// import axios from 'axios';

// type StudentRow = {
//     id: number | string;
//     name: string;
//     mobileno: string; // keep exact key if your API returns "mobileno"
//     email: string;
//     status: number;       // backend code
//     status_txt: string;   // backend label
// };


// const API_PATH = import.meta.env.VITE_APP_API_PATH;
// const API_KEY = import.meta.env.VITE_APP_API_KEY;

type Row = { id: number; name: string; mobileno: string; email: string; status_txt: string; };
// type StatusOption = { value: string; label: string };


// const STATUS_OPTIONS = [
//     { value: "0", label: "Pending for verification" },
//     { value: "1", label: "Verified" },
//     { value: "2", label: "Verification failed" }, // fixed typo
//     { value: "3", label: "Verification in Progress" },
// ];

type Props = {
    stuData: Row[];
    // onStatusChange: (index: number, selected: SingleValue<StatusOption>) => void;
};

const Student: React.FC<Props> = ({ stuData }) => {
    // const [studentData, setStudentData] = useState([]);
    // console.log(rows)



    return (
        <>
            <div className="hidden lg:block p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                <div className="space-y-6">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                        <div className="max-w-full overflow-x-auto">
                            <div className="min-w-[1102px]">
                                <Table className='hidden lg:block'>
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
                                        {stuData.map((stu, idx) => (
                                            <TableRow key={idx}>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {stu.id}

                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {stu.name}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {stu.mobileno}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {stu.email}
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
                                                {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                    <div className="relative inline-flex">
                                                        <Select
                                                            options={STATUS_OPTIONS}
                                                            value={STATUS_OPTIONS.find(o => o.label === stu.status_txt) || null}
                                                            onChange={(opt) => {
                                                                if (!opt) return;
                                                                setStudentData(prev => {
                                                                    const copy = [...prev];
                                                                    const i = copy.findIndex(r => r.id === stu.id);
                                                                    if (i >= 0) {
                                                                        copy[i] = {
                                                                            ...copy[i],
                                                                            status: Number(opt.value),  // update code
                                                                            status_txt: opt.label,      // update label
                                                                        };
                                                                    }
                                                                    return copy;  // 🔑 this return makes React re-render with updated status
                                                                });

                                                            }} placeholder="Select status"
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
            {/* Mobile cards */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
                {stuData.map((stu, idx) => (
                    <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                #{stu.id} • {stu.name}
                            </h4>
                            {/* <div className="min-w-[160px]">
                                <Select
                                    options={STATUS_OPTIONS}
                                    value={STATUS_OPTIONS.find(o => o.label === stu.status_txt) || null}
                                    onChange={(opt) => {
                                        if (!opt) return;
                                        setStudentData(prev => {
                                            const copy = [...prev];
                                            const i = copy.findIndex(r => r.id === stu.id);
                                            if (i >= 0) {
                                                copy[i] = {
                                                    ...copy[i],
                                                    status: Number(opt.value),  // update code
                                                    status_txt: opt.label,      // update label
                                                };
                                            }
                                            return copy;  // 🔑 this return makes React re-render with updated status
                                        });

                                    }}

                                    // onStatusChange(idx, opt)}
                                    isSearchable={false}
                                    menuPortalTarget={document.body}
                                    menuPosition="fixed"
                                    styles={{
                                        control: base => ({ ...base, minHeight: 28, height: 28, borderRadius: 9999, fontSize: 12 }),
                                        option: (base, s) => ({
                                            ...base, fontSize: 12, padding: "4px 8px",
                                            backgroundColor: s.isSelected ? "#2563eb" : s.isFocused ? "#e5e7eb" : "white",
                                            color: s.isSelected ? "white" : "#374151",
                                        }),
                                        dropdownIndicator: base => ({ ...base, padding: 2 }),
                                        clearIndicator: base => ({ ...base, padding: 2 }),
                                    }}
                                />
                            </div> */}
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Email</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{stu.email}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Mobile</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{stu.mobileno}</span>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Educational Details</button>
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Certifications</button>
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Experience</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Student