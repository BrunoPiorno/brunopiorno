import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import Chatbot from "./Chatbot";
import starleyImage from "../images/starleyweb.png";
import josejoseImage from "../images/josejose.png";
import protorneosImage from "../images/protorneo.png";
import tenisDeMesaImage from "../images/tenisdemesatrenque.com.ar_.png";
import dialogarImage from "../images/dialogar.png";
import "./LandingPages.css";

const LandingPages = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Agregar clase al body para esta página
    document.body.classList.add("landing-pages-page");

    return () => {
      // Limpiar clase al desmontar
      document.body.classList.remove("landing-pages-page");
    };
  }, []);

  const projects = [
    {
      title: "Starley",
      description:
        locale === "es"
          ? "Sitio WordPress con tema Flatsome para catálogo de productos e información empresarial. Desarrollo de mejoras personalizadas y nuevas funcionalidades para optimizar la experiencia de usuario y la presentación de productos."
          : "WordPress site with Flatsome theme for product catalog and company information. Development of custom improvements and new functionalities to optimize user experience and product presentation.",
      image: starleyImage,
      url: "https://starley.com.ar",
    },
    {
      title: "José José",
      description:
        locale === "es"
          ? "Desarrollado a medida con WordPress como CMS, utilizando PHP, MySQL, HTML5, SCSS y JavaScript. Tema completamente personalizado sin uso de plantillas preexistentes, optimizado para rendimiento, SEO y móvil."
          : "Custom-designed website using WordPress as CMS, developed with PHP, MySQL, HTML5, CSS3, and JavaScript. Fully personalized theme with no prebuilt templates, optimized for performance, SEO, and mobile compatibility.",
      image: josejoseImage,
      url: "https://www.josejoseoficial.com.mx/",
    },
    {
      title: "Protorneos",
      description:
        locale === "es"
          ? "Sitio web liviano y estático desarrollado con HTML5, CSS3 y JavaScript puro. Diseño responsive, estructura optimizada para velocidad de carga y fácil mantenimiento, ideal para mostrar información institucional y deportiva sin depender de CMS."
          : "Lightweight and static website built with pure HTML5, CSS3, and JavaScript. Fully responsive, optimized for fast loading and easy maintenance, ideal for showcasing sports or institutional information without a CMS.",
      image: protorneosImage,
      url: "https://protorneos.com",
    },
    {
      title: "Tenis De Mesa Trenque",
      description:
        locale === "es"
          ? "Desarrollamos un sitio web informativo moderno y dinámico para el club de Tenis de Mesa en Trenque Lauquen. El proyecto fue realizado en React, lo que garantiza una experiencia rápida, fluida y adaptable en cualquier dispositivo."
          : "We developed a modern and dynamic informative website for the Table Tennis club in Trenque Lauquen. The project was built with React, guaranteeing a fast, fluid and adaptable experience on any device.",
      image: tenisDeMesaImage,
      url: "https://tenisdemesatrenque.com.ar/",
    },
    {
      title: "Asesoría Dialogar",
      description:
        locale === "es"
          ? "Landing page profesional desarrollada con WordPress para servicios de asesoría contable y financiera. Diseño optimizado para generar confianza y conversiones, con formulario de contacto integrado, sección de servicios detallados y testimonios de clientes. Estructura SEO-friendly con enfoque en la generación de leads y posicionamiento local."
          : "Professional landing page developed with WordPress for accounting and financial advisory services. Conversion-optimized design focused on building trust, with integrated contact form, detailed services section, and client testimonials. SEO-friendly structure with emphasis on lead generation and local positioning.",
      image: dialogarImage,
      url: "https://asesoriadialogar.com.ar/",
    },
  ];

  const iconPalette = {
    teal: "linear-gradient(135deg, #0ea5e9, #34d399)",
    violet: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    amber: "linear-gradient(135deg, #f97316, #facc15)",
    slate: "linear-gradient(135deg, #334155, #64748b)",
    emerald: "linear-gradient(135deg, #10b981, #22d3ee)",
    rose: "linear-gradient(135deg, #ec4899, #f97316)",
  };

  const iconLibrary = {
    target: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="16"
          y1="4"
          x2="16"
          y2="28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <line
          x1="4"
          y1="16"
          x2="28"
          y2="16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 12L16 7l10 5-10 5-10-5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M6 18l10 5 10-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <path
          d="M6 23l10 5 10-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.4"
        />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M16 6v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 16h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 8l-16 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M8 8l16 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    ),
    flow: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="22" cy="6" r="3" fill="currentColor" opacity="0.7" />
        <circle
          cx="22"
          cy="22"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="10" cy="24" r="3" fill="currentColor" opacity="0.7" />
        <path
          d="M13 11l6 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 20l-8 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M18 8l-5 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    portal: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="7"
          y="7"
          width="18"
          height="18"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M7 16h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 7v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 22l6-8 6 4 8-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 26h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
        <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.7" />
        <circle cx="26" cy="8" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    layers2: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="6"
          y="6"
          width="20"
          height="9"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="6"
          y="17"
          width="20"
          height="9"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M11 11h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 22h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    automate: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 5v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 23v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 16h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M23 16h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 8l2.8 2.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M21.2 21.2L24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M8 7h9a5 5 0 015 5v13H8a3 3 0 01-3-3V10a3 3 0 013-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M15 7v18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    pulse: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 18h5l2-6 4 12 3-9h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="6"
          y="6"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="6"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="6"
          y="18"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="18"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    funnel: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 8h20l-8 9v7l-4 2v-9L6 8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    stack: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="6"
          y="8"
          width="20"
          height="5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="9"
          y="15"
          width="14"
          height="5"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.7"
        />
        <rect
          x="12"
          y="22"
          width="8"
          height="4"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>
    ),
    pen: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M8 24l2-6L22 6l4 4-10 12-6 2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 8l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M16 4l10 4v8c0 6-4 11-10 12-6-1-10-6-10-12V8l10-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M16 10v10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="9"
          y="4"
          width="14"
          height="24"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M11 8L5 16l6 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 8l6 8-6 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 6l-6 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    plug: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M12 6v6M20 6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 12h14v6a7 7 0 01-7 7h-0a7 7 0 01-7-7v-6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 25v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    radar: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" />
        <path
          d="M16 16l7-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M16 4c4 1 8 5 9 9l-7 7-7-7c1-4 5-8 9-9z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="19"
          cy="11"
          r="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 18l-2 6 6-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="5"
          y="7"
          width="22"
          height="20"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 4v6M22 4v6M5 13h22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
        <circle cx="20" cy="23" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 20l3-7 5-1-3 7-5 1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M4 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    nodes: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <circle cx="24" cy="10" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="24" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="22" cy="24" r="3" fill="currentColor" />
        <path
          d="M10 20l-2-8 14-4 2 12-12 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    timeline: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 16h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="11"
          cy="16"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="21"
          cy="16"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="6" cy="16" r="1.5" fill="currentColor" />
        <circle cx="26" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M10 5h12l4 5v17H10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M22 5v5h5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 17h8M14 21h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    signal: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect x="7" y="19" width="3" height="7" rx="1.5" fill="currentColor" />
        <rect
          x="13.5"
          y="15"
          width="3"
          height="11"
          rx="1.5"
          fill="currentColor"
          opacity="0.7"
        />
        <rect
          x="20"
          y="10"
          width="3"
          height="16"
          rx="1.5"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    ),
    path: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle
          cx="9"
          cy="9"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="23"
          cy="23"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M11 11l6 6h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    focus: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="12"
          y="12"
          width="8"
          height="8"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    cycle: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M10 8h12v6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 24H10v-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 14l-3-3 3-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 18l3 3-3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M12 20l-2 2a5 5 0 007 7l2-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 12l2-2a5 5 0 00-7-7l-2 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 20l8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    bottleneck: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M6 12h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 20h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="14"
          y="12"
          width="4"
          height="8"
          rx="2"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="8" cy="12" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    spreadsheet: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 14h20M6 22h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 6v20M20 6v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    ),
    puzzle: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <path
          d="M12 6h4a2 2 0 012 2v2a2 2 0 104 0V8a2 2 0 012-2h4v8h-2a2 2 0 000 4h2v8h-4a2 2 0 01-2-2v-2a2 2 0 10-4 0v2a2 2 0 01-2 2h-4v-8H8a2 2 0 110-4h4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    scatter: (
      <svg viewBox="0 0 32 32" className="lp-icon-svg">
        <circle cx="8" cy="10" r="2" fill="currentColor" />
        <circle cx="20" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="26" cy="20" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="22" r="3" fill="currentColor" opacity="0.9" />
        <path
          d="M10 12l2 8m6-14l4 14m-4-2l8-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    ),
  };

  const renderIcon = (
    iconName,
    tone = "teal",
    wrapperClass = "lp-icon-wrapper",
  ) => {
    if (!iconName || !iconLibrary[iconName]) return null;
    return (
      <span
        className={wrapperClass}
        style={{ background: iconPalette[tone] || iconPalette.teal }}
      >
        {iconLibrary[iconName]}
      </span>
    );
  };

  const problemCards =
    locale === "es"
      ? [
          {
            icon: "bottleneck",
            tone: "rose",
            title: "Páginas que no convierten",
            highlight: "Reciben tráfico pero no generan acción inmediata.",
            description:
              "Se invierte en campañas, pero el usuario aterriza en un hero genérico, sin jerarquía ni un CTA insistente que le diga qué hacer.",
          },
          {
            icon: "spreadsheet",
            tone: "slate",
            title: "Demasiada información",
            highlight: "Todo compite por atención al mismo tiempo.",
            description:
              "Servicios, historia y enlaces secundarios aparecen mezclados, el foco de conversión desaparece antes del primer scroll.",
          },
          {
            icon: "puzzle",
            tone: "violet",
            title: "Mensaje confuso",
            highlight: "No se entiende la propuesta ni el siguiente paso.",
            description:
              "El copy habla de la empresa y no de la promesa. Falta contexto, beneficio y una razón clara para dejar sus datos.",
          },
          {
            icon: "scatter",
            tone: "amber",
            title: "Pérdida de oportunidades",
            highlight: "Los leads se diluyen en formularios sin seguimiento.",
            description:
              "No se explica qué ocurre después del envío ni se refuerza la confianza, por lo que se abandonan contactos valiosos.",
          },
        ]
      : [
          {
            icon: "bottleneck",
            tone: "rose",
            title: "Pages that don’t convert",
            highlight: "Traffic arrives but never triggers action.",
            description:
              "You pay for campaigns yet visitors land on a generic hero with no hierarchy or persistent CTA telling them what to do.",
          },
          {
            icon: "spreadsheet",
            tone: "slate",
            title: "Too much information",
            highlight: "Everything competes for attention at once.",
            description:
              "Services, brand story and secondary links mix together, so the conversion focus vanishes before the first scroll.",
          },
          {
            icon: "puzzle",
            tone: "violet",
            title: "Confusing message",
            highlight: "People can’t understand the offer or next step.",
            description:
              "Copy talks about the company instead of the promise. There’s no context, benefit or reason to leave their data.",
          },
          {
            icon: "scatter",
            tone: "amber",
            title: "Lost opportunities",
            highlight: "Leads leak out through unsupported forms.",
            description:
              "You never clarify what happens after submission, so trust drops and potential contacts abandon the journey.",
          },
        ];

  const landingUseCases =
    locale === "es"
      ? [
          {
            icon: "rocket",
            tone: "teal",
            title: "Captación de leads",
            highlight: "Convertimos visitas en contactos calificados.",
            description:
              "Ideal para campañas en Google Ads, Meta Ads o newsletters donde cada lead tiene un costo definido.",
          },
          {
            icon: "compass",
            tone: "violet",
            title: "Venta de servicios consultivos",
            highlight: "Explicamos la propuesta y guiamos hacia la decisión.",
            description:
              "Se utiliza cuando el objetivo es vender un servicio concreto o agendar una llamada comercial.",
          },
          {
            icon: "wave",
            tone: "amber",
            title: "Lanzamientos y campañas puntuales",
            highlight: "Concentramos el mensaje de una campaña específica.",
            description:
              "Perfecta para nuevos productos, promociones temporales o acciones de performance marketing.",
          },
          {
            icon: "calendar",
            tone: "emerald",
            title: "Reserva de demos o reuniones",
            highlight: "Reducimos pasos para agendar una conversación.",
            description:
              "Integramos la landing con calendarios o formularios para acelerar el paso a una reunión real.",
          },
          {
            icon: "layers",
            tone: "rose",
            title: "Sitio Web Mínimo Viable",
            highlight: "Primera aproximación a un sitio web.",
            description:
              "Una página única que presenta la esencia de tu marca, ideal para empezar a tener presencia online.",
          },
        ]
      : [
          {
            icon: "rocket",
            tone: "teal",
            title: "Lead capture",
            highlight: "We turn visits into qualified contacts.",
            description:
              "Ideal for Google Ads, Meta Ads or newsletter campaigns where every lead has a defined cost.",
          },
          {
            icon: "compass",
            tone: "violet",
            title: "Service sales and consultative offers",
            highlight: "We explain the value proposition and drive a decision.",
            description:
              "Used when the goal is to sell a specific service or book a commercial call.",
          },
          {
            icon: "wave",
            tone: "amber",
            title: "Launches and time-bound campaigns",
            highlight: "We condense the message of a specific campaign.",
            description:
              "Perfect for new products, limited promos or performance marketing pushes.",
          },
          {
            icon: "calendar",
            tone: "emerald",
            title: "Demo or meeting booking",
            highlight: "We remove steps to schedule a conversation.",
            description:
              "The landing integrates with calendars or forms to accelerate the path to a real meeting.",
          },
          {
            icon: "layers",
            tone: "rose",
            title: "Minimum Viable Website",
            highlight: "First approach to a website for brand visibility.",
            description:
              "A single page that presents the essence of your brand, ideal for starting to have an online presence.",
          },
        ];

  const typesIntro =
    locale === "es"
      ? "Los casos más frecuentes muestran cómo adaptamos la landing a cada objetivo concreto."
      : "These common use cases show how we adapt the landing to each specific goal.";

  const typesConclusion =
    locale === "es"
      ? "Cuando el objetivo es claro, diseñamos la landing exacta para alcanzarlo."
      : "When the objective is clear, we design the exact landing needed to achieve it.";

  const extensionSummary =
    locale === "es"
      ? "Una landing alcanza su mejor rendimiento cuando forma parte de un sistema y se complementa con las piezas correctas."
      : "A landing performs best when it is part of a system and is complemented by the right pieces.";

  const extensionServices =
    locale === "es"
      ? [
          {
            icon: "nodes",
            tone: "teal",
            title: "Campañas de adquisición (Google Ads, Meta Ads)",
            highlight: "Atraemos tráfico con intención real.",
            description:
              "Se activa cuando necesitamos volumen de visitas calificadas para validar rápidamente la propuesta.",
          },
          {
            icon: "link",
            tone: "violet",
            title: "Automatización y CRM",
            highlight: "Conectamos la landing con tus procesos internos.",
            description:
              "Integraciones con formularios, agendas y CRM para que cada lead llegue al seguimiento correcto.",
          },
          {
            icon: "cycle",
            tone: "amber",
            title: "Mantenimiento y optimización continua",
            highlight: "Iteramos con datos reales.",
            description:
              "Analizamos métricas, probamos variantes y ajustamos el contenido para mejorar la conversión.",
          },
          {
            icon: "document",
            tone: "emerald",
            title: "Contenido y nurturing",
            highlight: "Preparamos el contexto antes y después del clic.",
            description:
              "Emails, secuencias o piezas de apoyo que sostienen el mensaje y elevan la confianza.",
          },
        ]
      : [
          {
            icon: "nodes",
            tone: "teal",
            title: "Acquisition campaigns (Google Ads, Meta Ads)",
            highlight: "We bring in traffic with real intent.",
            description:
              "Used when we need qualified visits to quickly validate the offer.",
          },
          {
            icon: "link",
            tone: "violet",
            title: "Automation and CRM",
            highlight: "We connect the landing to your internal processes.",
            description:
              "Forms, schedulers and CRMs integrate so every lead is routed to the right follow-up.",
          },
          {
            icon: "cycle",
            tone: "amber",
            title: "Ongoing maintenance and optimization",
            highlight: "We iterate using real data.",
            description:
              "Metrics, experiments and copy updates keep conversion improving.",
          },
          {
            icon: "document",
            tone: "emerald",
            title: "Content and nurturing",
            highlight: "We prepare the context before and after the click.",
            description:
              "Emails, sequences or supporting assets reinforce the message and trust.",
          },
        ];

  const extensionClosing =
    locale === "es"
      ? "No recomendamos extensiones por defecto: sólo sumamos lo que aporta valor real al objetivo del proyecto."
      : "We never add extensions by default—only what brings real value to the project objective.";

  const landingLead =
    locale === "es"
      ? "Una landing page es ideal cuando hay un único objetivo claro y urgente."
      : "A landing page is ideal when there is a single, urgent objective.";

  const websiteLead =
    locale === "es"
      ? "Un sitio web completo sostiene múltiples historias y recorridos."
      : "A full website supports multiple stories and journeys.";

  const landingConclusion =
    locale === "es"
      ? "La landing elimina distracciones y concentra al usuario en un movimiento medible."
      : "The landing removes distractions and concentrates the user on one measurable movement.";

  const websiteConclusion =
    locale === "es"
      ? "El sitio web funciona como la base institucional donde convergen todos los canales."
      : "The website operates as the institutional base where every channel converges.";

  const recommendationSummary =
    locale === "es"
      ? "No recomendamos formatos por defecto: elegimos la herramienta que mejor sirve al objetivo del negocio."
      : "We never recommend formats by default—we choose the tool that best serves the business objective.";

  const recommendationDescription =
    locale === "es"
      ? "Analizamos meta comercial, madurez digital y recursos antes de sugerir si desarrollar una landing, un sitio o ambos."
      : "We examine business goals, digital maturity and resources before suggesting whether to ship a landing, a full site or both.";

  const recommendationDetails =
    locale === "es"
      ? [
          {
            label: "Landing page",
            text: "Se utiliza para convertir tráfico con intención específica, medir resultados y ajustar rápido.",
          },
          {
            label: "Sitio web",
            text: "Sostiene la marca, explica el portfolio completo y consolida la relación a largo plazo.",
          },
        ]
      : [
          {
            label: "Landing page",
            text: "Used to convert intent-driven traffic, measure outcomes and iterate quickly.",
          },
          {
            label: "Website",
            text: "Supports the brand, explains the full offering and nurtures long-term relationships.",
          },
        ];

  const recommendationClosing =
    locale === "es"
      ? "Cada recomendación es a medida: si tu estrategia sólo necesita una pieza, construiremos sólo esa."
      : "Every recommendation is bespoke—if your strategy only needs one piece, we will only build that piece.";

  const solutionIntro =
    locale === "es"
      ? "Nuestro método combina análisis comercial, UX y analítica para diseñar landing pages que conducen a la acción con intención."
      : "Our method combines business analysis, UX and analytics to design landing pages that move users to act deliberately.";

  const solutionPrinciples =
    locale === "es"
      ? [
          {
            icon: "focus",
            tone: "teal",
            title: "Objetivo del negocio",
            highlight: "Definimos qué acción debe realizar el usuario.",
            description:
              "Cada landing responde a un objetivo medible: captar leads, vender un servicio o agendar una llamada.",
          },
          {
            icon: "path",
            tone: "violet",
            title: "Nivel de conciencia del usuario",
            highlight: "Adaptamos el mensaje al punto en el que se encuentra.",
            description:
              "No comunicamos igual a quien ya reconoce el problema que a quien recién lo descubre; ajustamos tono, pruebas y objeciones.",
          },
          {
            icon: "signal",
            tone: "amber",
            title: "Fuente de tráfico",
            highlight: "Diseñamos según desde dónde llega el usuario.",
            description:
              "El ritmo, la jerarquía y los llamados varían si el tráfico es pago, orgánico o referido.",
          },
        ]
      : [
          {
            icon: "focus",
            tone: "teal",
            title: "Business objective",
            highlight: "We define the exact action the user must take.",
            description:
              "Each landing answers a measurable goal: capture leads, sell a service or book a call.",
          },
          {
            icon: "path",
            tone: "violet",
            title: "User awareness level",
            highlight: "We adapt the message to where the user stands.",
            description:
              "We do not speak the same way to someone who knows the problem as to someone discovering it; tone, proof and objections shift.",
          },
          {
            icon: "signal",
            tone: "amber",
            title: "Traffic source",
            highlight: "We design based on the entry point.",
            description:
              "Rhythm, hierarchy and CTAs change if visitors arrive via paid, organic or referral channels.",
          },
        ];

  const solutionClosing =
    locale === "es"
      ? "Nada se deja al azar: cada decisión responde a un objetivo, un usuario y un contexto concreto."
      : "Nothing is left to chance: every decision answers to a goal, a user and a concrete context.";

  const landingCriteria =
    locale === "es"
      ? [
          {
            icon: "🎯",
            title: "Un único objetivo medible",
            detail:
              "Necesitas que cada visita termine en un lead, agenda o compra sin distracciones intermedias.",
          },
          {
            icon: "📈",
            title: "Tráfico controlado",
            detail:
              "Invertís en Ads, email o alianzas y querés atribuir cada conversión a su fuente.",
          },
          {
            icon: "⚡",
            title: "Oferta puntual o experimento",
            detail:
              "Validás un servicio, promo o evento con ventanas cortas y mensajes muy específicos.",
          },
          {
            icon: "🔁",
            title: "Necesidad de iterar rápido",
            detail:
              "Buscás lanzar en semanas, medir y ajustar el copy o la propuesta sobre la marcha.",
          },
        ]
      : [
          {
            icon: "🎯",
            title: "One measurable objective",
            detail:
              "Every visit must end in a lead, booking or purchase with zero side quests.",
          },
          {
            icon: "📈",
            title: "Controlled traffic",
            detail:
              "You invest in Ads, email or partnerships and need clear attribution per conversion.",
          },
          {
            icon: "⚡",
            title: "Specific offer or experiment",
            detail:
              "You validate a service, promo or launch with tight timelines and precise messaging.",
          },
          {
            icon: "🔁",
            title: "Need for rapid iteration",
            detail:
              "You plan to ship in weeks, measure and tweak copy or offer continuously.",
          },
        ];

  const websiteCriteria =
    locale === "es"
      ? [
          {
            icon: "🏢",
            title: "Varios recorridos en paralelo",
            detail:
              "Tu negocio requiere contar servicios, casos, equipo, blog y recursos en un mismo eje.",
          },
          {
            icon: "📣",
            title: "Construcción profunda de marca",
            detail:
              "Buscás autoridad, SEO y presencia institucional para sostener campañas y referidos.",
          },
          {
            icon: "🧩",
            title: "Ecosistema con múltiples piezas",
            detail:
              "Necesitás alojar landings, contenidos, integraciones o productos en evolución.",
          },
          {
            icon: "🤝",
            title: "Relaciones de largo plazo",
            detail:
              "El usuario decide en varias etapas y querés nutrirlo con contexto, confianza y seguimiento.",
          },
        ]
      : [
          {
            icon: "🏢",
            title: "Parallel customer journeys",
            detail:
              "You must explain services, use cases, team, blog and resources within one home base.",
          },
          {
            icon: "📣",
            title: "Deep brand building",
            detail:
              "You need authority, SEO and institutional presence to support campaigns and referrals.",
          },
          {
            icon: "🧩",
            title: "Multi-piece ecosystem",
            detail:
              "You have to host landings, content, integrations or evolving products together.",
          },
          {
            icon: "🤝",
            title: "Long-term relationships",
            detail:
              "Decisions happen in stages and you want to nurture with context, trust and follow-up.",
          },
        ];

  const services =
    locale === "es"
      ? [
          {
            icon: "funnel",
            tone: "teal",
            title: "Definición del objetivo principal de conversión",
            highlight: "Clarificamos qué acción debe realizar el usuario.",
            description:
              "Cada landing se diseña con un único objetivo medible, alineado al negocio y al embudo.",
          },
          {
            icon: "stack",
            tone: "violet",
            title: "Estructura estratégica orientada a resultados",
            highlight: "Convertimos el objetivo en un recorrido lógico.",
            description:
              "Ordenamos secciones, evidencias y llamados para eliminar fricción y guiar a la conversión.",
          },
          {
            icon: "pen",
            tone: "amber",
            title: "Copy claro, directo y enfocado en beneficios",
            highlight: "Traducimos los beneficios en mensajes accionables.",
            description:
              "Cada bloque de texto responde a objeciones, refuerza valor y conduce al clic esperado.",
          },
          {
            icon: "shield",
            tone: "emerald",
            title: "Diseño visual alineado a la marca",
            highlight: "La estética refuerza confianza y coherencia.",
            description:
              "Construimos una interfaz limpia que refleja tu identidad y prioriza la lectura escaneable.",
          },
          {
            icon: "mobile",
            tone: "rose",
            title: "Experiencia optimizada para dispositivos móviles",
            highlight: "El flujo funciona igual de bien en pantallas pequeñas.",
            description:
              "Ajustamos layout, espaciados y CTAs para maximizar la conversión desde móviles.",
          },
          {
            icon: "code",
            tone: "teal",
            title: "Desarrollo técnico rápido y eficiente",
            highlight: "Implementamos tecnología moderna con performance real.",
            description:
              "Codificamos siguiendo mejores prácticas para asegurar velocidad, estabilidad e iteración ágil.",
          },
          {
            icon: "plug",
            tone: "violet",
            title: "Integraciones y automatización",
            highlight: "Conectamos la landing con tus procesos existentes.",
            description:
              "Formularios, agendas y herramientas quedan integrados para que cada lead llegue a tu stack.",
          },
          {
            icon: "radar",
            tone: "amber",
            title: "Optimización de velocidad y medición",
            highlight:
              "Medimos antes de lanzar y dejamos tracking configurado.",
            description:
              "Optimización de carga, etiquetado y analytics para tomar decisiones post-lanzamiento.",
          },
        ]
      : [
          {
            icon: "funnel",
            tone: "teal",
            title: "Definition of the main conversion objective",
            highlight: "We clarify the exact action the user must take.",
            description:
              "Each landing is built around one measurable goal aligned with the business and funnel.",
          },
          {
            icon: "stack",
            tone: "violet",
            title: "Strategic structure oriented to results",
            highlight: "We turn the goal into a logical journey.",
            description:
              "Sections, proof and CTAs are organized to remove friction and guide every step.",
          },
          {
            icon: "pen",
            tone: "amber",
            title: "Clear, benefit-driven copywriting",
            highlight: "We translate benefits into actionable language.",
            description:
              "Every paragraph addresses objections, reinforces value and nudges the desired click.",
          },
          {
            icon: "shield",
            tone: "emerald",
            title: "Visual design aligned with the brand",
            highlight: "The interface reinforces trust and coherence.",
            description:
              "We craft a clean layout that reflects your identity and keeps reading effortless.",
          },
          {
            icon: "mobile",
            tone: "rose",
            title: "Experience optimized for mobile devices",
            highlight: "The flow performs equally well on smaller screens.",
            description:
              "Layout, spacing and CTAs are tuned to maximize conversions from mobile traffic.",
          },
          {
            icon: "code",
            tone: "teal",
            title: "Fast and efficient technical development",
            highlight: "We implement modern technology with real performance.",
            description:
              "Code follows best practices to ensure speed, stability and agile iteration.",
          },
          {
            icon: "plug",
            tone: "violet",
            title: "Integrations and automation",
            highlight: "We connect the landing to your existing processes.",
            description:
              "Forms, schedulers and tools are integrated so every lead lands in your stack.",
          },
          {
            icon: "radar",
            tone: "amber",
            title: "Speed optimization and measurement",
            highlight: "We measure before launch and leave tracking ready.",
            description:
              "Loading, tagging and analytics are optimized to inform post-launch decisions.",
          },
        ];

  const processSteps = [
    {
      number: "01",
      title:
        locale === "es"
          ? "Análisis del objetivo y la oferta"
          : "Objective and offer analysis",
      highlight:
        locale === "es"
          ? "Definimos qué se quiere vender y a quién."
          : "We define what is being sold and to whom.",
      description:
        locale === "es"
          ? "Revisamos objetivo, propuesta de valor y público para construir una estrategia clara desde el inicio."
          : "We review the goal, value proposition and audience to build a clear strategy from the start.",
    },
    {
      number: "02",
      title:
        locale === "es" ? "Arquitectura y guion" : "Architecture and narrative",
      highlight:
        locale === "es"
          ? "Traducimos la estrategia en un recorrido lógico."
          : "We turn the strategy into a logical journey.",
      description:
        locale === "es"
          ? "Definimos secciones, jerarquías y mensajes clave que eliminan fricción."
          : "We define sections, hierarchy and key messages that remove friction.",
    },
    {
      number: "03",
      title:
        locale === "es"
          ? "Contenido y diseño de experiencia"
          : "Content and experience design",
      highlight:
        locale === "es"
          ? "Creamos copy y visuales orientados a conversión."
          : "We craft conversion-focused copy and visuals.",
      description:
        locale === "es"
          ? "Cada bloque combina storytelling, evidencia y llamados claros para motivar la acción."
          : "Each block blends storytelling, proof and clear calls-to-action to motivate movement.",
    },
    {
      number: "04",
      title:
        locale === "es"
          ? "Desarrollo e integraciones"
          : "Development and integrations",
      highlight:
        locale === "es"
          ? "Implementamos tecnología moderna y conectada."
          : "We implement modern, connected technology.",
      description:
        locale === "es"
          ? "Construimos la landing con performance real e integramos formularios, agendas y analítica."
          : "We build with real performance and connect forms, schedulers and analytics.",
    },
    {
      number: "05",
      title:
        locale === "es"
          ? "Lanzamiento y optimización inicial"
          : "Launch and initial optimization",
      highlight:
        locale === "es"
          ? "Medimos, ajustamos y transferimos el control."
          : "We measure, adjust and hand over control.",
      description:
        locale === "es"
          ? "Activamos tracking, revisamos métricas tempranas y dejamos un plan claro de próximos pasos."
          : "We activate tracking, review early metrics and leave a clear plan for next steps.",
    },
  ];

  const idealIntro =
    locale === "es"
      ? "No todos los proyectos necesitan una landing page. Estos son los escenarios en los que realmente aporta valor."
      : "Not every project needs a landing page. These are the scenarios where it truly adds value.";

  const idealCriteria =
    locale === "es"
      ? [
          {
            icon: "grid",
            tone: "teal",
            title: "Cuando ya existe tráfico, pero se diluye",
            highlight:
              "La landing concentra el mensaje y elimina distracciones.",
            description:
              "Ideal cuando se invierte en campañas o hay visitas constantes que no se transforman en leads.",
          },
          {
            icon: "layers",
            tone: "violet",
            title: "Cuando se quiere validar una oferta nueva",
            highlight:
              "Permite testear narrativa, propuesta y acción sin construir un sitio completo.",
            description:
              "Se usa para lanzar MVPs, servicios piloto o bundles que necesitan feedback rápido.",
          },
          {
            icon: "chart",
            tone: "amber",
            title: "Cuando el proceso comercial requiere foco",
            highlight: "Cada paso guía al usuario hacia una sola decisión.",
            description:
              "Funciona para servicios consultivos o productos con ticket medio/alto que necesitan contexto claro.",
          },
          {
            icon: "portal",
            tone: "emerald",
            title: "Cuando el equipo necesita medir y optimizar",
            highlight:
              "Una landing facilita iterar, comparar variantes y escalar lo que funciona.",
            description:
              "Permite correr experimentos de copy, estructura o integraciones sin tocar todo el sitio.",
          },
          {
            icon: "rocket",
            tone: "rose",
            title: "Cuando una marca quiere empezar a tener presencia online",
            highlight:
              "Primera aproximación digital completa para empresas y emprendimientos.",
            description:
              "Ideal cuando una marca, empresa o emprendimiento quiere comenzar a tener presencia online completa, pero no está preparada todavía para tener un sitio web entero.",
          },
        ]
      : [
          {
            icon: "grid",
            tone: "teal",
            title: "When traffic already exists but leaks out",
            highlight:
              "The landing focuses the message and removes distractions.",
            description:
              "Ideal when you invest in campaigns or have steady visits that never turn into leads.",
          },
          {
            icon: "layers",
            tone: "violet",
            title: "When you need to validate a new offer",
            highlight:
              "It lets you test narrative, proposition and CTA without building a full site.",
            description:
              "Used to launch MVPs, pilot services or bundles that demand fast feedback.",
          },
          {
            icon: "chart",
            tone: "amber",
            title: "When the sales process requires focus",
            highlight: "Every step guides the user toward a single decision.",
            description:
              "Works for consultative services or mid/high-ticket products that need clear context.",
          },
          {
            icon: "portal",
            tone: "emerald",
            title: "When the team must measure and optimize",
            highlight:
              "A landing makes it easy to iterate, compare variants and scale what works.",
            description:
              "You can run copy, structure or integration experiments without touching the entire site.",
          },
          {
            icon: "rocket",
            tone: "rose",
            title: "When a brand wants to start having online presence",
            highlight:
              "First complete digital approach for companies and entrepreneurs.",
            description:
              "Ideal when a brand, company or entrepreneurship wants to start having complete online presence, but is not yet prepared to have a full website.",
          },
        ];

  return (
    <div className="landing-pages-page">
      <Helmet>
        <title>{t('meta.landingPagesTitle')}</title>
        <meta name="description" content={locale === 'es' ? 'Diseñamos landing pages de alta conversión para captar leads y ventas. Páginas optimizadas con formularios, A/B testing y métricas precisas. Alora.' : 'We design high-converting landing pages to capture leads and sales. Optimized pages with forms, A/B testing and precise metrics. Alora.'} />
        <meta name="keywords" content={locale === 'es' ? 'landing pages, páginas de aterrizaje, captación de leads, conversión, diseño web, Argentina' : 'landing pages, lead generation, conversion, web design, digital marketing'} />
        <link rel="canonical" href={`https://globalalora.com/${locale}/soluciones/landing-pages`} />
        <meta property="og:title" content={locale === 'es' ? 'Alora | Landing Pages de Alta Conversión' : 'Alora | High-Converting Landing Pages'} />
        <meta property="og:description" content={locale === 'es' ? 'Páginas de aterrizaje optimizadas para captar leads y generar ventas. Diseño + estrategia + métricas.' : 'Optimized landing pages to capture leads and generate sales. Design + strategy + metrics.'} />
        <meta property="og:image" content="https://globalalora.com/aloralogo.png" />
        <meta property="og:url" content={`https://globalalora.com/${locale}/soluciones/landing-pages`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={locale === 'es' ? 'Alora | Landing Pages de Alta Conversión' : 'Alora | High-Converting Landing Pages'} />
        <meta name="twitter:description" content={locale === 'es' ? 'Landing pages optimizadas para captar leads y ventas.' : 'Landing pages optimized to capture leads and sales.'} />
        <meta name="twitter:image" content="https://globalalora.com/aloralogo.png" />
        <script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Landing Pages de Alta Conversión — Alora",
  "provider": { "@type": "Organization", "name": "Alora", "url": "https://globalalora.com" },
  "description": "Diseñamos landing pages optimizadas para captar leads y generar ventas con formularios, A/B testing y métricas precisas.",
  "serviceType": "Landing Page Design",
  "areaServed": ["Argentina", "España", "México", "Chile", "Colombia"],
  "url": "https://globalalora.com/es/soluciones/landing-pages"
})}</script>
      </Helmet>
      {/* Hero Section - Mismo que DesarrolloWeb */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <h1>
              {locale === "es"
                ? "Landing pages diseñadas para convertir"
                : "Landing pages designed to convert"}
            </h1>
            <p className="hero-subtitle">
              {locale === "es"
                ? "Diseñamos landing pages enfocadas en un solo objetivo: convertir visitas en leads, contactos o ventas."
                : "We design landing pages focused on a single objective: converting visits into leads, contacts or sales."}
            </p>
            <p className="hero-highlight">
              {locale === "es"
                ? "Una landing page no es un sitio web reducido. Es una herramienta estratégica pensada para acción inmediata."
                : "A landing page is not a reduced website. It is a strategic tool designed for immediate action."}
            </p>
            <div className="hero-buttons">
              <motion.a
                href={locale === "es" ? "https://www.globalalora.com/es/llamada-de-relevamiento" : "https://www.globalalora.com/en/discovery-call"}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === "es"
                  ? "Hablamos sobre tu proyecto"
                  : "Let's talk about your project"}
                <span className="duration">
                  {locale === "es"
                    ? "Llamada online de 20 minutos"
                    : "Online 20-minute call"}
                </span>
              </motion.a>
            </div>
          </div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background:
                'url("https://nubedocs.es/wp-content/uploads/2021/01/20210111-que-es-una-landing-page.png") center/cover',
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es" ? "El problema habitual" : "The usual problem"}
          </h2>
          <p className="problem-intro">
            {locale === "es"
              ? "Muchos negocios invierten en tráfico o contenidos, pero la experiencia que espera al usuario no tiene la misma disciplina."
              : "Many companies invest in traffic or content, yet the landing experience that greets visitors lacks the same discipline."}
          </p>
          <div className="problems-grid">
            {problemCards.map((card, index) => (
              <div className="problem-card" key={index}>
                {renderIcon(card.icon, card.tone, "problem-icon-wrapper")}
                <h3>{card.title}</h3>
                <p className="problem-highlight">
                  <strong>{card.highlight}</strong>
                </p>
                <p className="problem-description">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="problem-result">
            <strong>
              {locale === "es"
                ? "El resultado se repite: tráfico que llega, pero no se transforma en oportunidades reales."
                : "The outcome is always the same: traffic arrives, but it never turns into real opportunities."}
            </strong>
          </div>
        </motion.div>
      </section>

      {/* Landing vs Website Section */}
      <section className="comparison-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "¿Necesito un sitio web o una landing page?"
              : "Do I need a website or a landing page?"}
          </h2>
          <p className="comparison-text">
            {locale === "es"
              ? "No todos los objetivos requieren un sitio web completo. En muchos casos, una landing page es la solución más efectiva."
              : "Not all objectives require a complete website. In many cases, a landing page is the most effective solution."}
          </p>

          <div className="comparison-grid">
            <div className="comparison-card landing-card">
              <h3>
                {locale === "es"
                  ? "Cuándo conviene una landing page"
                  : "When a landing page is advisable"}
              </h3>
              <p className="comparison-lead">
                <strong>{landingLead}</strong>
              </p>
              <div className="comparison-list">
                {landingCriteria.map((criterion, index) => (
                  <div className="comparison-item" key={index}>
                    <span className="item-icon" aria-hidden="true">
                      {criterion.icon}
                    </span>
                    <div className="comparison-copy">
                      <strong>{criterion.title}</strong>
                      <span>{criterion.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="comparison-conclusion">{landingConclusion}</p>
            </div>

            <div className="comparison-card website-card">
              <h3>
                {locale === "es"
                  ? "Cuándo conviene un sitio web"
                  : "When a website is advisable"}
              </h3>
              <p className="comparison-lead">
                <strong>{websiteLead}</strong>
              </p>
              <div className="comparison-list">
                {websiteCriteria.map((criterion, index) => (
                  <div className="comparison-item" key={index}>
                    <span className="item-icon" aria-hidden="true">
                      {criterion.icon}
                    </span>
                    <div className="comparison-copy">
                      <strong>{criterion.title}</strong>
                      <span>{criterion.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="comparison-conclusion">{websiteConclusion}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recommendation Section */}
      <section className="recommendation-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "¿Qué recomendamos en Alora?"
              : "What do we recommend at Alora?"}
          </h2>
          <div className="recommendation-panel">
            <p className="recommendation-statement">
              <strong>{recommendationSummary}</strong>
            </p>
            <p className="recommendation-description">
              {recommendationDescription}
            </p>
            <div className="recommendation-points">
              {recommendationDetails.map((item, index) => (
                <div className="recommendation-point" key={index}>
                  <span className="recommendation-label">{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <p className="recommendation-closing">{recommendationClosing}</p>
          </div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === "es" ? "Nuestra solución" : "Our solution"}</h2>
          <p className="solution-description">{solutionIntro}</p>
          <div className="solution-method">
            {solutionPrinciples.map((principle, index) => (
              <div className="solution-block" key={index}>
                {renderIcon(principle.icon, principle.tone)}
                <h3>{principle.title}</h3>
                <p>
                  <strong>{principle.highlight}</strong> {principle.description}
                </p>
              </div>
            ))}
          </div>
          <p className="solution-conclusion">{solutionClosing}</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Qué incluye el servicio de landing pages"
              : "What the landing pages service includes"}
          </h2>
          <p className="services-intro">
            {locale === "es"
              ? "Cada entrega cubre estrategia, contenido, diseño, desarrollo e integración para que la landing quede lista para convertir."
              : "Every engagement covers strategy, content, design, development and integration so the landing is ready to convert."}
          </p>
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {renderIcon(service.icon, service.tone)}
                <h3>{service.title}</h3>
                <p>
                  <strong>{service.highlight}</strong> {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="services-conclusion">
            {locale === "es"
              ? "Todo está pensado para que el usuario entienda la propuesta, confíe en ella y realice una acción concreta."
              : "Everything is designed so the user understands the offer, trusts it and takes a concrete action."}
          </p>
        </motion.div>
      </section>

      {/* Types Section */}
      <section className="types-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Tipos de landing pages que desarrollamos"
              : "Types of landing pages we develop"}
          </h2>
          <p className="types-description">{typesIntro}</p>
          <div className="types-list">
            {landingUseCases.map((useCase, index) => (
              <motion.div
                className="type-case"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {renderIcon(useCase.icon, useCase.tone)}
                <h3>{useCase.title}</h3>
                <p>
                  <strong>{useCase.highlight}</strong> {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="types-conclusion">{typesConclusion}</p>
        </motion.div>
      </section>

      {/* Projects Section - Grilla de 4 */}
      <section className="projects-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Proyectos de landing pages desarrollados"
              : "Landing page projects developed"}
          </h2>
          <p className="project-text">
            {locale === "es"
              ? "Diseñamos landing pages para distintos tipos de campañas y negocios, siempre con el mismo criterio: simplicidad, foco y conversión."
              : "We design landing pages for different types of campaigns and businesses, always with the same criteria: simplicity, focus and conversion."}
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => window.open(project.url, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="projects-conclusion">
            {locale === "es" ? (
              <>
                Cada landing page responde a un objetivo específico, pero todas
                comparten el mismo principio:{" "}
                <strong>eliminar fricción y maximizar la conversión.</strong>
              </>
            ) : (
              <>
                Each landing page responds to a specific objective, yet they all
                share one principle:{" "}
                <strong>eliminate friction and maximize conversion.</strong>
              </>
            )}
          </p>
        </motion.div>
      </section>

      {/* Complementary Services Section */}
      <section className="complementary-services-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Servicios que complementan una landing page"
              : "Services that complement a landing page"}
          </h2>
          <p className="complementary-summary">{extensionSummary}</p>
          <div className="complementary-list">
            {extensionServices.map((service, index) => (
              <motion.div
                className="complementary-block"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {renderIcon(service.icon, service.tone)}
                <h4>{service.title}</h4>
                <p>
                  <strong>{service.highlight}</strong> {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="complementary-closing">{extensionClosing}</p>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === "es" ? "Cómo trabajamos" : "How we work"}</h2>
          <p className="process-lead">
            {locale === "es"
              ? "Un flujo continuo que va desde la estrategia hasta el lanzamiento medido."
              : "A continuous flow that runs from strategy to a measured launch."}
          </p>
          <div className="process-flow">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-node">
                  <span>{step.number}</span>
                </div>
                <div className="process-copy">
                  <h3>{step.title}</h3>
                  <p>
                    <strong>{step.highlight}</strong> {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Ideal For Section */}
      <section className="ideal-for-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Cuándo una landing page es la mejor opción"
              : "When a landing page is the best option"}
          </h2>
          <p className="ideal-summary">{idealIntro}</p>
          <div className="ideal-criteria">
            {idealCriteria.map((criterion, index) => (
              <div className="ideal-criterion" key={index}>
                {renderIcon(criterion.icon, criterion.tone)}
                <h3>{criterion.title}</h3>
                <p>
                  <strong>{criterion.highlight}</strong> {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Related Services */}
      <section className="related-services-section">
        <div className="related-services-container">
          <h2>{locale === 'es' ? 'Servicios que se complementan' : 'Services that complement each other'}</h2>
          <div className="related-services-grid">
            <Link to={`/${locale}/soluciones/ecommerce`} className="related-service-card">
              <i className="fas fa-shopping-cart"></i>
              <span>Ecommerce</span>
            </Link>
            <Link to={`/${locale}/soluciones/google-ads`} className="related-service-card">
              <i className="fab fa-google"></i>
              <span>Google Ads</span>
            </Link>
            <Link to={`/${locale}/soluciones/atencion-cliente-ia`} className="related-service-card">
              <i className="fas fa-robot"></i>
              <span>{locale === 'es' ? 'Atención con IA' : 'AI Support'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Exactamente igual que DesarrolloWeb */}
      <section className="final-cta-section">
        <motion.div
          className="cta-content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>
              {locale === "es"
                ? "¿Hablamos de tu landing page?"
                : "Shall we talk about your landing page?"}
            </h2>
            <p>
              {locale === "es"
                ? "Si necesitas una landing page diseñada para convertir y alineada a tu objetivo de negocio, coordinamos una llamada breve y lo analizamos juntos."
                : "If you need a landing page designed to convert and aligned with your business objective, we schedule a brief call and analyze it together."}
            </p>
            <motion.a
              href={locale === "es" ? "https://www.globalalora.com/es/llamada-de-relevamiento" : "https://www.globalalora.com/en/discovery-call"}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === "es"
                ? "Agendar una llamada de 20 minutos"
                : "Schedule a 20-minute call"}
            </motion.a>
            <p className="cta-note">
              {locale === "es"
                ? "Evaluamos tu proyecto y te decimos si podemos ayudarte."
                : "We evaluate your project and tell you if we can help you."}
            </p>
            <div className="whatsapp-divider"></div>
            <div className="whatsapp-section">
              <h3 className="whatsapp-title">
                {locale === "es"
                  ? "Y si no puedes con tu ansiedad y quieres hablar con nosotros ahora mismo, contáctanos por whatsapp"
                  : "And if you can't wait and want to talk to us right now, contact us on whatsapp"}
              </h3>
              <motion.a
                href={`https://api.whatsapp.com/send/?phone=${encodeURIComponent("+5491124629452")}&text=${encodeURIComponent(
              locale === "es" 
                ? "Hola! Me gustaría obtener más información sobre sus servicios." 
                : "Hello! I would like to get more information about your services."
            )}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === "es"
                  ? "¡Contáctanos por Whatsapp ahora!"
                  : "Contact us on WhatsApp now!"}
              </motion.a>
            </div>
          </div>
          <div
            className="cta-image"
            style={{
              background:
                'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover',
            }}
          ></div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default LandingPages;
