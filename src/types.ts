export type Value =
    | "good"
    | "good-evil-neutral"
    | "evil"
    | "law"
    | "law-chaos-neutral"
    | "chaos";

export type Answer = {
  text: string;
  value: Value;
};

export type Question = {
  question: string;
  answers: Answer[];
};