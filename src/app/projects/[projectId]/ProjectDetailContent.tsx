"use client";

interface Props {
	createdAt: Date;
	locale: string;
	timeZone: string;
}

export function ProjectDetailContent({ createdAt, locale, timeZone }: Props) {
	return (
		<div>
			<h1>Sample Project</h1>
			<p>Created: {createdAt.toLocaleString(locale, { timeZone })}</p>
		</div>
	);
}
