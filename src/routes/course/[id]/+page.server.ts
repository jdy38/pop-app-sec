import { getRequirementById, getAllExamples, getSectionById, getChapterById, getExampleByRequirementId } from '$lib/server/db/dbHelper';

export const load = async ({ params }) => {
    const id = parseInt(params.id, 10);

    const requirement = await getRequirementById(id);
   
    const section = await getSectionById(requirement.sectionID);

    const chapter = await getChapterById(section.chapterID)

    const examples = await getExampleByRequirementId(id);
	return {
        requirement, section, chapter, examples
	};
};