import React from "react";
import { Link } from "react-router-dom";
import "./ParticipantsPage.css";

export default function ParticipantsPage({ participants }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">Daftar Peserta</h1>

        <div className="card-grid">
          {participants.length > 0 ? (
            participants.map((p) => (
              <div className="card" key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.email}</p>
              </div>
            ))
          ) : (
            <p>Belum ada peserta terdaftar.</p>
          )}
        </div>

        <div className="btn-container">
          <Link to="/register">
            <button className="submit-btn">+ Daftar Peserta Baru</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
