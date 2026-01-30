"use client";

import styles from "./styles/Intro.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDollarSign,
  faBuilding,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.section
      className={styles.problemSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ICONO SUPERIOR */}
      <motion.div
        className={styles.iconTop}
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        viewport={{ once: true }}
      >
        <FontAwesomeIcon icon={faBell} />
      </motion.div>

      {/* TITULO */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        El riesgo legal que enfrentan las empresas con la Reforma Laboral 2026
      </motion.h2>

      {/* DESCRIPCION */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        Con la entrada en vigor de la{" "}
        <strong>Reforma Laboral 2026 en Colombia</strong>, las empresas que no
        actualicen sus procesos, contratos y políticas internas enfrentan
        <span className={styles.danger}>
          {" "}
          multas económicas, sanciones administrativas y riesgos jurídicos
          graves.
        </span>
      </motion.p>

      {/* PREGUNTAS */}
      <motion.p
        className={styles.question}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        viewport={{ once: true }}
      >
        ¿Tu empresa ya está preparada para cumplir con la Reforma Laboral 2026?
      </motion.p>

      <motion.p
        className={styles.question}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        ¿Tus contratos laborales, reglamentos y manuales internos están
        actualizados?
      </motion.p>

      {/* ALERT BOX */}
      <motion.div
        className={styles.alertBox}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Las empresas que no cumplan con la normativa laboral vigente pueden
        enfrentar multas de hasta <strong>$50.000.000</strong>, procesos
        sancionatorios, demandas laborales y clausuras temporales de sus
        operaciones.
      </motion.div>

      {/* GRID DE CARDS CON STAGGER */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* CARD 1 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <h3>Multas y sanciones laborales</h3>
          <p>
            Incumplir la reforma laboral puede generar sanciones económicas
            elevadas y afectar la estabilidad financiera de tu empresa.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h3>Clausuras y Suspensión de actividades</h3>
          <p>
            Las autoridades pueden ordenar la suspensión parcial o total de
            operaciones por incumplimientos labores reiterados.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3>Demandas y riesgos jurídicos</h3>
          <p>
            La falta de actualización normativa incrementa el riesgo de demandas
            laborales, procesos judiciales y conflictos legales.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
