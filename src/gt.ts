const translations = {
  good: "善良",
  "good-evil-neutral": "中立",
  evil: "邪惡",
  law: "守序",
  "law-chaos-neutral": "中立",
  chaos: "混亂",

  "result:": "結果:",

  "lawful-good": "守序善良",
  "neutral-good": "中立善良",
  "chaotic-good": "混亂善良",
  "lawful-neutral": "守序中立",
  "neutral-neutral": "絕對中立",
  "chaotic-neutral": "混亂中立",
  "lawful-evil": "守序邪惡",
  "neutral-evil": "中立邪惡",
  "chaotic-evil": "混亂邪惡",

  "go back": "返回編輯",
  "go to result": "檢視結果",
  clear: "清除",
};

type TranslationKey = keyof typeof translations;
export const gt = (key: TranslationKey | string): string =>
  translations.hasOwnProperty(key) ? translations[key as TranslationKey] : key;
