import { Cloudinary } from "@cloudinary/url-gen";

// Cloudinary configuration
const cloudinaryConfig = {
	apiKey: process.env.VUE_APP_CLOUDINARY_API_KEY,
	cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
}

// Create a Cloudinary instance
const cld = new Cloudinary({
	cloud: {
		cloudName: cloudinaryConfig.cloudName,
	},
})

export { cld, cloudinaryConfig }
