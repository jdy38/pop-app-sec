import {  getSectionById, getChapterById } from '$lib/server/db/dbHelper';

export const load = async ({ params }) => {
    const id = parseInt(params.id, 10);

    const section = await getSectionById(id);

    const chapter = await getChapterById(section.chapterID)

	return {
         section, chapter
	};
};