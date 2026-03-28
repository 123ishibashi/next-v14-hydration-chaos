"use client";

import { useEffect } from "react";

export function TimezoneProvider() {
	useEffect(() => {
		const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
		cookieStore.set({
			name: "timeZone",
			value: tz,
			path: "/",
			expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
		});
	}, []);
	return null;
}
