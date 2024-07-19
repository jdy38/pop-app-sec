import { getAllChapters } from '$lib/server/db/dbHelper';

export const load = async () => {
	return {
		chapters: await getAllChapters()
	};
};