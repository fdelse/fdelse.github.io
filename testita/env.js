/* ===================================================================
   ENV.JS — Configurazione invio email dei risultati (EmailJS ATTIVO).

   L'invio automatico è configurato: a ogni test completato, il riepilogo
   completo (con gli errori nel dettaglio) arriva alla casella collegata.
   Lo studente vede solo punteggio + ripartizione per struttura.

   Template EmailJS: usa le variabili {{student_name}} e {{summary}}.
   =================================================================== */

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_acaxxfk",
  TEMPLATE_ID: "template_598sr84",
  PUBLIC_KEY: "kmbK9y0HseBzJlyhT",
  TEACHER_EMAIL: "tuaemail@gmail.com"  // usata solo dal fallback "scrivi email"
};
