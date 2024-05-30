export type Value =
  | "good"
  | "good-evil-neutral"
  | "evil"
  | "law"
  | "law-chaos-neutral"
  | "chaos";

type Answer = {
  text: string;
  value: Value;
};

type Question = {
  question: string;
  answers: Answer[];
};

export const QUESTIONS: Question[] = [
  {
    question: "test",
    answers: [
      { text: "good", value: "good" },
      { text: "neutral", value: "good-evil-neutral" },
      { text: "evil", value: "evil" },
    ],
  },
  {
    question: "test2",
    answers: [
      { text: "law", value: "law" },
      { text: "neutral", value: "law-chaos-neutral" },
      { text: "chaos", value: "chaos" },
    ],
  },
];
