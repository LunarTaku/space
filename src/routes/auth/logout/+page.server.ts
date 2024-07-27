import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals }) => {
		if (!locals.pocketBase.authStore.isValid) throw redirect(303, '/');

		try {
			locals.pocketBase.authStore.clear();
		} catch (error) {
			if (error instanceof Error) {
				return {
					message: error.message
				};
			}
			return {
				message: 'An unknown error occurred'
			};
		}

		redirect(303, '/');
	}
};
