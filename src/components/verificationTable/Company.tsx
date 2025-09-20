import React from 'react'
import {
    Table, TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from '../ui/table'
// import Select, { SingleValue } from "react-select";


type Row = {
    id: number; about_company: string; address: string; contact_details: string; gst_no: string;
    name: string;
    no_of_employee: number;
    registration_no: string;

};
// type StatusOption = { value: string; label: string };



// const STATUS_OPTIONS = [
//     { value: "0", label: "Pending for verification" },
//     { value: "1", label: "Verified" },
//     { value: "2", label: "Verification failed" }, // fixed typo
//     { value: "3", label: "Verification in Progress" },
// ];

type Props = {
    compData: Row[];
    // onStatusChange: (index: number, selected: SingleValue<StatusOption>) => void;
};


const Company: React.FC<Props> = ({ compData }) => {
    console.log(compData)

    return (
        <>
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
                                                Company Name
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Registration No.
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                GSTIN No.
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Address
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Contact Details
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                No. of Emloyees
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                Upload incorporation certificate
                                            </TableCell>
                                            <TableCell
                                                isHeader
                                                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                            >
                                                About Company
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
                                        {compData.map((row: any, idx: number) => (
                                            <TableRow key={idx}>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.id}

                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.registration_no}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.gst_no}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.address}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.contact_details}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    {row.no_of_employee}
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                    <button type="button"
                                                        className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                    >
                                                        {'Educational Details'}
                                                    </button>
                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">

                                                    {row.about_company}

                                                </TableCell>
                                                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                    <button type="button"
                                                        className="px-2.5 py-1 rounded-full border text-xs font-medium hover:opacity-90 transition"
                                                    >
                                                        {row.status_txt}
                                                    </button>
                                                </TableCell>


                                                {/* <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                    <div className="relative inline-flex">
                                                        <Select
                                                            options={STATUS_OPTIONS}
                                                            value={STATUS_OPTIONS.find(o => o.label === row.status) || null}
                                                            onChange={(opt) => onStatusChange(idx, opt)}
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
                {compData.map((row: any, _) => (
                    <div key={row.id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                #{row.id} • {row.name}
                            </h4>
                            {/* <div className="min-w-[160px]">
                                <Select
                                    options={STATUS_OPTIONS}
                                    value={STATUS_OPTIONS.find(o => o.label === row.status) || null}
                                    onChange={(opt) => onStatusChange(idx, opt)}
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
                                <span className="text-gray-500">Company Name</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.name}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Registration No.</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.registration_no}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">GSTIN No.</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.gst_no}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Address</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.address}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Contact Details	</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.contact_details}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">No. of Emloyees	</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.no_of_employee}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">About Company</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.about_company}</span>
                            </div>
                            {/* <div className="flex items-center justify-between">
                                <span className="text-gray-500">Registration No.</span>
                                <span className="font-medium text-gray-800 dark:text-white/90">{row.registration_no}</span>
                            </div> */}

                            {/* <div className="flex items-center justify-between pt-2">
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Educational Details</button>
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Certifications</button>
                                <button className="px-2.5 py-1 rounded-full border text-xs font-medium">Experience</button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Company