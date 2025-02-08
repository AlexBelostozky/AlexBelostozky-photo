export type ProjectTags = {
	chassis: string;
	make: string;
	model: string;
	year: number;
};

export type ProjectType = {
	'name': string,
	'cover_url': string,
	'url': string,
	'images': Array<string>,
	'description': string,
	'tags': ProjectTags,
}