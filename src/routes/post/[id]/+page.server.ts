export const load = async ({ locals, params }) => {
    const postId = params.id
    const post = await locals.pocketBase.collection('posts').getOne(postId, {
        expand: 'user'
    })

    return {
        post
    }
}