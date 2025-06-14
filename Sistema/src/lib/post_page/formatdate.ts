export function formatDate(isoString: string): string {
	const date: Date = new Date(isoString);

	const day: string = String(date.getUTCDate()).padStart(2, '0');
	const month: string = String(date.getUTCMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
	const year: number = date.getUTCFullYear();

	return `${day}/${month}/${year}`;
}