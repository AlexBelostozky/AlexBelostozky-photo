export interface PortraitData {
	desktop: string;
	desktop_webp: string;
	mobile: string;
	mobile_webp: string;
}

export type MainPageData = {
	heading: string,
	description: string,
	portrait: PortraitData,
}