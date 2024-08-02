import { containsWord } from '$lib/util.js';

export const load = async ({ locals, params, url }) => {
	const tagName = params.name;
	const page = Number(url.searchParams.get('page')) || 0;

	try {
		const posts = await locals.pocketBase.collection('posts').getList(page, 30, {
			filter: `tags ~ "${tagName}"`,
			sort: '-created'
		});

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const filteredPosts: any[] = [];

		
		posts.items.forEach((post) => {
			if(containsWord(post.tags, tagName)) {
				return filteredPosts.push(post)
			}
			return;
		})

		return {
			posts: filteredPosts,
			totalPosts: posts.totalItems,
			totalPages: posts.totalPages
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Error fetching tags:', error);
		return {
			tag: [],
			error: error.message
		};
	}
};
