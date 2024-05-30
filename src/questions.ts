import { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    question: "對於進度詐欺這件事我覺得",
    answers: [
      { text: "進度詐欺損人利己，我絕不這麼做", value: "good" },
      { text: "生態就這樣，不要太過分應該還好", value: "good-evil-neutral" },
      {
        text: "不詐欺就練不到我想練的進度，所以這也是沒辦法的事",
        value: "evil",
      },
    ],
  },
  {
    question:
      "在單需團中，團主寫了「禁止先骰」時 (先骰所有裝備，然後放棄點數小的以留下贏面大的裝備)",
    answers: [
      { text: "我會嚴格遵守這個規定，並且鄙夷先骰的人", value: "law" },
      {
        text: "記得這規定的話就遵守，但臨時忘記了也沒辦法",
        value: "law-chaos-neutral",
      },
      {
        text: "我確定不要的裝就會直接按放棄，這跟先骰行為不一樣",
        value: "chaos",
      },
    ],
  },
  {
    question: "當你打王打得正順手，突然一個需要減傷的機制出現!",
    answers: [
      { text: "為了團隊安全，我會犧牲一兩個 GCD 來施放減傷", value: "good" },
      { text: "看情況，有餘裕的話就放", value: "good-evil-neutral" },
      {
        text: "為了我的優秀表現，我會繼續全力輸出，反正減傷總會有人放的",
        value: "evil",
      },
    ],
  },
  {
    question: "製作團隊曾多次公開表示「禁止外部工具」",
    answers: [
      { text: "因此我也絕對不用外部工具", value: "law" },
      { text: "但大家都在用，所以我也多少有使用", value: "law-chaos-neutral" },
      {
        text: "外部工具跟作弊是兩回事，我是正當的使用外部工具",
        value: "chaos",
      },
    ],
  },
  {
    question: "如果看到不認識但覺得很好看的玩家會怎麼做?",
    answers: [
      { text: "盡可能不被對方發現，跑到轉頭不明顯的地方偷看", value: "good" },
      {
        text: "直接點觀察看看對方名片跟穿搭，看完就走",
        value: "good-evil-neutral",
      },
      { text: "當然是先貼上去再說，搞不好還能認識一下", value: "evil" },
    ],
  },
  {
    question: "到了打完副本的 MIP 時間",
    answers: [
      { text: "給剛剛表現最好、幫助最大的隊友", value: "law" },
      { text: "給坦補，或是初見豆芽", value: "law-chaos-neutral" },
      { text: "給名片最好看的人", value: "chaos" },
    ],
  },
  {
    question: "零式開打前，發現平常看不順眼的人忘記開坦姿了",
    answers: [
      { text: "馬上提醒，等等害機工變成絕槍戰士就不好了", value: "good" },
      {
        text: "太雷了吧，默默幫坦放個減傷，但過了一下還是讓補很忙",
        value: "good-evil-neutral",
      },
      {
        text: "故意滑水，反正對坦強攻不會點我，坦這麼爛整隊死光剛好",
        value: "evil",
      },
    ],
  },
  {
    question:
      "今天的你開著補師正在打零式消化，第一輪機制下來，搭檔補師就趴在地上了 (同時也沒有人會復活)",
    answers: [
      { text: "趕緊復活他! 孰能無過呢", value: "good" },
      {
        text: "直接跳樓重新來比較快",
        value: "good-evil-neutral",
      },
      { text: "先打完這輪輸出再說，反正滅團算他的", value: "evil" },
    ],
  },
  {
    question:
      "今天的你開著補師正在打零式消化，發現隊友趴在地上，但你的迅速魔用掉了!",
    answers: [
      { text: "當機立斷，讀條復活!", value: "good" },
      {
        text: "先看看其他人有沒有要幫忙復活，沒有的話也只能摸摸鼻子讀條了",
        value: "good-evil-neutral",
      },
      { text: "召喚/赤魔可以復，他們應該自覺一點幫忙復活吧", value: "evil" },
    ],
  },
  {
    question:
      "今天的你正在零式通關，副本時間剩下十分鐘，隊友喊出打最後一場，但你的飯時效已經沒了",
    answers: [
      { text: "十分鐘也是時間，說不定下一場就過了，吃", value: "good" },
      {
        text: "先看其他人吃不吃，大家都吃就跟著吃，有人沒吃就不吃",
        value: "good-evil-neutral",
      },
      { text: "剩十分鐘吃了浪費，血不夠不會多補兩口？", value: "evil" },
    ],
  },
  {
    question: "在主要為日本玩家的伺服器裡",
    answers: [
      { text: "絕對不在公頻使用中文", value: "law" },
      {
        text: "確定附近都是中文玩家時，白頻中文沒關係吧",
        value: "law-chaos-neutral",
      },
      { text: "又沒規定不能用中文，看不懂不要看", value: "chaos" },
    ],
  },
  {
    question: "當朋友在抱怨隊友很雷的時候，你會回應:",
    answers: [
      {
        text: "哇真的好雷，爛爆了，你好可憐，拍拍",
        value: "law-chaos-neutral",
      },
      { text: "或許對方是新手，甚至是老人呢，別太在意了", value: "law" },
      { text: "您晚餐吃什麼", value: "chaos" },
    ],
  },
];
