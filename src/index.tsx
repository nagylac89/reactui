import React from "react";
import ReactDOM from "react-dom/client";
import { Demo } from "./demo";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<div>
			<Demo></Demo>
		</div>
	</React.StrictMode>
);
