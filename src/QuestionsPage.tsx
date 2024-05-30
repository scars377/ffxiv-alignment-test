import {
  Button,
  Card,
  CardBody,
  Box,
  Heading,
  Radio,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { QUESTIONS } from "./questions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAnswers, RootState, setAnswer, setAnswers } from "./store";
import { Link, useSearchParams } from "react-router-dom";
import { decode, encode } from "./code";
import { gt } from "./gt";

const Question = ({ idx, disabled }: { idx: number; disabled: boolean }) => {
  const item = QUESTIONS[idx];
  const ans = useSelector((state: RootState) => state.app.answers[idx]);
  const dispatch = useDispatch();

  return (
    <Card key={idx}>
      <CardBody>
        <Heading size={"md"}>{item.question}</Heading>
        <Stack pt={4}>
          {item.answers.map(({ text, value }) => (
            <Radio
              key={text}
              onChange={() => dispatch(setAnswer({ idx, value }))}
              isChecked={ans === value}
              isDisabled={disabled}
            >
              {text}
            </Radio>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

const useParamCode = () => {
  const answers = useSelector((state: RootState) => state.app.answers);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      try {
        const answers = decode(code);
        dispatch(setAnswers(answers));
      } catch {}
    }
  }, []);

  useEffect(() => {
    setSearchParams({ code: encode(answers) }, { replace: true });
  }, [answers]);

  return code;
};

export const QuestionsPage = ({ disabled = false }: { disabled?: boolean }) => {
  const answers = useSelector((state: RootState) => state.app.answers);
  const dispatch = useDispatch();

  const code = useParamCode();

  const hasEmptyAnswer = answers.some((a) => a === null);

  return (
    <Box>
      <Stack spacing={4}>
        {QUESTIONS.map((_, idx) => (
          <Question key={idx} idx={idx} disabled={disabled} />
        ))}

        <Stack direction={"row"} spacing={8} alignItems={"center"}>
          {disabled ? (
            <Link to={{ pathname: "/edit", search: `?code=${code}` }}>
              <Button>{gt("go back")}</Button>
            </Link>
          ) : (
            <>
              <Link to={{ pathname: "/show", search: `?code=${code}` }}>
                <Button isDisabled={hasEmptyAnswer}>
                  {gt("go to result")}
                </Button>
              </Link>
              <Spacer />
              <Button size="sm" onClick={() => dispatch(clearAnswers())}>
                {gt("clear")}
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
