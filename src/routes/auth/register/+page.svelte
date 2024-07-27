<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
	let name = form?.name ?? '';
	let email = form?.email ?? '';
	let password = form?.password ?? '';
	let passwordConfirm: string;

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
			<label for="name" class="text-white/70">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				bind:value={name}
				class="bg-neutral-800 rounded-md p-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
			/>

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

			<label for="passwordConfirm" class="text-white/70">Confirm Password</label>
			<input
				type="password"
				id="passwordConfirm"
				name="passwordConfirm"
				bind:value={passwordConfirm}
				class="bg-neutral-800 rounded-md p-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
			/>
		</div>

		<button
			type="submit"
			class="w-full bg-blue-400 disabled:bg-neutral-700 disabled:cursor-not-allowed rounded-lg py-2 px-5 mt-5 transition-all"
			disabled={name.length === 0 || email.length === 0 || password.length < 8 || passwordConfirm !== password}>Register</button
		>
		<p class="text-neutral-500 mt-2 text-sm">
			Already have an account? <a href="/auth/login" class="text-blue-400">Login</a>!
		</p>
	</form>
	<div class="border-t border-white/10 p-5 text-sm text-neutral-500">
		<p>
			By creating an account you agree to Space's <a href="/terms" class="text-blue-400"
				>Terms of Service</a
			>
			and <a href="/privacy" class="text-blue-400">Privacy Policy</a>
		</p>
	</div>
</div>
