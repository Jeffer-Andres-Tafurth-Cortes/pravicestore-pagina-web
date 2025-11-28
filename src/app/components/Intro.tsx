import styles from "./styles/Intro.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDollarSign,
  faBuilding,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  return (
    <section className={styles.problemSection}>
      <div className={styles.iconTop}>
        <FontAwesomeIcon icon={faBell} />
      </div>

      <h2 className={styles.title}>El Problema Que Enfrentan Las Empresas</h2>

      <p className={styles.description}>
        Con la nueva <strong>Reforma Laboral 2025</strong>, las empresas que no
        implementen los cambios enfrentan
        <span className={styles.danger}> multas millonarias y sanciones.</span>
      </p>

      <p className={styles.question}>¿Tu empresa ya está preparada?</p>
      <p className={styles.question}>
        ¿Tienes los contratos y manuales actualizados?
      </p>

      <div className={styles.alertBox}>
        Las empresas no preparadas enfrentan riesgos de hasta $50,000,000 en
        multas y posibles clausuras temporales.
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <h3>Multas Millonarias</h3>
          <p>Sanciones económicas que pueden afectar fuertemente tu empresa.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h3>Clausuras Temporales</h3>
          <p>Suspensión de operaciones por incumplimiento.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3>Riesgos Legales</h3>
          <p>Demandas laborales y problemas jurídicos.</p>
        </div>
      </div>
    </section>
  );
}
