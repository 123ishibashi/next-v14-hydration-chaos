import { cookies, headers } from "next/headers";
import { getLocaleFromAcceptLanguage } from "@/lib/locale";
import { ProjectDetailContent } from "./ProjectDetailContent";

export default async function ProjectPage() {
	const headersList = headers();
	const locale = getLocaleFromAcceptLanguage(
		headersList.get("accept-language"),
	);
	const timeZone = (await cookies()).get("timeZone")?.value || "Asia/Tokyo";
	return (
		<ProjectDetailContent
			createdAt={new Date("2026-01-01T00:00:00Z")}
			locale={locale}
			timeZone={timeZone}
		/>
	);
}
