"use client";

import { Button } from "third-party-ui-component";

export function SubTaskContent() {
	return (
		<div>
			<h1>Sample SubTask</h1>
			<Button onClick={() => alert("Downloaded!")}>Download</Button>
		</div>
	);
}
