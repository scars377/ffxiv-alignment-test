import { QUESTIONS } from "./questions";
import {Value} from "./types";

const vals: (Value | null)[] = [
  null,
  "good",
  "good-evil-neutral",
  "evil",
  "law",
  "law-chaos-neutral",
  "chaos",
];

const encodeURISafe = (code: string) =>
  code.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ".");

const decodeURISafe = (code: string) =>
  code.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "=");

export const encode = (answers: (Value | null)[]): string => {
  const values = answers.map((a) => vals.indexOf(a));
  const bytes = Uint8Array.from(values);
  const str = new TextDecoder().decode(bytes);
  const code = btoa(str);
  const encoded = encodeURISafe(code);

  return encoded;
};

export const decode = (code?: string): (Value | null)[] => {
  if (!code) {
    throw new Error("invalid code");
  }

  const decoded = decodeURISafe(code);
  const str = atob(decoded);
  const bytes = new TextEncoder().encode(str);
  const answers = [].map.call(bytes, (b) => vals[b]) as (Value | null)[];

  if (answers.length != QUESTIONS.length) {
    throw new Error("invalid code");
  }

  return answers;
};
