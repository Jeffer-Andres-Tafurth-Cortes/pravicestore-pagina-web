"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Footer.module.css";

const handleClick = () => {
  window.open("https://api.whatsapp.com/send?phone=573206353180", "_blank");
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.content}>
          <p className={styles.topText}>PRAVICE ABOGADOS</p>

          <h1 className={styles.title}>No Arriesgues A Tu Empresa</h1>

          <p className={styles.subtitle}>
            Cumple hoy con la Reforma Laboral 2026 y evita sanciones
          </p>

          <div className={styles.banner}>
            <FontAwesomeIcon icon={faFire} className={styles.icon} />
            <span>
              OFERTA LIMITADA: Los precios aumentarán después del 31 de enero
            </span>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.whatsappBtn}
          aria-label="whatsapp"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}
