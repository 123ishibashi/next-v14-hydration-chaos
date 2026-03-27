import type React from "react";

export function Button(
	props: React.ButtonHTMLAttributes<HTMLButtonElement>,
): React.JSX.Element;

export function Page(props: {
	children?: React.ReactNode;
	showButton?: boolean;
}): React.JSX.Element;
