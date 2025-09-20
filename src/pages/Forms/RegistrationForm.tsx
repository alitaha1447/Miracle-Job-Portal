import React, { useState, useRef } from "react";
import Label from "../../components/form/Label";
import CustomRadioGroup from "../../components/formFields/CustomRadioGroup";
import { FaPlus, FaMinus } from "react-icons/fa";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import axios from 'axios';
import { getValidationErrors } from "../../utils/validations/studentRegistrationForm";
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';



const API_PATH = import.meta.env.VITE_APP_API_PATH;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('Shop'),
  createOption('Service'),
  createOption('Employed'),
];
const defaultQualificationOptions = [
  createOption("B.Sc"),
  createOption("B.Tech"),
  createOption("MCA"),
];

const defaultInstitutionOptions = [
  createOption("Truba"),
  createOption("LNCT"),
]

const defaultUniversityOptions = [
  createOption("RGPV"),
  createOption("BU"),
]

const defaultCertiicateName = [
  createOption("AWS CCP"),
  createOption("Google DA"),
]
const defaultOrganizationName = [
  createOption("Miracle Infos0ft"),
]
const defaultRoleName = [
  createOption("React Js Developer"),
]

// ---------- Types ----------

type EduDetail = {
  qualification: string;
  institution: string;
  university: string;
  year: string;
  grade: string;
  file: string;
};

type CertificateDetail = {
  certification: string;
  complletionYear: string;
  file: string;
};

type ExperienceDetail = {
  organization: string;
  role: string;
  totalExp: string;
  fromdate?: string;
  todate?: string;
  file: string;
};

type Gender = 0 | 1 | 2;

const genderOptions = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female" },
  { value: 2, label: "Prefer not to say" },
];

const RegistrationForm: React.FC = () => {
  // Ref for file inputs
  const educationFileRef = useRef<HTMLInputElement | null>(null);
  const certificationFileRef = useRef<HTMLInputElement | null>(null);
  const experienceFileRef = useRef<HTMLInputElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');

  const [occupationOptions, setOccupationOptions] = useState(defaultOptions);
  const [occupation, setOccupation] = useState<Option | null>();

  const [permanentAddress, setPermanentAddress] = useState('')
  const [localAddress, setLocalAddress] = useState('')
  const [gender, setGender] = useState<Gender | null>(null); // ✅ typed, not just null
  const [date, setDate] = useState<Date | null>(new Date());
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [qualificationOptions, setQualificationOptions] = useState(defaultQualificationOptions);
  const [institutionOptions, setInstitutionOptions] = useState(defaultInstitutionOptions);
  const [universityOptions, setUniversityOptions] = useState(defaultUniversityOptions);
  // const [qualification, setQualification] = useState<Option | null>();

  const [eduDetailsStructure, setEduDetailsStructure] = useState<EduDetail[]>([
    { qualification: "", institution: "", university: "", year: "", grade: "", file: "" },
  ]);

  const [certNameOptions, setCertNameOptions] = useState(defaultCertiicateName);
  const [certificationDetails, setCertificationDetails] = useState<CertificateDetail[]>([
    { certification: "", complletionYear: "", file: "" },
  ]);

  const [expOrganizationOptions, setExpOrganizationOptions] = useState(defaultOrganizationName)
  const [expRoleOptions, setExpRoleOptions] = useState(defaultRoleName)

  const [expDetails, setExpDetails] = useState<ExperienceDetail[]>([
    { organization: "", role: "", totalExp: "", file: "" },
  ]);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleCreate = (inputValue: string) => {
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setOccupationOptions((prev) => [...prev, newOption]);
      setOccupation(newOption);
    }, 1000);
  };

  // ---------- Education Details Structure ----------
  const addEdu = () =>
    setEduDetailsStructure((p) => [...p, { qualification: "", institution: "", university: "", year: "", grade: "", file: "" }]);
  const delEdu = (idx: number) => setEduDetailsStructure((p) => p.filter((_, i) => i !== idx));

  const handleEduDetailChange = (idx: number, field: keyof EduDetail, value: string | File | null) => {
    setEduDetailsStructure((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );
  };
  // ---------- Certifications Details Structure ----------
  const addCert = () =>
    setCertificationDetails((p) => [...p, { certification: "", complletionYear: "", file: "" }]);
  const delCert = (idx: number) => setCertificationDetails((p) => p.filter((_, i) => i !== idx));

  const handleCertificateDetailChange = (idx: number, field: keyof CertificateDetail, value: string | File | null) => {
    setCertificationDetails((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );
  };
  // ---------- Experience Details Structure ----------
  const addExp = () =>
    setExpDetails((p) => [...p, { organization: "", role: "", totalExp: "", file: "" }]);
  const delExp = (idx: number) => setExpDetails((p) => p.filter((_, i) => i !== idx));

  const handleExperienceDetailChange = (idx: number, field: keyof ExperienceDetail, value: string | File | null) => {
    setExpDetails((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );
  };

  const resetForm = () => {
    setName("");
    setFatherName("");
    setOccupation(null);
    setPermanentAddress("");
    setLocalAddress("");
    setGender(null);
    setDate(null); // you set new Date() initially; switch to null if you want empty after reset
    setMobile("");
    setEmail("");
    setUserName("");
    setPass("");
    setConfirmPass("");
    setEduDetailsStructure([{ qualification: "", institution: "", university: "", year: "", grade: "", file: "" }])
    setCertificationDetails([{ certification: "", complletionYear: "", file: "" }])
    setExpDetails([{ organization: "", role: "", totalExp: "", file: "" }])
    setFormErrors({});
    // Reset the file inputs using ref
    if (educationFileRef.current) educationFileRef.current.value = "";
    if (certificationFileRef.current) certificationFileRef.current.value = "";
    if (experienceFileRef.current) experienceFileRef.current.value = "";
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const inputId = e.target.id; // e.g., "education-0" or "certificate-1"
    const [section, indexStr] = inputId.split("-");

    const index = parseInt(indexStr);

    const fileName = file.name;
    const uuid = uuidv4();
    // const nameWithoutExt = fileName.split(".")[0];
    // const newFileName = `${uuid}-${nameWithoutExt}`;
    const newFileName = `${uuid}-${fileName}`;

    const formData = new FormData();
    formData.append("file", file, newFileName);

    try {
      const res = await axios.post(`${API_PATH}/api/FileAPI/UploadFiles`, formData, {
        params: {
          APIKEY: API_KEY,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      switch (section) {
        case "education":
          setEduDetailsStructure((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, file: newFileName } : item
            )
          );
          break;
        case "certification":
          setCertificationDetails((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, file: newFileName } : item
            )
          );
          break;
        case "experience":
          setExpDetails((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, file: newFileName } : item
            )
          );
          break;

      }
      console.log(res)
    } catch (error) {
      console.error("Upload error:", error);
    }
  }
  // ---------- Submit ----------
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const errors = getValidationErrors({ name, permanentAddress, mobile, email, userName, pass, confirmPass, gender });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false)
      return;
    }

    const formattedDate = (date: any) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = String(d.getFullYear());

      return `${year}-${month}-${day}`;
    };

    const data = {
      name: name || "",
      father_name: fatherName || "",
      father_occupation: occupation?.value || "",
      permanent_address: permanentAddress || "",
      local_address: localAddress || "",
      gender: (gender) ?? null,
      dob: formattedDate(date) || "",
      mobile: mobile || "",
      email: email || "",
      mobileno: mobile || "",
      usertype: 0,
      username: userName || "",
      password: pass || "",
      student_education: eduDetailsStructure.map((r) => ({
        qualification: r.qualification || "",
        institute: r.institution || "",
        board_university: r.university || "",
        passing_year: parseInt(r.year) || null,
        percentage: parseFloat(r.grade) || null,
        q_upload_path: r.file || '',
      })),
      student_certification: certificationDetails.map((r) => ({
        certification: r.certification || "",
        passing_year: parseInt(r.complletionYear) || null,
        c_upload_path: r.file,
      })),
      student_experience: expDetails.map((r) => ({
        organisation: r.organization || "",
        role: r.role || "",
        total_exp: r.totalExp || "",
        e_upload_path: r.file || "",
      })),

    }
    console.log(data)

    try {

      const res = await axios.post(`${API_PATH}/api/student1`, data, {
        params: {
          APIKEY: API_KEY
        }
      })
      console.log(res)
      toast.success('Student Registration Done Successfully!')

    } catch (error) {
      console.log(error)
    } finally {
      resetForm()
      setIsSubmitting(false)
    }
  };



  return (
    <div className="min-h-screen bg-[#f9fafb] px-5 py-5">
      <div className="container w-full max-w-screen-xl bg-white rounded-2xl shadow mx-auto flex flex-col h-[98vh]">
        <div className="border-b border-gray-200 px-6 py-4 shrink-0">
          <h1 className="text-xl font-bold">Student Registration Form</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleFormSubmit}>

            <div className="flex flex-col">
              <Label>Full Name <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formErrors.name) {
                    setFormErrors({ ...formErrors, name: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your name"
              />
              {formErrors.name && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Father's Name</Label>
              <input
                type="text"
                name="fatherName"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                className="rounded-lg border p-2"
                placeholder="Enter your father name"
              />
            </div>

            <div className="flex flex-col">
              <Label>Father's Occupation</Label>
              <CreatableSelect
                name="fatherOccupation"
                isClearable
                options={occupationOptions}
                value={occupation}
                onChange={(newValue) => setOccupation(newValue)}
                onCreateOption={handleCreate}
                placeholder="Select father occupation"
              />
            </div>

            <div className="flex flex-col">
              <Label>Permanent Address <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="text"
                name="permanentAddress"
                value={permanentAddress}
                onChange={(e) => {
                  setPermanentAddress(e.target.value);
                  if (formErrors.permanentAddress) {
                    setFormErrors({ ...formErrors, permanentAddress: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your permanent address"
              />
              {formErrors.permanentAddress && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.permanentAddress}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Local Address</Label>
              <input
                type="text"
                name="localAddress"
                value={localAddress}
                onChange={(e) => setLocalAddress(e.target.value)}
                className="rounded-lg border p-2"
                placeholder="Enter your local address"
              />
            </div>

            <div className="flex flex-col">
              <CustomRadioGroup
                label="Gender"
                name="gender"
                options={genderOptions}
                selected={gender}
                onChange={(val) => setGender(val as Gender)} // or just onChange={setGender} if props are typed to Gender
                required
                error={formErrors.gender}
                setFormErrors={setFormErrors}
              />
            </div>

            <div className="flex flex-col">
              <Label>Date of birth</Label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                placeholderText="Select date"
                dateFormat="dd-MM-yyyy"
                isClearable
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <Label>Mobile <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => {
                  const value = e.target.value;
                  setMobile(value);

                  // Reset form errors for mobile
                  if (formErrors.mobile) {
                    setFormErrors({ ...formErrors, mobile: "" });
                  }

                  // Auto-fill username with the last 4 digits of the mobile number
                  if (value.length >= 10) { // Assuming the mobile number is 10 digits
                    // setUserName(`user${value.slice(-4)}`); // Autofill username with last 4 digits
                    setUserName(`${value}`); // Autofill username with last 4 digits
                  } else {
                    setUserName(''); // Reset username if mobile is less than 10 digits
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your mobile"
              />
              {formErrors.mobile && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.mobile}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Email <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formErrors.email) {
                    setFormErrors({ ...formErrors, email: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your email"
              />
              {formErrors.email && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Username <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  if (formErrors.userName) {
                    setFormErrors({ ...formErrors, userName: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your username"
              />
              {formErrors.userName && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.userName}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Password <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="password"
                name="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                  if (formErrors.pass) {
                    setFormErrors({ ...formErrors, pass: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Enter your password"
              />
              {formErrors.pass && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.pass}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Confirm Password <span style={{ color: 'red' }}>*</span></Label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                  if (formErrors.confirmPass) {
                    setFormErrors({ ...formErrors, confirmPass: "" });
                  }
                }}
                className="rounded-lg border p-2"
                placeholder="Confirm your password"
              />
              {formErrors.confirmPass && (
                <span className="text-xs text-red-600 mt-1">
                  {formErrors.confirmPass}
                </span>
              )}
            </div>
            {/* ---------- Educational Details ---------- */}
            <div className="flex flex-col md:col-span-3">

              <div className="flex items-center gap-2">
                <label className="mb-2 font-medium text-gray-700">Educational Details</label>
                <button type="button" onClick={addEdu} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <FaPlus size={12} />
                </button>
              </div>
              {eduDetailsStructure.map((row, idx) => (
                <div key={idx} className="mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="qualification"
                        isClearable
                        options={qualificationOptions}
                        value={row.qualification ? { label: row.qualification, value: row.qualification.toLowerCase().replace(/\W/g, "") } : null}
                        onChange={(newValue) => {
                          handleEduDetailChange(idx, "qualification", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setQualificationOptions((prev) => [...prev, newOpt]);
                          handleEduDetailChange(idx, "qualification", newOpt.label);
                        }}
                        placeholder="Qualification"
                      />
                      <CreatableSelect
                        name="institution"
                        isClearable
                        options={institutionOptions}
                        value={row.institution ? { label: row.institution, value: row.institution.toLowerCase().replace(/\W/g, "") } : null}
                        onChange={(newValue) => {
                          handleEduDetailChange(idx, "institution", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setInstitutionOptions((prev) => [...prev, newOpt]);
                          handleEduDetailChange(idx, "institution", newOpt.label);
                        }}
                        placeholder="Institution"
                      />
                      <CreatableSelect
                        name="university"
                        isClearable
                        options={universityOptions}
                        value={row.university ? { label: row.university, value: row.university.toLowerCase().replace(/\W/g, "") } : null}
                        onChange={(newValue) => {
                          handleEduDetailChange(idx, "university", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setUniversityOptions((prev) => [...prev, newOpt]);
                          handleEduDetailChange(idx, "university", newOpt.label);
                        }}
                        placeholder="University"
                      />

                      <input
                        type="number"
                        name="year"
                        value={row.year}
                        onChange={(e) => handleEduDetailChange(idx, "year", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Passing"
                      />
                      <input
                        type="text"
                        name="grade"
                        value={row.grade}
                        onChange={(e) => handleEduDetailChange(idx, "grade", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Grade"
                      />

                      <input
                        type="file"
                        name={`education-${idx}`}
                        id={`education-${idx}`}
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={handleFileChange}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                        ref={educationFileRef}
                      />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {eduDetailsStructure.length > 1 && (
                        <button
                          type="button"
                          onClick={() => delEdu(idx)}
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
            {/* ---------- Certifications ---------- */}
            <div className="flex flex-col md:col-span-3">
              <div className="flex items-center gap-2">
                <label className="mb-2 font-medium text-gray-700">Certifications</label>
                <button type="button" onClick={addCert} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <FaPlus size={12} />
                </button>
              </div>
              {certificationDetails.map((row, idx) => (
                <div key={idx} className="mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="certification"
                        isClearable
                        options={certNameOptions}
                        value={row.certification ? { label: row.certification, value: row.certification.toLowerCase().replace(/\W/g, "") } : null}
                        onChange={(newValue) => {
                          handleCertificateDetailChange(idx, "certification", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setCertNameOptions((prev) => [...prev, newOpt]);
                          handleCertificateDetailChange(idx, "certification", newOpt.label);
                        }}
                        placeholder="Certification Name"
                      />

                      <input
                        type="number"
                        name="complletionYear"
                        value={row.complletionYear}
                        onChange={(e) => handleCertificateDetailChange(idx, "complletionYear", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Completion"
                      />

                      <input
                        type="file"
                        name={`certification-${idx}`}
                        id={`certification-${idx}`}
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={handleFileChange}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                        ref={certificationFileRef}
                      />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {certificationDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => delCert(idx)}
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
            {/* ---------- Experience ---------- */}
            <div className="flex flex-col md:col-span-3">
              <div className="flex items-center gap-5 mb-2">
                <div className="flex items-center gap-2">
                  <label className="mb-2 font-medium text-gray-700">Experiences Details</label>
                  <button type="button" onClick={addExp} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {expDetails.map((row, idx) => (
                <div key={idx} className="gap-2 mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="organization"
                        isClearable
                        options={expOrganizationOptions}
                        value={row.organization ? { label: row.organization, value: row.organization.toLowerCase().replace(/\W/g, "") } : null}

                        onChange={(newValue) => {
                          handleExperienceDetailChange(idx, "organization", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setExpOrganizationOptions((prev) => [...prev, newOpt]);
                          handleExperienceDetailChange(idx, "organization", newOpt.label);
                        }}
                        placeholder="Select Organization Name"
                      />

                      <CreatableSelect
                        name="role"
                        isClearable
                        options={expRoleOptions}
                        value={row.role ? { label: row.role, value: row.role.toLowerCase().replace(/\W/g, "") } : null}

                        onChange={(newValue) => {
                          handleExperienceDetailChange(idx, "role", newValue ? newValue.label : "");
                        }}
                        onCreateOption={(val) => {
                          const newOpt = createOption(val);
                          setExpRoleOptions((prev) => [...prev, newOpt]);
                          handleExperienceDetailChange(idx, "role", newOpt.label);
                        }}
                        placeholder="Select role"
                      />

                      <input
                        type="number"
                        name="totalExp"
                        value={row.totalExp}
                        onChange={(e) => handleExperienceDetailChange(idx, "totalExp", e.target.value)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Total Year of Experience"
                      />



                      <input
                        type="file"
                        name={`experience-${idx}`}
                        id={`experience-${idx}`}
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={handleFileChange}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                        ref={experienceFileRef}
                      />

                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {expDetails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => delExp(idx)}
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

        <div className="border-t border-gray-200 px-6 py-4 shrink-0 flex justify-end gap-3">
          <button onClick={resetForm} type="button" className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Reset Form
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
            onClick={handleFormSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loader border-2 border-t-transparent border-white rounded-full w-4 h-4 animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>

        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default RegistrationForm;
