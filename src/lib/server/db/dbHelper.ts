import { db } from '$lib/server/db/client';
import { 
    chapters, type InsertChapterParams, sections, type InsertSectionParams,
    requirements, type InsertRequirementParams, examples, type InsertExampleParams
} from '$lib/server/db/schema';
import { asc, eq } from 'drizzle-orm';

const createNewChapter = async (chapter: InsertChapterParams) => {
	await db.insert(chapters).values(chapter);
};

const getChapterById = async (id: number) => {
	const chapter = await db.select().from(chapters).where(eq(chapters.chapterID, id));

	return chapter[0];
};

const deleteChapterById = async (id: number) => {
	await db.delete(chapters).where(eq(chapters.chapterID, id));
};

const getAllChapters = async () => {
	return await db.select().from(chapters).orderBy(asc(chapters.chapterID));
};

const editChapterById = async (chapter: InsertChapterParams & { id: number }) => {
	await db.update(chapters).set(chapter).where(eq(chapters.chapterID, chapters.chapterID));
};

export { deleteChapterById, editChapterById, getAllChapters, getChapterById, createNewChapter };

// Sections

const createNewSection = async (section: InsertSectionParams) => {
	await db.insert(sections).values(section);
};

const getSectionById = async (id: number) => {
	const section = await db.select().from(sections).where(eq(sections.sectionID, id));

	return section[0];
};

const deleteSectionById = async (id: number) => {
	await db.delete(sections).where(eq(sections.sectionID, id));
};

const getAllSections = async () => {
	return await db.select().from(sections).orderBy(asc(sections.sectionID));
};

const editSectionById = async (section: InsertSectionParams & { id: number }) => {
	await db.update(sections).set(section).where(eq(sections.sectionID, sections.sectionID));
};

export { deleteSectionById, editSectionById, getAllSections, getSectionById, createNewSection };

// Requirements

const createNewRequirement = async (requirement: InsertRequirementParams) => {
	await db.insert(requirements).values(requirement);
};

const getRequirementById = async (id: number) => {
	const requirement = await db.select().from(requirements).where(eq(requirements.requirementID, id));

	return requirement[0];
};

const deleteRequirementById = async (id: number) => {
	await db.delete(requirements).where(eq(requirements.requirementID, id));
};

const getAllRequirements = async () => {
	return await db.select().from(requirements).orderBy(asc(requirements.requirementID));
};

const editRequirementById = async (requirement: InsertRequirementParams & { id: number }) => {
	await db.update(requirements).set(requirement).where(eq(requirements.requirementID, requirements.requirementID));
};

export { deleteRequirementById, editRequirementById, getAllRequirements, getRequirementById, createNewRequirement};

// Examples

const createNewExample = async (example: InsertExampleParams) => {
	await db.insert(examples).values(example);
};

const getExampleById = async (id: number) => {
	const example = await db.select().from(examples).where(eq(examples.exampleID, id));

	return example[0];
};

const deleteExampleById = async (id: number) => {
	await db.delete(examples).where(eq(examples.exampleID, id));
};

const getAllExamples = async () => {
	return await db.select().from(examples).orderBy(asc(examples.exampleID));
};

const editExampleById = async (example: InsertExampleParams & { id: number }) => {
	await db.update(examples).set(example).where(eq(examples.exampleID, examples.exampleID));
};

export { deleteExampleById, editExampleById, getAllExamples, getExampleById, createNewExample};