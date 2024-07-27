export const load = ({ locals }) => {
	return {
		loggedIn: locals.pocketBase.authStore.isValid
	};
};