import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

import "../public/static/scss/style.scss";

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
