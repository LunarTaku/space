export const load = async ({ locals, url }) => {
    const page = Number(url.searchParams.get('page')) || 0
    if(isNaN(page)) return { message: "Invalid page number" }

	const posts = await locals.pocketBase.collection('posts').getList(page, 30, { sort: '-created' })

    return {
        posts: posts.items,
        page,
        totalPosts: posts.totalItems,
        totalPages: posts.totalPages
    }
};