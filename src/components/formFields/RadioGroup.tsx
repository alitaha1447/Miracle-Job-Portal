import React from "react";
import Label from "../form/Label";

type Option = { value: string | number; label: string };

type RadioGroupFieldProps = {
  label: string;
  name: string;
  options: Option[];
  selected?: string | number;
  onChange: (value: string | number) => void;
  required?: boolean;
  disabled?: boolean;
};

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
  // required = false,
  disabled = false,
  // error,
  // setFormErrors = () => {}, // ✅ just need this
}) => {
  return (
    <>
      <Label >
        {label}
        {/* {required && <span className="text-red-500 ml-1">*</span>} */}
      </Label>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const isChecked = String(selected) === String(option.value);

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`flex items-center gap-2 cursor-pointer 
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={isChecked}
                disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700 dark:text-gray-300">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default RadioGroupField;
