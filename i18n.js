import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from "i18next-http-backend";

// const resources = {
//     hy: {
//         translation: {
//             karate_title: "Կարատեի դասընթացներ",
//             no_tutorials: "Դասընթացներ չեն գտնվել։",
//             hello: "Բարև ձեզ",
//             thank: "Շնորհակալություն"
//
//         },
//     },
//     en: {
//         translation: {
//             karate_title: "Karate Tutorials",
//             no_tutorials: "No tutorials found.",
//             hello: "hello",
//             thank: "Thank you"
//
//         },
//     },
//     cs: {
//         translation: {
//             karate_title: "Karate návody",
//             no_tutorials: "Nebyly nalezeny žádné návody.",
//             hello: "ahoj",
//             thank: "Děkujeme"
//         },
//     },
// };

i18next
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
        fallbackLng: "hy",
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: true,
        },
    });

export default i18next;
