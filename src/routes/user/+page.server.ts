import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
	if (!locals.pocketBase.authStore.isValid) return redirect(302, '/');
};
