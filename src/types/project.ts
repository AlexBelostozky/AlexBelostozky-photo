export interface ImageData {
	url: string;
	width: number;
	height: number;
}

export type ProjectTags = {
	chassis: string;
	make: string;
	model: string;
	year: number;
};

export type ProjectType = {
	'name': string,
	'cover_url': string,
	'slug': string,
	'images': Array<ImageData>,
	'description': string,
	'tags': ProjectTags,
}