import {
  Box,
  Heading,
  styled,
  Table,
  Tbody,
  Td as _Td,
  Th as _Th,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { gt } from "./gt";
import { Value } from "./types";

const Th = styled(_Th, {
  baseStyle: {
    textAlign: "center",
  },
});

const Td = styled(_Td, {
  baseStyle: {
    textAlign: "center",
  },
});

type Alignment =
  | "lawful-good"
  | "neutral-good"
  | "chaotic-good"
  | "lawful-neutral"
  | "neutral-neutral"
  | "chaotic-neutral"
  | "lawful-evil"
  | "neutral-evil"
  | "chaotic-evil";

const sumMap: Record<Value, Alignment[]> = {
  good: ["lawful-good", "neutral-good", "chaotic-good"],
  "good-evil-neutral": ["lawful-neutral", "neutral-neutral", "chaotic-neutral"],
  evil: ["lawful-evil", "neutral-evil", "chaotic-evil"],
  law: ["lawful-good", "lawful-neutral", "lawful-evil"],
  "law-chaos-neutral": ["neutral-good", "neutral-neutral", "neutral-evil"],
  chaos: ["chaotic-good", "chaotic-neutral", "chaotic-evil"],
};

export const ResultPage = () => {
  const count: Record<Value, number> = {
    good: 0,
    "good-evil-neutral": 0,
    evil: 0,
    law: 0,
    "law-chaos-neutral": 0,
    chaos: 0,
  };
  const sums = {
    "lawful-good": 0,
    "neutral-good": 0,
    "chaotic-good": 0,
    "lawful-neutral": 0,
    "neutral-neutral": 0,
    "chaotic-neutral": 0,
    "lawful-evil": 0,
    "neutral-evil": 0,
    "chaotic-evil": 0,
  };

  const answers = useSelector((state: RootState) => state.app.answers);

  answers.forEach((ans: Value | null) => {
    if (ans) {
      count[ans] += 1;
      sumMap[ans].forEach((sum) => (sums[sum] += 1));
    }
  });

  const alignment = Object.entries(sums).reduce((acc, elm) =>
    acc[1] > elm[1] ? acc : elm,
  );

  const getColor = (key: Alignment): string => {
    if (alignment[0] == key) {
      return "teal";
    } else if (sums[key] > 0) {
      return "whiteAlpha.50";
    } else {
      return "none";
    }
  };

  return (
    <Box>
      <Table my={8}>
        <Tbody>
          <Tr>
            <Td></Td>
            <Th>
              {gt("law")}
              <br />
              {count["law"]}
            </Th>
            <Th>
              {gt("law-chaos-neutral")}
              <br />
              {count["law-chaos-neutral"]}
            </Th>
            <Th>
              {gt("chaos")}
              <br />
              {count["chaos"]}
            </Th>
          </Tr>

          <Tr>
            <Th>
              {gt("good")} {count["good"]}
            </Th>
            <Td background={getColor("lawful-good")}>{sums["lawful-good"]}</Td>
            <Td background={getColor("neutral-good")}>
              {sums["neutral-good"]}
            </Td>
            <Td background={getColor("chaotic-good")}>
              {sums["chaotic-good"]}
            </Td>
          </Tr>
          <Tr>
            <Th>
              {gt("good-evil-neutral")} {count["good-evil-neutral"]}
            </Th>

            <Td background={getColor("lawful-neutral")}>
              {sums["lawful-neutral"]}
            </Td>
            <Td background={getColor("neutral-neutral")}>
              {sums["neutral-neutral"]}
            </Td>
            <Td background={getColor("chaotic-neutral")}>
              {sums["chaotic-neutral"]}
            </Td>
          </Tr>
          <Tr>
            <Th>
              {gt("evil")} {count["evil"]}
            </Th>
            <Td background={getColor("lawful-evil")}>{sums["lawful-evil"]}</Td>
            <Td background={getColor("neutral-evil")}>
              {sums["neutral-evil"]}
            </Td>
            <Td background={getColor("chaotic-evil")}>
              {sums["chaotic-evil"]}
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading textAlign={"center"}>
        {gt("result:")} {gt(alignment[0])}
      </Heading>
    </Box>
  );
};
