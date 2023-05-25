import { ChangeEvent, FC, FocusEvent, useEffect, useMemo } from "react";
import "./TextField.css";

interface TextFieldProps {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	label?: React.ReactNode;
	inline?: boolean;
	labelWidth?: string | number;
	width?: string | number;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({
	value,
	disabled,
	placeholder,
	label,
	labelWidth = 100,
	width,
	inline,
	onChange,
	onFocus,
	onBlur
}) => {
	const containerStyle = useMemo(() => {
		let retval = {};

		if (width) {
			if (typeof width === "number") {
				retval = {
					width: width,
					flex: `0 0 ${width}px`
				};
			} else if (typeof width === "string") {
				retval = {
					width: width,
					flex: `0 0 ${width}`
				};
			}
		}

		return retval;
	}, [width]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
		if (onFocus) {
			onFocus(e);
		}
	};

	const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
		if (onBlur) {
			onBlur(e);
		}
	};

	return (
		<div
			className={
				"field-container" + (inline ? " field-container-inline" : "")
			}
			style={containerStyle}
		>
			{label && (
				<div className="field-label" style={{ width: labelWidth }}>
					{label}
				</div>
			)}
			<div className="field-body">
				<input
					type="text"
					className="text-field"
					placeholder={placeholder}
					value={value}
					disabled={disabled || false}
					onChange={onChangeHandler}
					onFocus={onFocusHandler}
					onBlur={onBlurHandler}
				/>
			</div>
		</div>
	);
};
