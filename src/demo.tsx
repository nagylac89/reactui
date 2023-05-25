import { useState } from "react";
import { TextField } from "./lib/TextField/TextField";
import { Button } from "./lib/index";

export const Demo = () => {
	const [textFieldValue, setTextFieldValue] = useState("");
	return (
		<div>
			<div className="p-5">
				<h3>Buttons</h3>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: 10,
						width: 500
					}}
				>
					<Button>Default</Button>
					<Button color="secondary">Secondary</Button>
					<Button color="danger">Danger</Button>
					<Button color="success">Success</Button>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						marginBottom: 10,
						width: 500
					}}
				>
					<Button disabled>Default</Button>
					<Button disabled color="secondary">
						Secondary
					</Button>
					<Button disabled color="danger">
						Danger
					</Button>
					<Button disabled color="success">
						Success
					</Button>
				</div>

				<div
					style={{
						display: "flex",
						marginBottom: 10
					}}
				>
					<TextField
						label="Text Field:"
						inline
						width={500}
						placeholder="placeholder..."
						value={textFieldValue}
						onChange={(e) => setTextFieldValue(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};
