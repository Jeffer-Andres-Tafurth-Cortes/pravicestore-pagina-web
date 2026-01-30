"use client";

import styles from "./styles/Packs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";
import { useToast } from "../components/Toast";

type Pack = {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
  time: string;
  image: string;
  items: string[];
};

const packs: Pack[] = [
  {
    id: 1,
    name: "Pack Express",
    price: 299000,
    description:
      "Ideal para micro y pequeñas empresas que necesitan cumplir la Reforma Laboral 2026 sin sanciones.",
    color: styles.express,
    time: "15 Minutos de asesoría gratuita",
    image: "/logo_pravice.png",
    items: [
      "Contratos Laborales a término fijo (Modelo Actualizado).",
      "Manual básico de implementación (4 pasos críticos).",
      "Política corporativa, control al acoso laboral.",
      "Formato  de contestación de renuncia. ",
      "Acta de Socialización (Incluida en la guía rápida).",
      "Formato PDF y Word editables.",
    ],
  },
  {
    id: 2,
    name: "Pack Esencial",
    price: 599000,
    description:
      "Protección legal frente a sanciones frecuentes del Ministerio de Trabajo.",
    color: styles.essential,
    time: "30 Minutos de asesoría gratuita",
    image: "/logo_pravice.png",
    items: [
      "Todo el Pack Express.",
      "Reglamento interno del Trabajo (RIT - Versión estándar).",
      "Contratos término fijo + término indefinido.",
      "Políticas esenciales: Acoso laboral + Tratamiento de Datos.",
      "Procedimiento disciplinario básico (Citación y Descargos).",
      "Contestación de renuncias - Paz y salvos básicos.",
      "Manual completo paso a paso.",
    ],
  },
  {
    id: 3,
    name: "Full Premium",
    price: 999000,
    description:
      "Blindaje jurídico integral frente a fiscalizaciones del Mintrabajo.",
    color: styles.premium,
    time: "1 hora de asesoría personalizada",
    image: "/logo_pravice.png",
    items: [
      "Todo el Pack Esencial.",
      "Contratos: Fijo + Indefinido + Obra/Labor.",
      "Reglamento interno de trabajo Integral (Con Checklist).",
      "Políticas completas: Acoso, Violencia Sexual, Contratación.",
      "Porcedimietno disciplinario avanzado.",
      "Flujogramas de implementación y auditoría interna. ",
      "Manual Completo de 12 pasos.",
      "Revisión de documentos Existentes.",
    ],
  },
];

export default function Packs() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (
    <motion.section
      id="packs"
      aria-labelledby="packs-title"
      aria-describedby="packs-description"
      className={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        id="packs-title"
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <FontAwesomeIcon icon={faBuilding} /> Comparativo de Packs Reforma
        Laboral 2026
      </motion.h2>

      <motion.p
        id="packs-description"
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Elige el pack legal adecuado para cumplir la Reforma Laboral 2026 en
        Colombia según el tamaño y nivel de riesgo de tu empresa.
      </motion.p>

      {/* GRID con STAGGER */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {packs.map((pack, index) => (
          <motion.div
            key={pack.id}
            className={`${styles.card} ${pack.color}`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* BADGE CON EFECTO POP */}
            {index === 2 && (
              <motion.span
                className={styles.recommended}
                aria-label="Pack más recomendado para cumplir la Reforma Laboral 2026"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "backOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faStar} /> Más Recomendado
              </motion.span>
            )}

            <h3>{pack.name} - reforma laboral 2026</h3>

            <div
              className={styles.price}
              aria-label={`Precio del ${pack.name} para implementación Reforma Laboral 2026`}
            >
              ${pack.price.toLocaleString("es-CO")}
            </div>

            <p className={styles.desc}>{pack.description}</p>

            <div className={styles.timeBadge}>{pack.time}</div>

            <ul className={styles.packsList}>
              {pack.items.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.itemPack}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={faCheck} /> {item}
                </motion.li>
              ))}
            </ul>

            {/* BOTÓN */}
            <motion.button
              className={styles.buyButton}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                addToCart({
                  id: pack.id,
                  name: pack.name,
                  price: pack.price,
                  image: pack.image,
                  quantity: 1,
                });
                showToast(`✔ ${pack.name} agregado al carrito`);
              }}
            >
              Comprar {pack.name} Reforma Laboral 2026
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.note}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        💡 Todos nuestros packs están diseñados y validados por abogados
        especialistas en Derecho Laboral.
      </motion.div>
    </motion.section>
  );
}
