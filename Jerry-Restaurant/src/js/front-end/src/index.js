import React from 'react';
import './index.css';
import App from './App';
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

document.documentElement.style.fontsize = 100/750 +'vw';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>

      <App />

  </StrictMode>
);