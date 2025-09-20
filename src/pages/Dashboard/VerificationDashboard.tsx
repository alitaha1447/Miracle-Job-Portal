import React, { useState, lazy, Suspense, useEffect } from 'react'

// import { SingleValue } from "react-select";
import { FaUsers } from "react-icons/fa";

import { GoXCircle } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import axios from 'axios';


const API_PATH = import.meta.env.VITE_APP_API_PATH;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

type UserType = "Student" | "Company" | "College";

const ENDPOINTS: Record<UserType, string> = {
    Student: "/api/student",
    Company: "/api/Company",
    College: "/api/college",
};

// Lazy-loaded
const Student = lazy(() => import("../../components/verificationTable/Student"));
const Company = lazy(() => import("../../components/verificationTable/Company"));
// const College = lazy(() => import("../../components/verificationTable/College"));

// type Row = {
//     id: number;
//     name: string;
//     mobile: string;
//     email: string;
//     status: string; // stores the LABEL text
// };

// type StatusOption = { value: string; label: string };




const VerificationDashboard: React.FC = () => {

    const [userType, setUserType] = useState<UserType>("Student");
    const [rows, setRows] = useState<any[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [data, setData] = useState<Record<UserType, Row[]>>(initialData);
    // const [selectedStatus, setSelectedStatus] = useState<Row | null>(null);

    // const rows = data[userType];

    // const handleStatusChange = (index: number, selected: SingleValue<StatusOption>) => {
    //     if (!selected) return;

    //     setData(prev => {
    //         const list = prev[userType];
    //         const updatedList = list.map((r, i) => (i === index ? { ...r, status: selected.label } : r));
    //         // store only the changed row
    //         setSelectedStatus(updatedList[index]);
    //         return { ...prev, [userType]: updatedList };
    //     });
    // };
    // console.log(selectedStatus)
    console.log(ENDPOINTS[userType])
    useEffect(() => {
        if (!userType) return
        const fetchData = async () => {
            try {
                // setLoading(true);
                const res = await axios.get(`${API_PATH}${ENDPOINTS[userType]}`, {
                    params: {
                        APIKEY: API_KEY
                    }
                });
                console.log(res)
                setRows(res?.data ?? []);
            } catch (err) {
                console.error(`Failed to fetch ${userType}`, err);
                setRows([]);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, [userType]); // 👈 API runs whenever userType changes


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
                        {userType === "Student" && <Student stuData={rows} />}
                        {userType === "Company" && <Company compData={rows} />}
                        {/* {userType === "College" && <College rows={rows} />} */}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default VerificationDashboard