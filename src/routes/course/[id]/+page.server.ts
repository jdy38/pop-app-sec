import { getRequirementByPage, getSectionById, getChapterById, getExampleByRequirementId } from '$lib/server/db/dbHelper';

export const load = async ({ params }) => {
    const id = parseInt(params.id, 10);

    const requirement = await getRequirementByPage(id);
   
    const section = await getSectionById(requirement.sectionID);

    const chapter = await getChapterById(section.chapterID)

    const examples = await getExampleByRequirementId(requirement.requirementID);
	return {
        requirement, section, chapter, examples
	};
};