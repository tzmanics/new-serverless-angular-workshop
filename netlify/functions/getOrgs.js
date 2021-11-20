const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');
const blocksToHtml = require('@sanity/block-content-to-html');
const { O_DIRECTORY } = require('constants');
const { default: organization } = require('../../backend/schemas/organization');
const { assert } = require('console');

// passing env vars to Sanity.io
const sanity = sanityClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	useCdn: true,
})

exports.handler = async () => {
	// make a query asking for organization in order of title ascending
	const query = '*[_type=="organization"] | order(name asc)';
	const organizationList = await sanity.fetch(query).then((results) => {
		// iterate over each org
		const allOrganizations = results.map((organization) => {
			// assign properties
			const output = {
				id: organization.slug.current,
				name: organization.name,
				description: organization.blurb,
				url: `${process.env.URL}/.netlify/functions/getOrgs`,
				donationAmount: organization.defaultVariant.amount,
				body: blocksToHtml({blocks: organization.body}),
				website: organization.website,
				twitter: organization.twitter,
			};
			// check if there's an image then assign it
			const image = organization.defaultVariant.images &&
			  organization.defaultVariant.images.length > 0 ?
				  organization.defaultVariant.images[0].asset._ref
					: null;
			
			if (image) {
				// use library to make a url from the image records
				output.image = imageUrlBuilder(sanity).image(image).url();
			}
			return output;
		});
		console.log(allOrganizations);
		return allOrganizations;
	});

	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(organizationList),
	};
};