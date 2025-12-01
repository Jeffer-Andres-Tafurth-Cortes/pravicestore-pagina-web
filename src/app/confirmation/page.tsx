"use client";

import { useEffect, useState } from "react";

export default function ConfirmacionPage() {
  const [status, setStatus] = useState("Procesando...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionId = params.get("id");

    if (!transactionId) return;

    fetch(`https://production.wompi.co/v1/transactions/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.data.status); // APPROVED, DECLINED, etc
      });
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Estado del pago:</h1>
      <h2>{status}</h2>
    </div>
  );
}
