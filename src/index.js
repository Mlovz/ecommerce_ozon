import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import DataProvider from "./redux/store";

ReactDOM.render(
	<Router>
		<DataProvider>
			<App />
		</DataProvider>
	</Router>,
	document.getElementById("root")
);
