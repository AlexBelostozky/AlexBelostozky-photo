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

// Get Image
// const myImage = cld
//   .image(props.publicId)
//   .resize(thumbnail().width(300).height(300).gravity(autoGravity()))
//   .delivery(format('auto'))
//   .delivery(quality('auto'))
// const plugins = [placeholder()]

export default cld