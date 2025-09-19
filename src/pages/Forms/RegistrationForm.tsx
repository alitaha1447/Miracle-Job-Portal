import React, { useState } from "react";
import Label from "../../components/form/Label";
import RadioGroupField from "../../components/formFields/RadioGroup";
import { FaPlus, FaMinus } from "react-icons/fa";
import CreatableSelect from "react-select/creatable";
import DatePicker from "react-datepicker";
import axios from 'axios';
import { getValidationErrors } from "../../utils/validations/studentRegistrationForm";


const API_PATH = import.meta.env.VITE_APP_API_PATH;
const API_KEY = import.meta.env.VITE_APP_API_KEY;
console.log('API URL:', API_PATH);

// ---------- Types ----------

type Option = { label: string; value: string };

type EduDetail = {
  // id: string;
  qualification: string;
  institution: string;
  university: string;
  year: string;
  grade: string;
  file: File | null;
};

type CertificateDetail = {
  id: string;
  certification: string;
  complletionYear: string;
  file: File | null;
};

type ExperienceDetail = {
  id: string;
  organization: string;
  role: string;
  totalExp: string; // years as string in UI
  fromdate?: string; // optional if you add date fields later
  todate?: string;   // optional if you add date fields later
  file: File | null;
};

type PersonalInfo = {
  name: string;
  fatherName: string;
  fatherOccupation: string;
  permanentAddress: string;
  localAddress: string;
  gender: number | null;     // 1|2|3|null
  dateOfBirth: string;       // yyyy-MM-dd
  mobile: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

type ChangeShim = { target: { name: string; value: any } };


const genderOptions = [
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
  { value: 3, label: "Prefer not to say" },
];

const createOption = (label: string): Option => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});
const toOption = (s: string | undefined | null): Option | null =>
  s ? { label: s, value: s.toLowerCase().replace(/\W/g, "") } : null;

const RegistrationForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ---------- Personal ----------
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    fatherName: "",
    fatherOccupation: "",
    permanentAddress: "",
    localAddress: "",
    gender: null,
    dateOfBirth: "",
    mobile: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  // father occupation options
  const [fatherOccOptions, setFatherOccOptions] = useState<Option[]>([
    createOption("Serviceman"),
    createOption("Businessman"),
    createOption("Government Employee"),
  ]);

  // ---------- Education ----------

  const [eduDetails, setEduDetails] = useState<EduDetail[]>([
    { qualification: "", institution: "", university: "", year: "", grade: "", file: null },
  ]);
  const [qualificationOptions, setQualificationOptions] = useState<Option[]>([
    createOption("B.Sc"),
    createOption("B.Tech"),
    createOption("MCA"),
  ]);
  const [institutionOptions, setInstitutionOptions] = useState<Option[]>([
    createOption("Truba"),
    createOption("LNCT"),
  ]);
  const [universityOptions, setUniversityOptions] = useState<Option[]>([
    createOption("RGPV"),
    createOption("BU"),
  ]);


  // ---------- Certifications ----------
  const [certificationDetails, setCertificationDetails] = useState<CertificateDetail[]>([
    { id: crypto.randomUUID(), certification: "", complletionYear: "", file: null },
  ]);
  const [certNameOptions, setCertNameOptions] = useState<Option[]>([
    createOption("AWS CCP"),
    createOption("Google DA"),
  ]);


  // ---------- Experience ----------
  const [expDetails, setExpDetails] = useState<ExperienceDetail[]>([
    { id: crypto.randomUUID(), organization: "", role: "", totalExp: "", file: null },
  ]);
  const [orgOptions, setOrgOptions] = useState<Option[]>([
    createOption("Truba"),
    createOption("LNCT"),
  ]);
  const [roleOptions, setRoleOptions] = useState<Option[]>([
    createOption("Frontend Developer"),
    createOption("Backend Developer"),
  ]);

  // ---------- One Universal Change Handler ----------
  const handleChange = (
    e: ChangeShim | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    section: "personal" | "edu" | "cert" | "exp",
    index?: number
  ) => {
    const { name, value } = (e as ChangeShim).target;

    if (section === "personal") {
      setPersonalInfo((prev) => ({ ...prev, [name]: value }));
      return;
    }

    if (typeof index !== "number") return;

    if (section === "edu") {
      setEduDetails((prev) => {
        const copy = [...prev];
        (copy[index] as any)[name] = value;
        return copy;
      });
      return;
    }

    if (section === "cert") {
      setCertificationDetails((prev) => {
        const copy = [...prev];
        (copy[index] as any)[name] = value;
        return copy;
      });
      return;
    }

    if (section === "exp") {
      setExpDetails((prev) => {
        const copy = [...prev];
        (copy[index] as any)[name] = value;
        return copy;
      });
    }
  };
  // handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // get the first selected file
    const inputId = e.target.id;


    if (!file) return;

  }
  // ---------- Select helpers (NO ()() currying) ----------
  const onSelectChange = (
    section: "personal" | "edu" | "cert" | "exp",
    index: number | undefined,
    opt: Option | null,
    name: string
  ) => {
    handleChange({ target: { name, value: opt?.label ?? "" } }, section, index);
  };

  const optionSetters: Record<string, React.Dispatch<React.SetStateAction<Option[]>> | undefined> = {
    fatherOccupation: setFatherOccOptions,
    qualification: setQualificationOptions,
    institution: setInstitutionOptions,
    university: setUniversityOptions,
    name: setCertNameOptions, // certification name
    organization: setOrgOptions,
    role: setRoleOptions,
  };

  const onSelectCreate = (
    section: "personal" | "edu" | "cert" | "exp",
    index: number | undefined,
    inputValue: string,
    name: string
  ) => {

    optionSetters[name]?.((prev) => [...prev, createOption(inputValue)]);
    handleChange({ target: { name, value: inputValue } }, section, index);
  };

  // ---------- Gender & DOB ----------
  const handleGenderChange = (val: string | number | undefined) => {
    const numeric = val === undefined || val === null ? null : Number(val);
    handleChange({ target: { name: "gender", value: numeric } }, "personal");
  };

  const handleDobChange = (d: Date | null) => {
    const val = d
      ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
      : "";
    handleChange({ target: { name: "dateOfBirth", value: val } }, "personal");
  };


  // ---------- Add / Remove rows ----------
  const addEdu = () =>
    setEduDetails((p) => [...p, { qualification: "", institution: "", university: "", year: "", grade: "", file: null }]);
  const delEdu = (idx: number) => setEduDetails((p) => p.filter((_, i) => i !== idx));

  const addCert = () =>
    setCertificationDetails((p) => [...p, { id: crypto.randomUUID(), certification: "", complletionYear: "", file: null }]);
  const delCert = (idx: number) => setCertificationDetails((p) => p.filter((_, i) => i !== idx));

  const addExp = () =>
    setExpDetails((p) => [...p, { id: crypto.randomUUID(), organization: "", role: "", totalExp: "", file: null }]);
  const delExp = (idx: number) => setExpDetails((p) => p.filter((_, i) => i !== idx));

  // ---------- Payload builder (snake_case) ----------

  const buildApiPayload = () => {
    return {
      // id: 0,
      // user_id: 0,
      name: personalInfo.name || "",
      father_name: personalInfo.fatherName || "",
      father_occupation: personalInfo.fatherOccupation || "",
      permanent_address: personalInfo.permanentAddress || "",
      local_address: personalInfo.localAddress || "",
      gender: personalInfo.gender ?? 0,      // send 0 if null (change if your API accepts null)
      dob: personalInfo.dateOfBirth || "",   // yyyy-MM-dd or ""
      mobile: personalInfo.mobile || "",
      email: personalInfo.email || "",
      mobileno: personalInfo.mobile || "",   // mirror
      usertype: 0,                           // set if needed
      username: personalInfo.userName || "",
      password: personalInfo.password || "",
      student_education: eduDetails.map((r) => ({
        // id: 0,
        // studentid: 0,
        qualification: r.qualification || "",
        institute: r.institution || "",
        board_university: r.university || "",
        // passing_year: toInt(r.year, 0),
        // percentage: toFloat(r.grade, 0),
        q_upload_path: "", // backend may fill after upload
      })),
      student_certification: certificationDetails.map((r) => ({
        // id: 0,
        // studentid: 0,
        certification: r.certification || "",
        passing_year: r.complletionYear,
        // passing_year: toInt(r.complletionYear, 0),
        c_upload_path: r.file,
      })),
      student_experience: expDetails.map((r) => ({
        // id: 0,
        // studentid: 0,
        organisation: r.organization || "",
        role: r.role || "",
        total_exp: r.totalExp || "",
        fromdate: r.fromdate ?? "", // add fields in UI if you need them
        todate: r.todate ?? "",
        e_upload_path: "",
      })),
    };
  };

  // ---------- Submit ----------
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { hasErrors, errors } = getValidationErrors(personalInfo);

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    const payload = buildApiPayload();

    console.log("SUBMIT JSON →", payload);


    // try {
    //   const res = await axios.post(`${API_PATH}//api/student`, payload, {
    //     params: {
    //       APIKEY: API_KEY
    //     }
    //   })
    //   console.log(res);

    // } catch (error) {
    //   console.log(error);

    // }

  };


  return (
    <div className="min-h-screen bg-[#f9fafb] px-5 py-5">
      <div className="container w-full max-w-screen-xl bg-white rounded-2xl shadow mx-auto flex flex-col h-[98vh]">
        <div className="border-b border-gray-200 px-6 py-4 shrink-0">
          <h1 className="text-xl font-bold">Student Registration Form</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleFormSubmit}>
            {/* Personal */}
            <div className="flex flex-col">
              <Label>Full Name</Label>
              <input
                type="text"
                name="name"
                value={personalInfo.name}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your name"
              />
              {formErrors["personal.name"] && (
                <span className="text-xs text-red-600 mt-1">{formErrors["personal.name"]}</span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Father's Name</Label>
              <input
                type="text"
                name="fatherName"
                value={personalInfo.fatherName}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your father name"
              />
            </div>

            <div className="flex flex-col">
              <Label>Father's Occupation</Label>
              <CreatableSelect
                name="fatherOccupation"
                isClearable
                options={fatherOccOptions}
                value={toOption(personalInfo.fatherOccupation)}
                onChange={(opt) => onSelectChange("personal", undefined, (opt as Option) ?? null, "fatherOccupation")}
                onCreateOption={(val) => onSelectCreate("personal", undefined, val, "fatherOccupation")}
                placeholder="Select father occupation"
              />
            </div>

            <div className="flex flex-col">
              <Label>Permanent Address</Label>
              <input
                type="text"
                name="permanentAddress"
                value={personalInfo.permanentAddress}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your permanent address"
              />
            </div>

            <div className="flex flex-col">
              <Label>Local Address</Label>
              <input
                type="text"
                name="localAddress"
                value={personalInfo.localAddress}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your local address"
              />
            </div>

            <div className="flex flex-col">
              <RadioGroupField
                label="Gender"
                name="gender"
                options={genderOptions}
                selected={personalInfo.gender ?? undefined}
                onChange={handleGenderChange}
                required
              />
              {formErrors["personal.gender"] && (
                <span className="text-xs text-red-600 mt-1">{formErrors["personal.gender"]}</span>
              )}
            </div>

            <div className="flex flex-col">
              <Label>Date of birth</Label>
              <DatePicker
                selected={personalInfo.dateOfBirth ? new Date(personalInfo.dateOfBirth) : null}
                onChange={handleDobChange}
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
              <Label>Mobile</Label>
              <input
                type="number"
                name="mobile"
                value={personalInfo.mobile}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your mobile"
              />
            </div>

            <div className="flex flex-col">
              <Label>Email</Label>
              <input
                type="text"
                name="email"
                value={personalInfo.email}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <Label>Username</Label>
              <input
                type="text"
                name="userName"
                value={personalInfo.userName}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your username"
              />
            </div>

            <div className="flex flex-col">
              <Label>Password</Label>
              <input
                type="password"
                name="password"
                value={personalInfo.password}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-col">
              <Label>Confirm Password</Label>
              <input
                type="password"
                name="confirmPassword"
                value={personalInfo.confirmPassword}
                onChange={(e) => handleChange(e, "personal")}
                className="rounded-lg border p-2"
                placeholder="Confirm your password"
              />
            </div>

            {/* ---------- Educational Details ---------- */}
            <div className="flex flex-col md:col-span-3">
              <label className="mb-2 font-medium text-gray-700">Educational Details</label>

              {eduDetails.map((row, idx) => (
                <div key={idx} className="mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="qualification"
                        isClearable
                        options={qualificationOptions}
                        value={toOption(row.qualification)}
                        onChange={(opt) => onSelectChange("edu", idx, (opt as Option) ?? null, "qualification")}
                        onCreateOption={(val) => onSelectCreate("edu", idx, val, "qualification")}
                        placeholder="Qualification"
                      />

                      <CreatableSelect
                        name="institution"
                        isClearable
                        options={institutionOptions}
                        value={toOption(row.institution)}
                        onChange={(opt) => onSelectChange("edu", idx, (opt as Option) ?? null, "institution")}
                        onCreateOption={(val) => onSelectCreate("edu", idx, val, "institution")}
                        placeholder="Institution"
                      />

                      <CreatableSelect
                        name="university"
                        isClearable
                        options={universityOptions}
                        value={toOption(row.university)}
                        onChange={(opt) => onSelectChange("edu", idx, (opt as Option) ?? null, "university")}
                        onCreateOption={(val) => onSelectCreate("edu", idx, val, "university")}
                        placeholder="University"
                      />

                      <input
                        type="number"
                        name="year"
                        value={row.year}
                        onChange={(e) => handleChange(e, "edu", idx)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Passing"
                      />

                      <input
                        type="text"
                        name="grade"
                        value={row.grade}
                        onChange={(e) => handleChange(e, "edu", idx)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Percentage / Grade"
                      />

                      <input
                        type="file"
                        name="experienceFile"
                        id="experienceFile"
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={(e) => handleFileChange(e)}
                        // onChange={(e) =>
                        //   handleChange({ target: { name: "file", value: e.target.files?.[0] ?? null } }, "edu", idx)
                        // }
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                      />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {idx === eduDetails.length - 1 && (
                        <button type="button" onClick={addEdu} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                          <FaPlus size={12} />
                        </button>
                      )}
                      {eduDetails.length > 1 && (
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
              <label className="mb-2 font-medium text-gray-700">Certifications</label>

              {certificationDetails.map((row, idx) => (
                <div key={row.id} className="mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="certification"
                        isClearable
                        options={certNameOptions}
                        value={toOption(row.certification)}

                        onChange={(opt) => onSelectChange("cert", idx, opt as Option, "certification")}
                        onCreateOption={(val) => onSelectCreate("cert", idx, val, "certification")}
                        placeholder="Certification Name"
                      />



                      <input
                        type="number"
                        name="complletionYear"
                        value={row.complletionYear}
                        onChange={(e) => handleChange(e, "cert", idx)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Year of Completion"
                      />

                      <input

                        type="file"
                        name="certificationsFile"
                        id="certificationsFile"
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={(e) => handleFileChange(e)}
                        // onChange={(e) =>
                        //   handleChange({ target: { name: "file", value: e.target.files?.[0] ?? null } }, "cert", idx)
                        // }
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
                      />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 w-16 justify-end">
                      {idx === certificationDetails.length - 1 && (
                        <button type="button" onClick={addCert} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                          <FaPlus size={12} />
                        </button>
                      )}
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
                <div key={row.id} className="gap-2 mb-3">
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full pr-16">
                      <CreatableSelect
                        name="organization"
                        isClearable
                        options={orgOptions}
                        value={toOption(row.organization)}


                        onChange={(opt) => onSelectChange("exp", idx, opt as Option, "organization")}
                        onCreateOption={(val) => onSelectCreate("exp", idx, val, "organization")}
                        placeholder="Select Organization Name"
                      />

                      <CreatableSelect
                        name="role"
                        isClearable
                        options={roleOptions}
                        value={toOption(row.role)}
                        onChange={(opt) => onSelectChange("exp", idx, opt as Option, "role")}
                        onCreateOption={(val) => onSelectCreate("exp", idx, val, "role")}
                        placeholder="Select Role"
                      />

                      <input
                        type="number"
                        name="totalExp"
                        value={row.totalExp}
                        onChange={(e) => handleChange(e, "exp", idx)}
                        className="border rounded-lg p-2 h-10 w-full"
                        placeholder="Total Year of Experience"
                      />

                      <input
                        type="file"
                        name="experiencesFile"
                        id="experiencesFile"
                        accept=".pdf,.doc,.docx,.png,.jpeg"
                        onChange={(e) => handleFileChange(e)}
                        className="block text-sm border rounded-lg cursor-pointer p-2 h-10 w-full"
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
          <button type="button" className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
