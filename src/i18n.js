import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Parallax-homePage": "Portfolio",
      "Parallax-skills": "Skills",
      "Parallax-contact": "Contact",
      "hero-title": "Providing",
      "hero-title-span": "the best",
      "hero-title-exp": "project experience",
      "hero-text":
        "Hi! I'm Idriss Atik, a passionate and detail-oriented front-end developer with 2 years of experience in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Angular. Strong problem-solving and teamwork skills.",
      "skills-frontend": "Frontend",
      "skills-backend": "Backend",
      "skills-others": "Others",
      "contact-title": "Let’s get in touch",
      "contact-mail": "Mail",
      "contact-address": "Address",
      "contact-address-text": "Spain, Valencia",
      "contact-phone": "Phone",
      "contact-input-name": "Name",
      "contact-input-email": "Email",
      "contact-input-message": "Message",
      "contact-input-submit": "Send message",
      "contact-input-error": "Error",
      "contact-input-success": "Success",
    },
  },
  es: {
    translation: {
      "Parallax-homePage": "Portfolio",
      "Parallax-skills": "Skills",
      "Parallax-contact": "contacto",
      "hero-title": "Ofreciendo",
      "hero-title-span": "lo mejor",
      "hero-title-exp": "experiencia en proyectos",
      "hero-text":
        "¡Hola! Soy Idriss Atik, un desarrollador front-end apasionado y orientado a los detalles con 2 años de experiencia en la creación de aplicaciones web responsivas y fáciles de usar. Competente en HTML, CSS, JavaScript y frameworks modernos como React y Angular. Habilidades sólidas para la resolución de problemas y trabajo en equipo.",
      "skills-frontend": "Frontend",
      "skills-backend": "Backend",
      "skills-others": "Otros",
      "contact-title": "Póngase en contacto conmigo",
      "contact-mail": "Mail",
      "contact-address": "Address",
      "contact-address-text": "España, Valencia",
      "contact-phone": "Teléfono",
      "contact-input-name": "Nombre",
      "contact-input-email": "Correo electrónico",
      "contact-input-message": "Mensaje",
      "contact-input-submit": "Enviar mensaje",
      "contact-input-error": "Error",
      "contact-input-success": "Success",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
