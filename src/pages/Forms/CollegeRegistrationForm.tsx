import React, { useState } from 'react'
import Label from '../../components/form/Label'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CollegeRegistrationForm: React.FC = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div className="min-h-screen bg-[#f9fafb] px-5 py-1">
            {/* Card */}
            <div className="container w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-white rounded-2xl shadow mx-auto flex flex-col">

                {/* Header (fixed) */}
                <div className="border-b border-gray-200 px-6 py-4 shrink-0">
                    <h1 className="text-xl font-bold">College Registration Form</h1>
                </div>

                {/* Body (scrollable only inside this div) */}
                <div className="px-6 py-4">
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/*Institute Name */}
                        <div className="flex flex-col">
                            <Label>Institute Name</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your name"
                            />
                        </div>
                        {/* Father Name */}
                        <div className="flex flex-col">
                            <Label>Registration No</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your Registration no."
                            />
                        </div>
                        {/*  */}

                        {/* Name */}
                        <div className="flex flex-col">
                            <Label>GSTIN No.</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your GSTIN No."
                            />
                        </div>
                        {/* Name */}

                        <div className='lg:col-span-3'>
                            <Label>Job Description</Label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                        </div>
                        {/* Name */}
                        <div className="flex flex-col">
                            <Label>No. of Employees</Label>
                            <input
                                type="number"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Address</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your address"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Proof Document</Label>
                            <input
                                type="file"
                                className=" w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer 
                              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 "
                            />
                        </div>

                        <div className="flex flex-col">
                            <Label>About college</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your college details"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>Status</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your status"
                            />
                        </div>





                    </form>
                </div>

                {/* Footer (fixed) */}
                <div className="border-t border-gray-200 px-6 py-4 shrink-0 flex justify-end gap-3">
                    {/* <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                        Close
                    </button> */}
                    <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    // onClick={handleFormSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CollegeRegistrationForm