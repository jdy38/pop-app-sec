CREATE TABLE `chapters` (
	`chapterID` integer PRIMARY KEY NOT NULL,
	`chapterName` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `examples` (
	`examplesID` integer PRIMARY KEY NOT NULL,
	`exampleName` text NOT NULL,
	`example_code` text,
	`requirementsID` integer NOT NULL,
	FOREIGN KEY (`requirementsID`) REFERENCES `requirements`(`sectionID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `requirements` (
	`sectionID` integer NOT NULL,
	`content` text NOT NULL,
	`vulnerability` text,
	`how_to_code` text,
	FOREIGN KEY (`sectionID`) REFERENCES `sections`(`sectionID`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sections` (
	`sectionID` integer PRIMARY KEY NOT NULL,
	`sectionName` text NOT NULL,
	`description` text,
	`chapterID` integer NOT NULL,
	FOREIGN KEY (`chapterID`) REFERENCES `chapters`(`chapterID`) ON UPDATE no action ON DELETE no action
);
