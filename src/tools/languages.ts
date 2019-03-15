var _ = require("lodash");
import { Dict } from "./translation";

// prettier-ignore
export const GoogleLanguages: Dict = {
    'Afrikaans': 'af',
    'Albanian': 'sq',
    'Amharic': 'am',
    'Arabic': 'ar',
    'Armenian': 'hy',
    'Azerbaijani': 'az',
    'Bas-que': 'eu',
    'Belarusian': 'be',
    'Bengali': 'bn',
    'Bosnian': 'bs',
    'Bulgarian': 'bg',
    'Catalan': 'ca',
    'Cebuano': 'ceb',
    'Chichewa': 'ny',
    'Chinese(Simplified)': 'zh-CN',
    'Chinese(Traditional)': 'zh-TW',
    'Corsican': 'co',
    'Croatian': 'hr',
    'Czech': 'cs',
    'Danish': 'da',
    'Dutch': 'nl',
    'English': 'en',
    'Esperanto': 'eo',
    'Estonian': 'et',
    'Filipino': 'fil',
    'Finnish': 'fi',
    'French': 'fr',
    'Frisian': 'fy',
    'Galician': 'gl',
    'Georgian': 'ka',
    'German': 'de',
    'Greek': 'el',
    'Gujarati': 'gu',
    'Haitian creole': 'ht',
    'Hausa': 'ha',
    'Hawaiian': 'haw',
    'Hebrew': 'he',
    'Hindi': 'hi',
    'Hmong': 'hmn',
    'Hungarian': 'hu',
    'Icelandic': 'is',
    'Igbo': 'ig',
    'Indonesian': 'id',
    'Irish': 'ga',
    'Italian': 'it',
    'Japanese': 'ja',
    'Javanese': 'jw',
    'Kannada': 'kn',
    'Kazakh': 'kk',
    'Khmer': 'km',
    'Korean': 'ko',
    'Kurdish(kurmanji)': 'ku',
    'Kyrgyz': 'ky',
    'Lao': 'lo',
    'Latin': 'la',
    'Latvian': 'lv',
    'Lithuanian': 'lt',
    'Luxembourgish': 'lb',
    'Macedonian': 'mk',
    'Malagasy': 'mg',
    'Malay': 'ms',
    'Malayalam': 'ml',
    'Maltese': 'mt',
    'Maori': 'mi',
    'Marathi': 'mr',
    'Mongolian': 'mn',
    'Myanmar(burmese)': 'my',
    'Nepali': 'ne',
    'Norwegian': 'no',
    'Pashto': 'ps',
    'Persian': 'fa',
    'Polish': 'pl',
    'Portuguese': 'pt',
    'Punjabi': 'pa',
    'Romanian': 'ro',
    'Russian': 'ru',
    'Samoan': 'sm',
    'Scots gaelic': 'gd',
    'Serbian': 'sr',
    'Sesotho': 'st',
    'Shona': 'sn',
    'Sindhi': 'sd',
    'Sinhala': 'si',
    'Slovak': 'sk',
    'Slovenian': 'sl',
    'Somali': 'so',
    'Spanish': 'es',
    'Sundanese': 'su',
    'Swahili': 'sw',
    'Swedish': 'sv',
    'Tajik': 'tg',
    'Tamil': 'ta',
    'Telugu': 'te',
    'Thai': 'th',
    'Turkish': 'tr',
    'Ukrainian': 'uk',
    'Urdu': 'ur',
    'Uzbek': 'uz',
    'Vietnamese': 'vi',
    'Welsh': 'cy',
    'Xhosa': 'xh',
    'Yiddish': 'yi',
    'Yoruba': 'yo',
    'Zulu': 'zu'
};

// prettier-ignore
export const BaiduLanguages:Dict =
    {
        English: 'en',
        Thai: 'th',
        Russian: 'ru',
        Portuguese: 'pt',
        Greek: 'el',
        Dutch: 'nl',
        Polish: 'pl',
        Bulgarian: 'bg',
        Estonian: 'et',
        Danish: 'da',
        Finnish: 'fi',
        Czech: 'cs',
        Romanian: 'ro',
        Slovenian: 'sl',
        Swedish: 'sv',
        Hungarian: 'hu',
        German: 'de',
        Italian: 'it',
        'Chinese(Simplified)': 'zh-CN',
        'Chinese(Traditional)': 'zh-TW',
        Japanese: 'ja',
        Korean: 'ko',
        Spanish: 'es',
        French: 'fr',
        Arabic: 'ar'
    };

// prettier-ignore
export const YoudaoLanguages:Dict = {
    English: 'en',
    Russian: 'ru',
    Portuguese: 'pt',
    Spanish: 'es',
    'Chinese(Simplified)': 'zh-CN',
    Japanese: 'ja',
    Korean: 'ko',
    French: 'fr'
};

export const SogouLanguages: Dict = {
  "Chinese(Simplified)": "zh-CN",
  "Chinese(Traditional)": "zh-TW",
  English: "en",
  Afrikaans: "af",
  Arabic: "ar",
  Bulgarian: "bg",
  Bengali: "bn",
  Bosnian: "bs",
  Catalan: "ca",
  Czech: "cs",
  Welsh: "cy",
  Danish: "da",
  German: "de",
  Greek: "el",
  Spanish: "es",
  Estonian: "et",
  Persian: "fa",
  Finnish: "fi",
  Filipino: "fil",
  Fijian: "fj",
  French: "fr",
  Hebrew: "he",
  Hindi: "hi",
  Croatian: "hr",
  "Haitian creole": "ht",
  Hungarian: "hu",
  Indonesian: "id",
  Italian: "it",
  Japanese: "ja",
  Korean: "ko",
  Lithuanian: "lt",
  Latvian: "lv",
  Malagasy: "mg",
  Malay: "ms",
  Maltese: "mt",
  "Bai Miao Wen": "mww",
  Dutch: "nl",
  Norwegian: "no",
  "Cretaro Ottomi": "otq",
  Polish: "pl",
  Portuguese: "pt",
  Romanian: "ro",
  Russian: "ru",
  Slovak: "sk",
  Slovenian: "sl",
  Samoan: "sm",
  "Serbian(Cyrillic)": "sr-Cyrl",
  "Serbian(Latin)": "sr-Latn",
  Swedish: "sv",
  Swahili: "sw",
  Thai: "th",
  Klingon: "tlh",
  "Klingon(piqaD)": "tlh-Qaak",
  Tongan: "to",
  Turkish: "tr",
  Tahiti: "ty",
  Ukrainian: "uk",
  Urdu: "ur",
  Vietnamese: "vi",
  "Yucatan Mayan": "yua",
  "Cantonese(Traditional)": "yue"
};
const sogoucode: Dict = {
  "zh-CHS": "zh-CN",
  "zh-CHT": "zh-TW",
  en: "en",
  af: "af",
  ar: "ar",
  bg: "bg",
  bn: "bn",
  "bs-Latn": "bs",
  ca: "ca",
  cs: "cs",
  cy: "cy",
  da: "da",
  de: "de",
  el: "el",
  es: "es",
  et: "et",
  fa: "fa",
  fi: "fi",
  fil: "fil",
  fj: "fj",
  fr: "fr",
  he: "he",
  hi: "hi",
  hr: "hr",
  ht: "ht",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  lt: "lt",
  lv: "lv",
  mg: "mg",
  ms: "ms",
  mt: "mt",
  mww: "mww",
  nl: "nl",
  no: "no",
  otq: "otq",
  pl: "pl",
  pt: "pt",
  ro: "ro",
  ru: "ru",
  sk: "sk",
  sl: "sl",
  sm: "sm",
  "sr-Cyrl": "sr-Cyrl",
  "sr-Latn": "sr-Latn",
  sv: "sv",
  sw: "sw",
  th: "th",
  tlh: "tlh",
  "tlh-Qaak": "tlh-Qaak",
  to: "to",
  tr: "tr",
  ty: "ty",
  uk: "uk",
  ur: "ur",
  vi: "vi",
  yua: "yua",
  yue: "yue"
};
const codesogou = _.invert(sogoucode);

export const sogou2code = (sogou: string): string => sogoucode[sogou];
export const code2sogou = (code: string): string => codesogou[code];
export const SogouLangList = _.keys(SogouLanguages);
export const SogouCodes = _.invert(SogouLanguages);
export const GoogleCodes = _.invert(GoogleLanguages);
export const GoogleLangList = _.keys(GoogleLanguages);
export const BaiduCodes = _.invert(BaiduLanguages);
export const BaiduLangList = _.keys(BaiduLanguages);
export const YoudaoCodes = _.invert(YoudaoLanguages);
export const YoudaoLangList = _.keys(YoudaoLanguages);

export function isChineseLike(code: string): boolean {
  return code in ["zh-cn", "zh-tw", "ja"];
}
