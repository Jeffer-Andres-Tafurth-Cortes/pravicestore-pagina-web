"use client";

import styles from "./styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open("https://api.whatsapp.com/send?phone=573206353180", "_blank");
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* ========== PRE FOOTER / CTA ========== */}
      <section className={styles.preFooter}>
        <div className={styles.overlay} />

        <div className={styles.preFooterContent}>
          <p className={styles.topText}>PRAVICE ABOGADOS</p>

          <h2 className={styles.title}>No arriesgues a tu empresa</h2>

          <p className={styles.subtitle}>
            Cumple hoy con la Reforma Laboral 2026 y evita sanciones legales
          </p>

          <div className={styles.banner}>
            <FontAwesomeIcon icon={faFire} />
            <span>
              Oferta limitada: los precios aumentarán después del 31 de enero
            </span>
          </div>
        </div>
      </section>

      {/* ========== FOOTER REAL ========== */}
      <section className={styles.footerMain}>
        <div className={styles.columns}>
          <div>
            <h3>Pravice Abogados</h3>
            <p>
              Firma legal especializada en cumplimiento normativo y aplicación
              de la Reforma Laboral 2026 para empresas en Colombia.
            </p>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              <li>Implementación Reforma Laboral</li>
              <li>Contratos laborales actualizados</li>
              <li>Asesoría legal empresarial</li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>WhatsApp: +57 320 635 3180</li>
              <li>Atención nacional</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Aviso legal</li>
              <li>Política de privacidad</li>
              <li>Términos del servicio</li>
            </ul>
          </div>
        </div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Pravice Abogados. Todos los derechos
          reservados.
        </div>
      </section>

      {/* ========== WHATSAPP FLOAT ========== */}
      <button
        className={styles.whatsappBtn}
        aria-label="Contactar por WhatsApp"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
    </footer>
  );
}
