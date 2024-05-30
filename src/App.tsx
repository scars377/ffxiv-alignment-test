import React, { useLayoutEffect } from "react";
import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import { ChakraProvider, Container, useColorMode } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";
import { QuestionsPage } from "./QuestionsPage";
import { ResultPage } from "./ResultPage";

const router = createHashRouter([
  {
    path: "/edit",
    element: <QuestionsPage />,
  },
  {
    path: "/show",
    element: (
      <>
        <QuestionsPage disabled />
        <ResultPage />
      </>
    ),
  },
  {
    path: "*",
    loader: () => redirect("/edit"),
  },
]);

const ForceDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useLayoutEffect(() => {
    if (colorMode !== "dark") {
      toggleColorMode();
    }
  }, [colorMode]);

  return null;
};

export const App = () => (
  <ChakraProvider>
    <ForceDarkMode />
    <Provider store={store}>
      <Container my={8}>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  </ChakraProvider>
);
