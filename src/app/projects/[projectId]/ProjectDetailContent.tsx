"use client";

interface Props {
	createdAt: Date;
	locale: string;
}

export function ProjectDetailContent({ createdAt, locale }: Props) {
	return (
		<div>
			<h1>Sample Project</h1>
			<p>Created: {createdAt.toLocaleString(locale)}</p>
		</div>
	);
}
