import { getAllChapters, getAllRequirements, getAllSections } from '$lib/server/db/dbHelper';

export const load = async () => {

    const chapters = await getAllChapters();

    const sections = await getAllSections();

    const requirements = await getAllRequirements();

	return {
		chapters,
        sections,
        requirements,
	};
};

// To do:
// Get number of sections - insert in subtitles
// Fix link redirects - should be course/reqID
// Estimated hours - number of sections x 1 + 1 hr for range[1]
// When filter is clicked, filter pop up box should appear
// Functional filtering and searching
