import "third-party-ui-component/style.css";
import "@/app/globals.css";
import type { Metadata } from "next";
import { SideNavigation } from "@/components/sideNavigation/SideNavigation";
import { TimezoneProvider } from "@/components/TimezoneProvider";

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
				<TimezoneProvider />
				<div className="layout">
					<SideNavigation />
					<main className="main">{children}</main>
				</div>
			</body>
		</html>
	);
}
