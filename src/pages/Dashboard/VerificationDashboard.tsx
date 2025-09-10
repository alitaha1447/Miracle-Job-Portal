import React, { useState, lazy, Suspense } from 'react'

import { SingleValue } from "react-select";
import { FaUsers } from "react-icons/fa";

import { GoXCircle } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";

// Lazy-loaded
const Student = lazy(() => import("../../components/verificationTable/Student"));
const Company = lazy(() => import("../../components/verificationTable/Company"));
const College = lazy(() => import("../../components/verificationTable/College"));

type UserType = "Student" | "Company" | "College";

type Row = {
    id: number;
    name: string;
    mobile: string;
    email: string;
    status: string; // stores the LABEL text
};

type StatusOption = { value: string; label: string };

// initial data per type
const initialData: Record<UserType, Row[]> = {
    Student: [
        { id: 0, name: "Prince Jain", mobile: "9981341559", email: "p@gmail.com", status: "Pending for verification" },
        { id: 1, name: "Kuldeep Mishra", mobile: "9981341559", email: "p@gmail.com", status: "Verified" },
        { id: 2, name: "Joney", mobile: "9981341559", email: "p@gmail.com", status: "Verification failed" },
        { id: 3, name: "Jatin", mobile: "9981341559", email: "p@gmail.com", status: "Verification in Progress" },
    ],
    Company: [
        { id: 100, name: "Acme Pvt Ltd", mobile: "022-555000", email: "hr@acme.com", status: "Pending for verification" },
    ],
    College: [
        { id: 200, name: "BNIT", mobile: "0755-220011", email: "admin@bnit.edu", status: "Verified" },
    ],
};


const VerificationDashboard: React.FC = () => {

    const [userType, setUserType] = useState<UserType>("Student");
    const [data, setData] = useState<Record<UserType, Row[]>>(initialData);
    const [selectedStatus, setSelectedStatus] = useState<Row | null>(null);

    const rows = data[userType];

    const handleStatusChange = (index: number, selected: SingleValue<StatusOption>) => {
        if (!selected) return;

        setData(prev => {
            const list = prev[userType];
            const updatedList = list.map((r, i) => (i === index ? { ...r, status: selected.label } : r));
            // store only the changed row
            setSelectedStatus(updatedList[index]);
            return { ...prev, [userType]: updatedList };
        });
    };
    console.log(selectedStatus)


    return (
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
                            Total registration
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
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl dark:bg-green-900/30">
                            <PiStudentBold className="text-green-600 size-6 dark:text-green-400" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl dark:bg-blue-900/30">
                            <FaUniversity className="text-blue-600 size-6 dark:text-blue-400" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl dark:bg-orange-900/30">
                            <FaBriefcase className="text-orange-600 size-6 dark:text-orange-400" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Pending verification
                        </span>
                        <div className="flex gap-2 mt-2">
                            <span className="font-bold text-green-600  dark:text-green-400">
                                30 Student
                            </span>
                            <span className="font-bold text-blue-600  dark:text-blue-400">
                                30 College
                            </span>
                            <span className="font-bold text-orange-600  dark:text-orange-400">
                                30 Company
                            </span>
                        </div>
                    </div>

                </div>

                {/* 3. Upcoming Interviews */}
                <div

                    // onClick={toggleInterviewList} 
                    className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl dark:bg-red-900/30">
                        <GoXCircle className="text-red-600 size-6 dark:text-red-400" />
                    </div>
                    <div className="mt-5">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Rejected
                        </span><br />
                        <span className="mt-2 font-bold text-gray-800 dark:text-white/90">
                            5
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div
                    className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]`}
                >
                    {/* Card Header */}
                    <div className="px-6 py-5 flex flex-col gap-5">
                        <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
                            Verification Dashboard
                        </h3>
                        {/* <button
                            onClick={togglePostJob}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        >
                            Add New Job
                        </button> */}
                        <div className="mb-0">
                            {["Student", "Company", "College"].map((type) => (
                                <label
                                    key={type}
                                    className="inline-flex items-center mr-6 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        value={type}
                                        checked={userType === type}
                                        onChange={(e) => setUserType(e.target.value as UserType)}
                                        className="mr-2 focus:outline-none focus:ring-0"
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>

                    </div>

                    {/* Table Body */}
                    <Suspense fallback={<div className="p-6 text-sm text-gray-500">Loading {userType} table…</div>}>
                        {userType === "Student" && <Student rows={rows} onStatusChange={handleStatusChange} />}
                        {userType === "Company" && <Company rows={rows} onStatusChange={handleStatusChange} />}
                        {userType === "College" && <College rows={rows} onStatusChange={handleStatusChange} />}
                    </Suspense>



                </div>


            </div>
        </div>
    )
}

export default VerificationDashboard