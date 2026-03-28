"use client";

interface Props {
	createdAt: Date;
	locale: string;
	timeZone: string;
}

export function TaskContent({ createdAt, locale, timeZone }: Props) {
	return (
		<div>
			<h1>Sample Task</h1>
			<p>Created: {createdAt.toLocaleString(locale, { timeZone })}</p>
		</div>
	);
}
