import { store } from "./store";
import React from "react";
import { Provider } from "react-redux";

// eslint-disable-next-line react/display-name,react/prop-types

export const WrapWithProvider = ({ element }: { element: React.ReactNode }) => {
  return <Provider store={store}>{element}</Provider>;
};
