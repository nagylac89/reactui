import { FC, useEffect, useState } from "react";
import "./Button.css";

interface ButtonProps {
	type?: "button" | "submit";
	color?: "primary" | "secondary" | "danger" | "success";
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
	type = "button",
	color = "primary",
	children,
	disabled,
	onClick
}) => {
	const [classNameList, setClassNameList] = useState<String[]>([]);

	useEffect(() => {
		const classNames = ["btn"];
		classNames.push(`btn-${color}`);

		setClassNameList(classNames);
	}, [color]);

	const onClickEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<button
			type={type}
			className={classNameList.join(" ")}
			onClick={onClickEventHandler}
			disabled={disabled || false}
		>
			{children}
		</button>
	);
};
