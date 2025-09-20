type Test = {
    name: string;
    permanentAddress: string;
    mobile: string;
    email: string;
    userName: string;
    pass: string;
    confirmPass: string
    gender: number | null
}

export type ValidationResult = {
    errors: Record<string, string>;
};


const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const getValidationErrors = ({ name, permanentAddress, mobile, email, userName, pass, confirmPass, gender }: Test) => {
    const errors: Record<string, string> = {};

    // name
    if (!name?.trim()) {
        errors["name"] = "Full name is required.";
    }

    // address → using permanentAddress as 'address'
    if (!permanentAddress?.trim()) {
        errors["permanentAddress"] = "Address is required.";
    }
    // gender
    if (gender === null) {
        console.log(gender)
        errors.gender = "Gender is a mandatory field!";
    }

    if (!mobile.trim()) {
        errors["mobile"] = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobile)) {
        errors["mobile"] = "Mobile number must be exactly 10 digits";
    }
    // gender
    // if (personalInfo.gender === null || ![1, 2, 3].includes(personalInfo.gender)) {
    //     errors["personal.gender"] = "Please select your gender.";
    // }


    if (!email.trim()) {
        errors["email"] = "Email is required.";
    } else if (!EMAIL_RE.test(email)) {
        errors["email"] = "Enter a valid email address.";
    }

    // username
    if (!userName?.trim()) {
        errors["userName"] = "Username is required.";
    }

    // password
    if (!pass.trim()) {
        errors.pass = "Password is required";
    } else if (pass.length < 4) {
        errors.pass = "Password must be at least 6 characters";
    }

    if (!confirmPass.trim()) {
        errors.confirmPass = "Confirm Password is required";
    } else if (pass !== confirmPass) {
        errors.confirmPass = "Passwords do not match";
    }

    return errors;
};
