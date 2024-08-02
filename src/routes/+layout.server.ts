export const load = async ({ locals }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const user: any = locals.pocketBase.authStore.model;
	let avatar = null;
	if (locals.pocketBase.authStore.isValid) {
		avatar =
			user.avatar || (await locals.pocketBase.collection('avatars').getOne(user.defaultAvatar));
	}

	return {
		loggedIn: locals.pocketBase.authStore.isValid,
		user,
		avatar: avatar
	};
};
