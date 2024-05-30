import React, { useState, useEffect } from "react";
import { QUESTIONS, Value } from "./questions";
import {
  ChakraProvider,
  Radio,
  RadioGroup,
  Stack,
  Container,
  DarkMode,
  useColorMode,
  Card,
  CardBody,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export const App = () => {
  const [submit, setSubmit] = useState(false);

  const [answers, setAnswers] = useState<(Value | null)[]>(
    QUESTIONS.map((_) => null),
  );

  return (
    <ChakraProvider>
      {submit ? (
        <Container>
          123
          <Button onClick={() => setSubmit(false)}>Back</Button>
        </Container>
      ) : (
        <Container>
          {QUESTIONS.map((item, idx) => {
            const ans = answers[idx];
            const setAns = (val: Value) =>
              setAnswers(answers.map((v, i) => (i === idx ? val : v)));

            return (
              <Card key={idx}>
                <CardBody>
                  <Heading>{item.question}</Heading>

                  <RadioGroup onChange={setAns} value={ans as string}>
                    <Stack direction="column">
                      {item.answers.map(({ text, value }) => (
                        <Radio value={value} key={value}>
                          {text}
                        </Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                </CardBody>
              </Card>
            );
          })}

          <Button colorScheme="blue" disabled onClick={() => setSubmit(true)}>
            Submit
          </Button>
        </Container>
      )}
    </ChakraProvider>
  );
};
