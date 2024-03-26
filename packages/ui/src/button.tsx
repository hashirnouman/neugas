"use client";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps,
	type PressEvent,
} from "react-aria-components";

// Define a type for valid variants
type Variant =
	| "primary"
	| "warning"
	| "success"
	| "error"
	| "info"
	| "secondary";

interface IButtonProps extends ButtonProps {
	onClick?: (e: PressEvent) => void;
	children: ReactNode;
	variant?: Variant | "";
}

export const Button = (props: IButtonProps) => {
	const { onClick, variant, children, isDisabled, ...rest } = props;

	let styleClass = "";
	switch (variant) {
		case "primary":
			styleClass =
				"bg-primary-default hover:bg-primary-dark-600 active:bg-primary-dark-700 active:scale-[95%]";
			break;
		case "warning":
			styleClass =
				"bg-warning-default hover:bg-warning-dark-600 active:bg-warning-dark-700 active:scale-[95%]";
			break;
		case "success":
			styleClass =
				"bg-success-default hover:bg-success-dark-600 active:bg-success-dark-700 active:scale-[95%]";
			break;
		case "error":
			styleClass =
				"bg-error-default hover:bg-error-dark-600 active:bg-error-dark-700 active:scale-[95%]";
			break;
		case "info":
			styleClass =
				"bg-info-default hover:bg-info-dark-600 active:bg-info-dark-700 active:scale-[95%]";
			break;
		case "secondary":
			styleClass =
				"bg-secondary-default hover:bg-secondary-dark-600 active:bg-secondary-dark-700 active:scale-[95%]";
			break;
		default:
			// Default to primary if variant is not provided or not recognized
			styleClass =
				"bg-primary-default hover:bg-primary-dark-600 active:bg-primary-dark-700";
	}

	const className = `h-[48px] w-[240px] transform rounded-[10px] text-white shadow-lg outline-none transition delay-100 ease-in-out ${styleClass} ${
		isDisabled ? "disabled:pointer-events-none disabled:opacity-50" : ""
	}`;

	return (
		<AriaButton
			onPress={onClick}
			{...rest}
			className={className}
			isDisabled={isDisabled}
		>
			{children}
		</AriaButton>
	);
};
