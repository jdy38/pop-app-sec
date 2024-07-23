import { integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';

const chapters = sqliteTable('chapters', {
	chapterID: integer('chapterID')
		.primaryKey()
		.notNull(),
	chapterName: text('chapterName').notNull(),
});

const sections = sqliteTable('sections', {
    sectionID: integer('sectionID')
        .primaryKey()
        .notNull(),
    sectionName: text('sectionName').notNull(),
    description: text('description'),
    chapterID: integer('chapterID')
        .notNull()
        .references(() => chapters.chapterID)
});

const requirements = sqliteTable('requirements', {
    requirementID: integer('requirementID')
        .primaryKey()
        .notNull(),
    content: text('content').notNull(),
    vulnerability: text('vulnerability'),
    how_to_code: text('how_to_code'),
    sectionID: integer('sectionID')
        .notNull()
        .references(() => sections.sectionID),
    pages: integer('pages').notNull()
});

const examples = sqliteTable('examples', {
    exampleID: integer('exampleID')
        .primaryKey()
        .notNull(),
    exampleName: text('exampleName').notNull(),
    example_code: text('example_code'),
    requirementID: integer('requirementID')
        .notNull()
        .references(() => requirements.requirementID)
});



type InsertChapterParams = typeof chapters.$inferInsert;
type InsertSectionParams = typeof sections.$inferInsert;
type InsertRequirementParams = typeof requirements.$inferInsert;
type InsertExampleParams = typeof examples.$inferInsert;

export { chapters, type InsertChapterParams };
export { sections, type InsertSectionParams };
export { requirements, type InsertRequirementParams };
export { examples, type InsertExampleParams };