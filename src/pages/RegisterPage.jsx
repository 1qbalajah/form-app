import React, { useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useFormState } from "../hooks/useFormState";

export default function RegisterPage({ onAdd }) {
  const { values, errors, handleChange, validate } = useFormState({
    name: "",
    email: ""
  });

  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    startTransition(() => {
      const newParticipant = {
        id: Date.now(),
        name: values.name,
        email: values.email
      };
      onAdd(newParticipant);
      setTimeout(() => navigate("/"), 1000); // Simulasi loading
    });
  };

  return (
    <div className="container">
      <h1>Formulir Pendaftaran</h1>
      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>
        <button className="submit-btn" disabled={isPending}>
          {isPending ? "Mendaftar..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}
