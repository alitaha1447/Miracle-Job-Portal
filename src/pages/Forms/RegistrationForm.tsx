import React, { useState } from 'react';
import Label from '../../components/form/Label';
import RadioGroupField from '../../components/formFields/RadioGroup';
import { FaPlus, FaMinus } from "react-icons/fa";
import CreatableSelect from 'react-select/creatable';
import DatePicker from "react-datepicker";



type EduDetail = {
  id: string;
  qualification: string;
  institution: string;
  university: string;
  year: string;
  grade: string;
  file: File | null;
};
type CertificateDetail = {
  id: string;
  name: string;
  complletionYear: string;
  file: File | null;
};
type ExperienceDetail = {
  id: string;
  organization: string;
  role: string;
  totalExp: string;
  file: File | null;
};

const genderOptions = [
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
  { value: 3, label: "Prefer not to say" },
];


const RegistrationForm: React.FC = () => {
  const [gender, setGender] = useState<string | number | undefined>(undefined);

  const [eduDetails, setEduDetails] = useState<EduDetail[]>([
    {
      id: crypto.randomUUID(),
      qualification: "",
      institution: "",
      university: "",
      year: "",
      grade: "",
      file: null,
    },
  ]);

  const [certificationDetails, setCertificationDetails] = useState<CertificateDetail[]>([
    {
      id: crypto.randomUUID(),
      name: '',
      complletionYear: "",
      file: null,
    }
  ])

  const [expDetails, setExpDetails] = useState<ExperienceDetail[]>([
    {
      id: crypto.randomUUID(),
      organization: '',
      role: "",
      totalExp: "",
      file: null,
    }
  ])
  const [date, setDate] = useState<Date | null>(null);



  // 🔑 Common change handler (edit by index)
  const handleEduChange = (index: number, key: keyof EduDetail, value: any) => {
    const updated = [...eduDetails];
    updated[index][key] = value;
    setEduDetails(updated);
  };

  const handleCertChange = (index: number, key: keyof CertificateDetail, value: any) => {
    const updated = [...certificationDetails]
    updated[index][key] = value;
    setCertificationDetails(updated);

  }

  const handleExpChange = (index: number, key: keyof ExperienceDetail, value: any) => {
    const updated = [...expDetails]
    updated[index][key] = value;
    setExpDetails(updated);
  }

  const handleFileChange = (index: number, value: any) => {
    console.log(index)
    console.log(value)
  }


  const handleAdd = () => {
    setEduDetails((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        qualification: "",
        institution: "",
        university: "",
        year: "",
        grade: "",
        file: null,
      },
    ]);
  };

  const handleDelete = (id: any) => {
    setEduDetails((prev) => prev.filter((_, i) => i !== id));
    // setEduDetails((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev));
  };

  const hamdleAddCertificate = () => {
    setCertificationDetails((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: '',
        complletionYear: "",
        file: null,
      }
    ])
  }

  const handleDeleteCertificate = (id: any) => {
    setCertificationDetails((prev) => prev.filter((_, i) => i !== id));
    // setEduDetails((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev));
  };

  const hamdleAddExperience = () => {
    setExpDetails((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        organization: '',
        role: "",
        totalExp: "",
        file: null,
      }
    ])
  }

  const handleDeleteExperience = (id: any) => {
    setExpDetails((prev) => prev.filter((_, i) => i !== id));
    // setEduDetails((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev));
  };

  const handleFormSubmit = () => {

  }


  return (
    <div className="min-h-screen bg-[#f9fafb] px-5 py-5">
      {/* Card */}
      <div className="container w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl bg-white rounded-2xl shadow mx-auto flex flex-col h-[98vh]">

        {/* Header (fixed) */}
        <div className="border-b border-gray-200 px-6 py-4 shrink-0">
          <h1 className="text-xl font-bold">Student Registration Form</h1>
        </div>

        {/* Body (scrollable only inside this div) */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <Label>Full Name</Label>
              <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your name"
              />
            </div>
            {/* Father Name */}
            <div className="flex flex-col">
              <Label>Father's Name</Label>
              <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your father name"
              />
            </div>
            {/*  */}
            <div className="flex flex-col">
              <Label>Father's Occupation</Label>
              <CreatableSelect isClearable placeholder='Select father Occupation' />

              {/* <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your father accupation"
              /> */}
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <Label>Permanent Address</Label>
              <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your permanent address"
              />
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <Label>Local Address</Label>
              <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your local address"
              />
            </div>
            {/* Name */}
            <div className="flex flex-col">
              {/* <Label>Gender</Label> */}
              <RadioGroupField
                label="Gender"
                name="gender"
                options={genderOptions}
                selected={gender}
                onChange={setGender}
                // error={formErrors.gender}
                // setFormErrors={setFormErrors}
                required
              />
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <Label>Date of birth</Label>
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                placeholderText="Select date"
                dateFormat="dd-MM-yyyy"
                isClearable
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100} // shows 100 years in the dropdown
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <Label>Mobile</Label>
              <input
                type="number"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your mobile"
              />
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <Label>Email</Label>
              <input
                type="text"
                className="bg-transparent text-gray-800 rounded-lg border border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
                placeholder="Enter your email"
              />
            </div>
            {/* Educational Details */}
            <div className="flex flex-col md:col-span-3">
              <label className="mb-2 font-medium text-gray-700">Educational Details</label>

              {eduDetails.map((row, idx) => (
                <div key={row.id} className="mb-3">
                  <div className='relative'>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 w-full pr-16">
                      {/* <input
                      type="text"
                      value={row.qualification}
                      onChange={(e) => handleEduChange(idx, "qualification", e.target.value)} className="border rounded-lg p-2"
                      placeholder="Enter Qualification (e.g., B.Tech, MBA)"
                    /> */}
                      <div className="min-w-0">

                        <CreatableSelect isClearable placeholder='Qualification' />
                      </div>
                      <div className="min-w-0">

                        <CreatableSelect isClearable placeholder='Institution' />
                      </div>
                      <div className="min-w-0">

                        <CreatableSelect isClearable placeholder='University' />

                      </div>


                      {/* <input
                      type="text"
                      value={row.institution}
                      onChange={(e) => handleEduChange(idx, "institution", e.target.value)}
                      className="border rounded-lg p-2"
                      placeholder="Enter Institution / College Name"
                    />

                    <input
                      type="text"
                      value={row.university}
                      onChange={(e) => handleEduChange(idx, "university", e.target.value)}
                      className="border rounded-lg p-2"
                      placeholder="Enter University / Board"
                    /> */}

                      <input
                        type="number"
                        value={row.year}
                        onChange={(e) => handleEduChange(idx, "year", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Passing"
                      />

                      <input
                        type="text"
                        value={row.grade}
                        onChange={(e) => handleEduChange(idx, "grade", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Percentage / Grade"
                      />

                      <input
                        type="file"
                        // onChange={(e) => handleEduChange(idx, "institution", e.target.value)}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                      />
                    </div>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end'>

                      {/* Add button (only on last row) */}
                      {idx === eduDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAdd}
                          className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                        >
                          <FaPlus size={12} />
                        </button>
                      )}

                      {/* Delete button (enabled when more than 1 row) */}
                      {eduDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDelete(idx)}
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

            {/* Certifications Details */}
            <div className="flex flex-col md:col-span-3">
              <label className="mb-2 font-medium text-gray-700">Certifications</label>

              {certificationDetails.map((row, idx) => (
                <div key={row.id} className="mb-3">
                  <div className="relative">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full pr-16">
                      {/* <input
                      type="text"
                      value={row.name}
                      onChange={(e) => handleCertChange(idx, 'name', e.target.value)}
                      // onChange={(e) => handleEduChange(idx, "institution", e.target.value)}
                      className="border rounded-lg p-2"
                      placeholder="Enter Certification Name"
                    /> */}
                      <div className='className="min-w-0"'>

                        <CreatableSelect isClearable placeholder='Certification Name' />
                      </div>


                      <input
                        type="number"
                        value={row.complletionYear}
                        onChange={(e) => handleCertChange(idx, 'complletionYear', e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Completion"
                      />

                      <input
                        type="file"
                        onChange={(e) => handleFileChange(idx, e.target.files?.[0] ?? null)}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                      />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {/* Add button (only on last row) */}
                      {idx === certificationDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={hamdleAddCertificate}
                          className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                        >
                          <FaPlus size={12} />
                        </button>
                      )}

                      {/* Delete button (optional for each row) */}
                      {certificationDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteCertificate(idx)}
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

            {/* Experiences Details */}
            <div className="flex flex-col md:col-span-3">
              <div className="flex items-center gap-5 mb-2">

                <div className="flex items-center gap-2">
                  <label className="mb-2 font-medium text-gray-700">Experiences Details</label>
                  <button
                    type="button"
                    onClick={hamdleAddExperience}
                    className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {/* <label className="mb-2 font-medium text-gray-700">Experiences Details</label> */}


              {/* <div className="grid grid-cols-1 lg:grid-cols-4 font-medium text-gray-600 mb-1">
                <label>Organisation Name</label>
                <label>Role</label>
                <label>Total Exp.</label>
                <label>Upload Certificate</label>
              </div> */}
              {expDetails.map((row, idx) => (
                <div key={row.id} className="gap-2 mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full pr-16">
                      {/* <input
                      type="text"
                      value={row.organization}
                      onChange={(e) => handleExpChange(idx, 'organization', e.target.value)}
                      className="border rounded-lg p-2"
                      placeholder="Enter Organization Name"
                    />
                    <input
                      type="text"
                      value={row.role}
                      onChange={(e) => handleExpChange(idx, 'role', e.target.value)}
                      className="border rounded-lg p-2"
                      placeholder="Enter Role"
                    /> */}
                      <div className="min-w-0">  <CreatableSelect isClearable placeholder='Select Organization Name' /></div>
                      <div className="min-w-0"> <CreatableSelect isClearable placeholder='Select Role' /></div>




                      <input
                        type="number"
                        value={row.totalExp}
                        onChange={(e) => handleExpChange(idx, "totalExp", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full" placeholder="Total Year of Experience"
                      />

                      <input
                        type="file"

                        // onChange={(e) => handleFileChange(row.id, e.target.files?.[0] ?? null)}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                      />
                    </div>
                    <div className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end'>
                      {/* Add button (only on last row) */}
                      {/* {idx === expDetails.length - 1 && (
                        <button
                          type="button"
                          onClick={hamdleAddExperience}
                          className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                        >
                          <FaPlus size={12} />
                        </button>
                      )} */}

                      {/* Delete button (optional for each row) */}
                      {expDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteExperience(idx)}
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
          </form>
        </div>

        {/* Footer (fixed) */}
        <div className="border-t border-gray-200 px-6 py-4 shrink-0 flex justify-end gap-3">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Close
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
