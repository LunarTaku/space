import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {

		const { name, email, password, passwordConfirm } = await Object.fromEntries(
			await request.formData()
		);
		try {
			if (Number(name)! > 0) throw new Error('Name is required');
			if (typeof name !== 'string') throw new Error('Name is required');
			if (typeof email !== 'string') throw new Error('Email is required');
			if (Number(password) < 8) throw new Error('Password must be at least 8 characters long');
			if (typeof password !== 'string') throw new Error('Password is required');
			if (Number(passwordConfirm) < 8)
				throw new Error('Password confirmation must be at least 8 characters long');
			if (typeof passwordConfirm !== 'string') throw new Error('Password confirmation is required');

			const userWithSameUsername = await locals.pocketBase
				.collection('users')
				.getFirstListItem(`name="${name}"`)
				.catch(() => null);
			const userWithSameEmail = await locals.pocketBase
				.collection('users')
				.getFirstListItem(`email="${email}"`)
				.catch(() => null);

			if (userWithSameUsername) throw new Error('Username already taken');
			if (userWithSameEmail) throw new Error('Email already taken');

			if (password !== passwordConfirm) throw new Error('Passwords do not match');

			await locals.pocketBase.collection('users').create({
				name,
				password,
				passwordConfirm,
				email,
				emailVisibility: false
			});

			await locals.pocketBase.collection('users').authWithPassword(email, password);
		} catch (error) {
			if (error instanceof Error) {
				return {
					name: typeof name !== 'string' ? '' : name,
					email: typeof email !== 'string' ? '' : email,
					password: typeof password !== 'string' ? '' : password,
					message: error.message
				};
			}

			return {
				name: typeof name !== 'string' ? '' : name,
				email: typeof email !== 'string' ? '' : email,
				password: typeof password !== 'string' ? '' : password
			};
		}

		throw redirect(303, '/');
	}
};
