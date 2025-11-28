"use client";

import { useState } from "react";
import styles from "./styles/FAQ.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faBuilding,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "¿En qué formato recibo los documentos?",
      answer:
        "Recibes todos los documentos en formato PDF para lectura y Word para que puedas editarlos según las necesidades específicas de tu empresa.",
    },
    {
      question: "¿Cuánto tiempo tarda la carga?",
      answer: "La entrega de los documentos es inmediata después del pago.",
    },
    {
      question: "¿La asesoría se agenda sola?",
      answer:
        "Sí, después de la compra podrás elegir el día y hora disponible.",
    },
    {
      question: "¿Los documentos están actualizados a 2025?",
      answer:
        "Sí, todos nuestros documentos están actualizados conforme a la normativa vigente.",
    },
    {
      question: "¿Qué pasa si tengo dudas después de comprar?",
      answer:
        "Puedes contactar a nuestro equipo de soporte en cualquier momento.",
    },
    {
      question: "¿Hay garantía de devolución?",
      answer:
        "Sí, ofrecemos garantía en caso de presentarse inconvenientes verificables.",
    },
    {
      question: "¿Los packs sirven para todo tipo de empresas?",
      answer: "Sí, están diseñados para micro, pequeñas y medianas empresas.",
    },
    {
      question: "¿Necesito conocimientos legales para implementar?",
      answer:
        "No, los documentos están listos para usar con instrucciones claras.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ICONOS SUPERIORES */}
      <section className={styles.iconsContainer}>
        <div className={styles.iconItem}>
          <FontAwesomeIcon icon={faBalanceScale} className={styles.iconBlue} />
          <p className={styles.iconLabel}>Pravice Abogados</p>
        </div>

        <div className={styles.iconItem}>
          <FontAwesomeIcon icon={faBuilding} className={styles.iconGray} />
          <p className={styles.iconLabel}>Registro Cámara De Comercio</p>
        </div>

        <div className={styles.iconItem}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.iconGreen} />
          <p className={styles.iconLabel}>Pago 100% Seguro</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <p className={styles.subtitle}>
          Resolvemos las dudas más comunes de nuestros clientes.
        </p>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.question} ${
                  openIndex === index ? styles.questionOpen : ""
                }`}
                onClick={() => toggle(index)}
              >
                <span
                  className={`${styles.iconSign} ${
                    openIndex === index ? styles.iconSignOpen : ""
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
                {faq.question}
              </button>

              <div
                className={`${styles.answer} ${
                  openIndex === index ? styles.answerOpen : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* CAJA FINAL */}
        <div className={styles.box}>
          <p className={styles.boxTitle}>¿Tienes Otra Pregunta?</p>
          <button className={styles.button}>Contactar Asesor</button>
        </div>
      </section>
    </>
  );
}
