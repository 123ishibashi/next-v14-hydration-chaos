import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button.js";

export function Page({ children, showButton }) {
	if (showButton) {
		return _jsxs("div", {
			children: [children, _jsx(Button, { children: "Click" })],
		});
	}

	return _jsx("div", { children: children });
}
