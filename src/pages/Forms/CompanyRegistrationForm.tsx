import React, { useState } from 'react'
import Label from '../../components/form/Label'
import ReactQuill from 'react-quill';
import { FaPlus, FaMinus } from "react-icons/fa";

type ContactDetail = {
    id: string;
    name: string;
    contact: string;
    designation: string;
};

const CompanyRegistrationForm: React.FC = () => {

    const [value, setValue] = useState<string>('');
    const [contactDetails, setContactDetails] = useState<ContactDetail[]>([
        {
            id: crypto.randomUUID(),
            name: '',
            contact: "",
            designation: "",
        }
    ])

    const handleContactChange = (index: number, key: keyof ContactDetail, value: any) => {
        const updated = [...contactDetails]
        updated[index][key] = value;
        setContactDetails(updated);
    }

    const hamdleAddContacts = () => {
        setContactDetails((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                name: '',
                contact: "",
                designation: "",

            }
        ])
    }

    const handleDeleteContact = (id: any) => {
        setContactDetails((prev) => prev.filter((_, i) => i !== id));
    };


    return (
        <div className="min-h-screen bg-[#f9fafb] px-5 py-5">
            {/* Card */}
            <div className="container w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-white rounded-2xl shadow mx-auto flex flex-col">

                {/* Header (fixed) */}
                <div className="border-b border-gray-200 px-6 py-4 shrink-0">
                    <h1 className="text-xl font-bold">Company Registration Form</h1>
                </div>

                {/* Body (scrollable only inside this div) */}
                <div className="px-6 py-4">
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/*Institute Name */}
                        <div className="flex flex-col">
                            <Label>Company Name</Label>
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


                        <div className="flex flex-col">
                            <Label>GSTIN No.</Label>
                            <input
                                type="text"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder="Enter your GSTIN No."
                            />
                        </div>

                        <div className='lg:col-span-3'>
                            <Label>About Company</Label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
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
                            <Label>Phone No.</Label>
                            <input
                                type="number"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label>No. of Employees</Label>
                            <input
                                type="number"
                                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                                placeholder=""
                            />
                        </div>
                        <div className="flex flex-col md:col-span-3">
                            <div className="flex items-center gap-5 mb-2">

                                <div className="flex items-center gap-2">
                                    <label className="mb-2 font-medium text-gray-700">Contact Details</label>
                                    <button
                                        type="button"
                                        onClick={hamdleAddContacts}
                                        className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                                    >
                                        <FaPlus size={12} />
                                    </button>
                                </div>
                            </div>

                            {contactDetails.map((row, idx) => (
                                <div key={row.id} className="gap-2 mb-3">
                                    <div className="relative">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full pr-16">


                                            <input
                                                type="text"
                                                value={row.name}
                                                onChange={(e) => handleContactChange(idx, "name", e.target.value)}
                                                className="border rounded-lg p-2 h-10 w-full" placeholder="Enter name"
                                            />
                                            <input
                                                type="number"
                                                value={row.contact}
                                                onChange={(e) => handleContactChange(idx, "contact", e.target.value)}
                                                className="border rounded-lg p-2 h-10 w-full" placeholder="Enter contact number"
                                            />
                                            <input
                                                type="text"
                                                value={row.designation}
                                                onChange={(e) => handleContactChange(idx, "designation", e.target.value)}
                                                className="border rounded-lg p-2 h-10 w-full" placeholder="Enter designation"
                                            />


                                        </div>
                                        <div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end'>

                                            {contactDetails.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteContact(idx)}
                                                    className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center"
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                            )}
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                        <div>
                            <Label>Proof Document</Label>
                            <input
                                type="file"
                                className=" w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer 
                              file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 "
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
            </div >
        </div >
    )
}

export default CompanyRegistrationForm