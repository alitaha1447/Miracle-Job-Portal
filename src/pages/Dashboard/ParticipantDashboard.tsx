import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from '../../components/ui/modal';
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Label from "../../components/form/Label";
import TextArea from '../../components/form/input/TextArea';
import Checkbox from '../../components/form/input/Checkbox';
import { FiEye } from "react-icons/fi";
import Select from "react-select";
import { Dropdown } from '../../components/ui/dropdown/Dropdown';
import DatePicker from "react-datepicker";

const role = [
    { value: "0", label: "Frontend Developer" },
    { value: "1", label: "Backend Developer" },
    { value: "2", label: "QA tester" },
]

const tableData = [
    { name: 'Alex', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Applied for interview' },
    { name: 'Salman', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Interview schedule' },
    { name: 'Mogesh', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Interview completed' },
    { name: 'Ram', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Selected' },
    { name: 'John', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Joining confirm' },
    { name: 'Taha', email: 'ali@gmail.com', mobile: '1236547890', applyDate: '20-02-2026', remark: 'Pending', status: 'Joined' },
]

const ParticipantDashboard: React.FC = () => {
    const [desktopOpenStatusIdx, setDesktopOpenStatusIdx] = useState<number | null>(null);
    const [mobileOpenStatusIdx, setMobileOpenStatusIdx] = useState<number | null>(null);
    const [scheduleInterview, setScheduleInterview] = useState(false)
    const [openInterview, setOpenInterview] = useState<boolean>(false)
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<Date | null>(null);

    const toggleScheduleInterview = () => {
        setScheduleInterview(!scheduleInterview);
        // Close any open dropdowns when opening modal
        setDesktopOpenStatusIdx(null);
        setMobileOpenStatusIdx(null);
    }

    const toggleInterview = () => {
        setOpenInterview(!openInterview);
        // Close any open dropdowns when opening modal
        setDesktopOpenStatusIdx(null);
        setMobileOpenStatusIdx(null);
    }

    // Desktop status menu
    const toggleDesktopStatusMenu = (idx: number) => {
        setDesktopOpenStatusIdx(prev => (prev === idx ? null : idx));
        // Close mobile menu when opening desktop menu
        setMobileOpenStatusIdx(null);
    }

    const closeDesktopStatusMenu = () => setDesktopOpenStatusIdx(null);

    // Mobile status menu
    const toggleMobileStatusMenu = (idx: number) => {
        setMobileOpenStatusIdx(prev => (prev === idx ? null : idx));
        // Close desktop menu when opening mobile menu
        setDesktopOpenStatusIdx(null);
    }

    const closeMobileStatusMenu = () => setMobileOpenStatusIdx(null);

    return (
        <>
            <div>
                <div className="space-y-6">
                    <div
                        className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
                    >
                        {/* Card Header */}
                        <div className="px-6 py-5 flex items-center justify-between">
                            <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                                Participant List
                            </h3>
                            <button
                                onClick={toggleScheduleInterview}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                            >
                                Schedule Interview
                            </button>
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden lg:block p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                                <div className="max-w-full overflow-x-auto">
                                    <div className="min-w-[1102px]">
                                        <Table>
                                            {/* Table Header */}
                                            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                                <TableRow>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        <div />
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        S.No.
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Name
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Email
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Mobile No.
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Apply Date
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Remark
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        View Resume
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Add Certificate
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        View Qualification
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        View Experience
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Status
                                                    </TableCell>
                                                    <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                                        Action
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
                                                            {order.email}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {order.mobile}
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
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                            >
                                                                <FiEye className="text-sm" />
                                                                Add Certificate
                                                            </button>
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                            >
                                                                <FiEye className="text-sm" />
                                                                View Qualification
                                                            </button>
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700"
                                                            >
                                                                <FiEye className="text-sm" />
                                                                View Experience
                                                            </button>
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {order.status}
                                                        </TableCell>
                                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                                            <div className="relative inline-flex">
                                                                <button
                                                                    onClick={() => toggleDesktopStatusMenu(index)}
                                                                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300"
                                                                    aria-haspopup="menu"
                                                                    style={{ lineHeight: 0 }}
                                                                >
                                                                    <BsThreeDotsVertical size={20} />
                                                                </button>
                                                                {/* Status dropdown */}
                                                                <Dropdown
                                                                    isOpen={desktopOpenStatusIdx === index}
                                                                    onClose={closeDesktopStatusMenu}
                                                                    className="absolute right-0 top-full z-50 mt-2 flex w-48 flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                                                >
                                                                    <button
                                                                        onClick={toggleInterview}
                                                                        type="button"
                                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                                        Start Interview
                                                                    </button>
                                                                    <button
                                                                        onClick={toggleInterview}
                                                                        type="button"
                                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                                        Upload Appointment letter
                                                                    </button>
                                                                    <button
                                                                        onClick={toggleScheduleInterview}
                                                                        type="button"
                                                                        className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                                        Schedule Interview
                                                                    </button>
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

                        {/* Mobile Card View */}
                        <div className="lg:hidden overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            {tableData.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex flex-col gap-3"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <Checkbox />
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                                    {index + 1}. {item.name}
                                                </h4>
                                                <p className="text-xs text-gray-500">{item.status}</p>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <button
                                                onClick={() => toggleMobileStatusMenu(index)}
                                                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300"
                                                aria-haspopup="menu"
                                                style={{ lineHeight: 0 }}
                                            >
                                                <BsThreeDotsVertical size={18} />
                                            </button>

                                            <Dropdown
                                                isOpen={mobileOpenStatusIdx === index}
                                                onClose={closeMobileStatusMenu}
                                                className="absolute right-0 top-full z-50 mt-2 flex w-48 flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                                            >
                                                <button
                                                    onClick={toggleInterview}
                                                    type="button"
                                                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                    Start Interview
                                                </button>
                                                <button
                                                    onClick={toggleInterview}
                                                    type="button"
                                                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                    Upload Appointment letter
                                                </button>
                                                <button
                                                    onClick={toggleScheduleInterview}
                                                    type="button"
                                                    className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-800">
                                                    Schedule Interview
                                                </button>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Email</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.email}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Mobile</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.mobile}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Apply Date</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.applyDate}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500">Remark</span>
                                            <span className="font-medium text-gray-800 dark:text-white/90">{item.remark}</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 grid grid-cols-2 gap-2">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700"
                                        >
                                            <FiEye className="text-sm" /> View Resume
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700"
                                        >
                                            <FiEye className="text-sm" /> Add Certificate
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 col-span-2"
                                        >
                                            <FiEye className="text-sm" /> View Qualification
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 col-span-2"
                                        >
                                            <FiEye className="text-sm" /> View Experience
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Schedule Interview Modal */}
            <Modal isOpen={scheduleInterview} onClose={toggleScheduleInterview} className="max-w-xl">
                <div className="relative w-full bg-white rounded-3xl dark:bg-gray-900 flex flex-col">
                    {/* Header (fixed) */}
                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Schedule Interview
                        </h4>
                    </div>

                    {/* Body (scrollable) */}
                    <form className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Date</Label>
                                <DatePicker
                                    selected={date}
                                    onChange={(d) => setDate(d)}
                                    placeholderText="Select date"
                                    dateFormat="yyyy-MM-dd"
                                    isClearable
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>

                            <div>
                                <Label htmlFor="tm">Time</Label>
                                <DatePicker
                                    selected={time}
                                    onChange={(t) => setTime(t)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    placeholderText="Select time"
                                    isClearable
                                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                                />
                            </div>
                        </div>
                    </form>

                    {/* Footer (fixed) */}
                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                        <div className="flex items-center gap-3 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={toggleScheduleInterview}>
                                Close
                            </Button>
                            <Button size="sm">Submit</Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Interview Modal */}
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
                                <Input
                                    type="text"
                                    id="input"
                                    value="Taha"
                                    disabled
                                    className="bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <Label>Role</Label>
                                <Select
                                    options={role}
                                    value={{ value: "0", label: "Frontend Developer" }} // fixed value
                                    isDisabled // disables dropdown interaction
                                    placeholder="Select an option"
                                />
                            </div>
                            <div>
                                <Label>Marks</Label>
                                <Input type="text" id="input" />
                            </div>
                            <div className='lg:col-span-2'>
                                <Label>Description</Label>
                                <TextArea
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
                            <Button size="sm" onClick={toggleInterview}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ParticipantDashboard