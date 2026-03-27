export function getLocaleFromAcceptLanguage(
	acceptLanguage: string | null,
): string {
	if (!acceptLanguage) return "ja-JP";
	return acceptLanguage.split(",")[0].split(";")[0].trim() || "ja-JP";
}
