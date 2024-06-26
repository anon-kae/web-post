"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
