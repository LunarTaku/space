import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {
        if(locals.pocketBase.authStore.isValid) throw redirect(303, '/');
         
        const { email, password } = await Object.fromEntries(
            await request.formData()
        );

        try {
            if(email.toString().length <= 0) throw new Error('Email is required');
            if(password.toString().length <= 0) throw new Error('Password is required');
            if (typeof email !== 'string') throw new Error('Email is required');
            if (typeof password !== 'string') throw new Error('Password is required');

            await locals.pocketBase.collection('users').authWithPassword(email, password);
        } catch (error) {
            if (error instanceof Error) {
                return {
                    email: typeof email !== 'string' ? '' : email,
                    password: typeof password !== 'string' ? '' : password,
                    message: error.message
                };
            }

            return {
                email: typeof email !== 'string' ? '' : email,
                password: typeof password !== 'string' ? '' : password
            };
        }

        throw redirect(303, '/');
	}
};
