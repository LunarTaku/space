import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
export const pb = writable<PocketBase | undefined>(undefined, (set) => {
	if (!browser) return;
	const pocketBaseInstance = new PocketBase(env.POCKETBASE_URL);

	pocketBaseInstance.authStore.loadFromCookie(document.cookie);

	set(pocketBaseInstance);
});
