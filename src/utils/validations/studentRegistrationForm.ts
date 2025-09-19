type PersonalInfo = {
    name: string;
    fatherName: string;
    fatherOccupation: string;
    permanentAddress: string;
    localAddress: string;
    gender: number | null;
    dateOfBirth: string;
    mobile: string;
    email: string;
    userName: string;
    password: string;
    confirmPassword: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const getValidationErrors = (personalInfo: PersonalInfo) => {
    const errors: Record<string, string> = {};

    // name
    if (!personalInfo.name?.trim()) {
        errors["personal.name"] = "Full name is required.";
    }

    // address → using permanentAddress as 'address'
    if (!personalInfo.permanentAddress?.trim()) {
        errors["personal.permanentAddress"] = "Address is required.";
    }
    // gender
    if (personalInfo.gender === null || ![1, 2, 3].includes(personalInfo.gender)) {
        errors["personal.gender"] = "Please select your gender.";
    }

    // email
    if (!personalInfo.email?.trim()) {
        errors["personal.email"] = "Email is required.";
    } else if (!EMAIL_RE.test(personalInfo.email)) {
        errors["personal.email"] = "Enter a valid email address.";
    }

    // username
    if (!personalInfo.userName?.trim()) {
        errors["personal.userName"] = "Username is required.";
    }

    // password
    if (!personalInfo.password?.trim()) {
        errors["personal.password"] = "Password is required.";
    } else if (personalInfo.password.length < 6) {
        errors["personal.password"] = "Password must be at least 6 characters.";
    }

    return { hasErrors: Object.keys(errors).length > 0, errors };
};
