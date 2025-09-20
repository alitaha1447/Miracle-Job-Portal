import React from "react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";

// Type for each option
type Option = {
    value: string | number;
    label: string;
};

// Props for the component
interface CustomRadioGroupProps {
    label: string;
    name: string;
    options: Option[];
    selected: string | number | null;   // <-- only value, not full object
    onChange: (value: string | number) => void;
    required?: boolean;
    error?: string;
    setFormErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
    label,
    name,
    options,
    selected,
    onChange,
    required = false,
    error,
    setFormErrors = () => { },
}) => {
    return (
        <FormGroup tag="fieldset" className="mb-3">
            <div className="d-flex">
                <Label className="d-block mb-2">{label}</Label>
                {required && <span style={{ color: 'red' }}>*</span>}
            </div>

            <Row>
                {options.map((option) => (
                    <Col xs="12" sm="6" md="auto" key={option.value}>
                        <FormGroup check className="d-flex align-items-center">
                            <Input
                                type="radio"
                                name={name}
                                value={option.value}
                                id={`${name}-${option.value}`}
                                checked={selected === option.value}   // ✅ compare values directly
                                onChange={() => {
                                    onChange(option.value);            // ✅ only pass value
                                    setFormErrors((prev) => ({
                                        ...prev,
                                        [name]: "",
                                    }));
                                }}
                                className="me-2"
                            />
                            <Label check for={`${name}-${option.value}`} className="mb-0">
                                {option.label}
                            </Label>
                        </FormGroup>
                    </Col>
                ))}
            </Row>

            {error && (
                <span className="text-xs text-red-600 mt-1">
                    {error}
                </span>
            )}
        </FormGroup>
    );
};

export default CustomRadioGroup;
