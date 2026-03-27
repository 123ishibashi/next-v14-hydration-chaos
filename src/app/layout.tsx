import "third-party-ui-component/style.css";
import "@/app/globals.css";
import type { Metadata } from "next";
import { SideNavigation } from "@/components/sideNavigation/SideNavigation";

export const metadata: Metadata = {
	title: "Next.js Hydration Chaos",
	description: "Next.js Hydration Chaos",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className="layout">
					<SideNavigation />
					<main className="main">{children}</main>
				</div>
			</body>
		</html>
	);
}
