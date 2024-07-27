<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
	let email = form?.email ?? '';
	let password = form?.password ?? '';

	$: error = form?.message;
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="w-full max-w-[27.5rem]">
	{#if error}
		<div class="bg-red-500 text-white p-2 rounded-md mb-2">{error}</div>
	{/if}
	<form
		method="post"
		use:enhance={() => {
			return async ({ update }) => {
				await update({ reset: false, invalidateAll: true });
			};
		}}
		class="w-full p-5"
	>
		<div class="flex flex-col gap-2 w-full text-white/90">
			<label for="email" class="text-white/70">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				class="bg-neutral-800 rounded-md p-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
			/>

			<label for="password" class="text-white/70">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				bind:value={password}
				class="bg-neutral-800 rounded-md p-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
			/>
		</div>

		<button
			type="submit"
			class="w-full bg-blue-400 disabled:bg-neutral-700 disabled:cursor-not-allowed rounded-lg py-2 px-5 mt-5 transition-all"
			disabled={email.length === 0 || password.length < 8}>Login</button
		>
		<p class="text-neutral-500 mt-2 text-sm">
			Don't have an account? <a href="/auth/register" class="text-blue-400">Register One</a>!
		</p>
	</form>
</div>
