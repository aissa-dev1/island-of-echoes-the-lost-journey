/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import AppRouter from "./appRouter";

const root = document.getElementById("root");

render(() => <AppRouter />, root!);
