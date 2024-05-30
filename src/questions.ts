import { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    question: "對於進度詐欺這件事我覺得",
    answers: [
      { text: "進度詐欺損人利己，我絕不這麼做", value: "good" },
      { text: "生態就這樣，不要太過分應該還好", value: "good-evil-neutral" },
      { text: "不詐欺就練不到我想練的進度，所以這也是沒辦法的事", value: "evil" },
    ],
  },
  {
    question: "在單需團中，團主寫了「禁止先骰」時 (先骰所有裝備，然後放棄點數小的以留下贏面大的裝備)",
    answers: [
      { text: "我會嚴格遵守這個規定，並且鄙夷先骰的人", value: "law" },
      { text: "記得這規定的話就遵守，但臨時忘記了也沒辦法", value: "law-chaos-neutral" },
      { text: "我確定不要的裝就會直接按放棄，這跟先骰行為不一樣", value: "chaos" },
    ],
  },
  {
    question: "當你打王打得正順手，突然一個需要減傷的機制出現!",
    answers: [
      { text: "為了團隊安全，我會犧牲一兩個 GCD 來施放減傷", value: "good" },
      { text: "看情況，有餘裕的話就放", value: "good-evil-neutral" },
      { text: "為了我的優秀表現，我會繼續全力輸出，反正減傷總會有人放的", value: "evil" },
    ],
  },
  {
    question: "製作團隊曾多次公開表示「禁止外部工具」",
    answers: [
      { text: "因此我也絕對不用外部工具", value: "law" },
      { text: "但大家都在用，所以我也多少有使用", value: "law-chaos-neutral" },
      { text: "外部工具跟作弊是兩回事，我是正當的使用外部工具", value: "chaos" },
    ],
  },
];
