import { getAllChapters, getAllRequirements } from '$lib/server/db/dbHelper';
import { getAllSections } from '$lib/server/db/dbHelper';

// comment out type for js
type Section =  {
	chapterID: number;
	description: string | null;
	sectionID: number;
	sectionName: string;
}

export const load = async () => {
	return {
		chapters: (await getAllChapters()).map(x => ({...x, open: false})),
    sections: parseSections(await getAllSections()),
	requirements: await getAllRequirements()
	};
};

function parseSections(sections: Section[]) {
	let currChapterID = 1;
	let finalSectionsList = [];
	let sectionsList : Section[] = []; // remove type for js
	for(let i = 0; i < sections.length; i++){
		if (sections[i].chapterID == currChapterID){
			sectionsList.push(sections[i]);
		} else {
			finalSectionsList.push(sectionsList);
			sectionsList = [sections[i]];
			currChapterID += 1;
		}
	}
	finalSectionsList.push(sectionsList);

	return finalSectionsList;
}