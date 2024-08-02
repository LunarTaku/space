import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const tags = await locals.pocketBase.collection('tags').getFullList({
		sort: '-uses',
		page: 0,
		perPage: 10
	});

	return {
		tags: tags
	};
};

export const actions = {
	default: async ({ locals, request }) => {
		if (!locals.pocketBase.authStore.isValid) throw redirect(303, '/');

		const { title, description, tags, image } = Object.fromEntries(await request.formData());

		try {
			if (title.toString().length <= 0) throw new Error('Title is required');
			if (description.toString().length <= 0) throw new Error('Description is required');
			if (!image) throw new Error('Image is required');
			if (typeof title !== 'string') throw new Error('Title is required');
			if (typeof description !== 'string') throw new Error('Description is required');
			if (typeof tags !== 'string') throw new Error('Tags are required');
			if (typeof image !== 'object') throw new Error('Image is required');

			await locals.pocketBase.collection('posts').create({
				title,
				content: description,
				tags: tags.split(','),
				image,
				user: locals.pocketBase.authStore.model?.id
			});

			const splitTags = tags.split(' ');
			splitTags.forEach(async (tag) => {
				const locatedTag = await locals.pocketBase
					.collection('tags')
					.getFirstListItem(`tagName="${tag}"`);
				if (locatedTag) {
					locals.pocketBase.collection('tags').update(locatedTag.id, { uses: locatedTag.uses + 1 });
				}
			})
		} catch (error) {
			if (error instanceof Error) {
				return {
					title: typeof title !== 'string' ? '' : title,
					description: typeof description !== 'string' ? '' : description,
					tags: typeof tags !== 'string' ? '' : tags,
					message: error.message
				};
			}

			return {
				title: typeof title !== 'string' ? '' : title,
				description: typeof description !== 'string' ? '' : description,
				tags: typeof tags !== 'string' ? '' : tags
			};
		}

		throw redirect(303, '/');
	}
};
