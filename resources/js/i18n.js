import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from 'axios'; // axios'ı eklemeyi unutmayın

let resources = {};

const fetchLocalizations = async () => {
  try {
    // Verileri al
    const response = await axios.get('/get-all-localizations');
    const localizations = response.data;

    let defaultLocalization = localizations.find(localization => localization.is_default === 1);

    // Her bir localization için işlemleri yap
    localizations.forEach(localization => {
      // Eğer resources objesinde ilgili dil yoksa, yeni bir dil ekleyin
      if (!resources[localization.code]) {
        resources[localization.code] = {
          translation: {} // translation anahtarını başlatıyoruz
        };
      }

      // Her bir terim için içeriği ekleyin
      localization.terms.forEach(term => {
        resources[localization.code].translation[term.term] = term.content;
      });
    });

    // i18n'i başlat
    i18n.use(initReactI18next).init({
      resources,
      lng: defaultLocalization != undefined ? defaultLocalization.code : 'en', // Varsayılan dil
      interpolation: {
        escapeValue: false // React zaten güvenli veriler sunar
      }
    });
  } catch (error) {
    console.error('Error fetching localizations:', error);
  }
};

// Verileri çektikten sonra i18n başlatma
fetchLocalizations();

export default i18n;
