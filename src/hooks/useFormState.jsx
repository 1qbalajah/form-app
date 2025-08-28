import { useState } from "react";

export function useFormState(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!values.email.includes("@")) newErrors.email = "Email tidak valid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return { values, errors, handleChange, validate };
}
