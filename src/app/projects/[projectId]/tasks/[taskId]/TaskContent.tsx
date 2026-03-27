"use client";

interface Props {
	createdAt: Date;
	locale: string;
}

export function TaskContent({ createdAt, locale }: Props) {
	return (
		<div>
			<h1>Sample Task</h1>
			<p>Created: {createdAt.toLocaleString(locale)}</p>
		</div>
	);
}
