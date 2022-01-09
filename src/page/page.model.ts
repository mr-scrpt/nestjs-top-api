export enum CategoriesLevelTop {
	Courses,
	Services,
	Books,
	Products,
}

export class PageModel {
	levelFirst: CategoriesLevelTop;
	levelSecond: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		salaryJunior: number;
		salaryMiddle: number;
		salarySenior: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	description: string;
	tagsTitle: string;
	tags: string[];
}
