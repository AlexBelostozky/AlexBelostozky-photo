import { cloudinaryConfig } from "@/cloudinaryConfig";

export const getImageUrl = (publicId: string) => {
	return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.jpg`;
}