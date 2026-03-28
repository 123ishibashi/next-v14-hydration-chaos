import { headers } from "next/headers";
import { getLocaleFromAcceptLanguage } from "@/lib/locale";
import { TaskContent } from "./TaskContent";

export default async function TaskPage() {
	const headersList = await headers();
	const locale = getLocaleFromAcceptLanguage(
		headersList.get("accept-language"),
	);
	return (
		<TaskContent createdAt={new Date("2026-01-01T00:00:00Z")} locale={locale} />
	);
}
