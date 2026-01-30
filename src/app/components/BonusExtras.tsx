"use client";

import styles from "./styles/BonusExtras.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faBook,
  faHeadset,
  faPlus,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/Toast";

export default function BonusExtras() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const extraService = {
    id: 99,
    name: "Asesoría legal personalizada (1 hora)",
    price: 350000,
    image: "/logo_pravice.png",
    quantity: 1,
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="bonus-title"
      aria-describedby="bonus-description"
    >
      {/* TÍTULO */}
      <motion.h2
        id="bonus-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        <FontAwesomeIcon icon={faGift} /> Bonus y extras incluidos en los packs
        Reforma Laboral 2026
      </motion.h2>

      {/* SUBTÍTULO */}
      <motion.div
        id="bonus-description"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={styles.subtitle}
      >
        Todos los packs legales para la Reforma Laboral 2026 incluyen descarga
        inmediata, manual práctico de implementación y asesoría jurídica
        gratuita según el plan elegido.
      </motion.div>

      {/* TARJETAS */}
      <motion.div
        className={styles.cards}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/** CARD 1 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon
            icon={faDownload}
            className={styles.icon}
            aria-label="Descarga inmediata de documentos legales"
          />
          <h3>Descarga inmediata de documentos legales</h3>
          <p>
            Acceso instantáneo a todos los formatos legales para cumplir la
            Reforma Laboral 2026 una vez confirmado el pago
          </p>
        </motion.div>

        {/** CARD 2 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon
            icon={faBook}
            className={styles.icon}
            aria-label="Descarga inmediata de documentos legales"
          />
          <h3>Manual práctico de implementación laboral</h3>
          <p>
            Guía jurídica paso a paso para implementar correctamente la Reforma
            Laboral 2026 en tu empresa.
          </p>
        </motion.div>

        {/** CARD 3 */}
        <motion.div
          className={styles.card}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4 }}
        >
          <FontAwesomeIcon
            icon={faHeadset}
            className={styles.icon}
            aria-label="Descarga inmediata de documentos legales"
          />
          <h3>Asesoría legal incluida</h3>
          <p>
            Acompañamiento jurídico por abogados expertos en Derecho Laboral
            según el pack contratado.
          </p>
        </motion.div>
      </motion.div>

      {/* EXTRA OPCIONAL */}
      <motion.div
        className={styles.extraBox}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3>Asesoría legal personalizada adicional</h3>
        <p>
          <FontAwesomeIcon icon={faPlus} /> Añade 1 hora de asesoría legal
          personalizada con un abogado especialista en Reforma Laboral 2026 y
          cumplimiento normativo.
        </p>

        <button
          className={styles.extraButton}
          onClick={() => {
            addToCart(extraService);
            showToast(`✔ Asesoria agregada al carrito`);
          }}
        >
          <FontAwesomeIcon icon={faPlus} /> Añadir asesoría extra
          <span>(+ $350.000)</span>
        </button>
      </motion.div>
    </section>
  );
}
