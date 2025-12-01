"use client";

import styles from "./styles/Packs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

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
    description: "Ideal para micro y pequeñas empresas.",
    color: styles.express,
    time: "15 Minutos de asesoría gratuita",
    image: "/packs/express.png",
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
    description: "Protege frente a sanciones frecuentes.",
    color: styles.essential,
    time: "30 Minutos de asesoría gratuita",
    image: "/packs/esencial.png",
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
    description: "Blindaje total frente a Mintrabajo.",
    color: styles.premium,
    time: "1 hora de asesoría personalizada",
    image: "/packs/premium.png",
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
    <section id="packs" className={styles.section}>
      <h2 className={styles.title}>📊 Comparativo de Packs</h2>
      <p className={styles.subtitle}>
        Elige el pack que mejor se adapta a las necesidades de tu empresa
      </p>

      <div className={styles.grid}>
        {packs.map((pack, index) => (
          <div key={pack.id} className={`${styles.card} ${pack.color}`}>
            {/* BADGE */}
            {index === 2 && (
              <span className={styles.recommended}>
                <FontAwesomeIcon icon={faStar} /> Más Recomendado
              </span>
            )}

            {/* NOMBRE */}
            <h3>{pack.name}</h3>

            {/* PRECIO */}
            <div className={styles.price}>
              ${pack.price.toLocaleString("es-CO")}
            </div>

            {/* DESCRIPCIÓN */}
            <p className={styles.desc}>{pack.description}</p>

            {/* TIEMPO */}
            <div className={styles.timeBadge}>{pack.time}</div>

            {/* LISTA */}
            <ul className={styles.packsList}>
              {pack.items.map((item, i) => (
                <li key={i} className={styles.itemPack}>
                  <FontAwesomeIcon icon={faCheck} /> {item}
                </li>
              ))}
            </ul>

            {/* BOTÓN */}
            <button
              className={styles.buyButton}
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
              Comprar {pack.name}
            </button>
          </div>
        ))}
      </div>

      {/* MENSAJE */}
      <div className={styles.note}>
        💡 Todos nuestros packs están diseñados y validados por abogados
        especialistas en Derecho Laboral.
      </div>
    </section>
  );
}
