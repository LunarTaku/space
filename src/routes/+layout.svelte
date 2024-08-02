<script lang="ts">
	import { imageUrl } from '$lib/util';
	import '../app.css';
	import { Avatar, DropdownMenu } from 'bits-ui';

	export let data;
</script>

<div class="flex flex-col h-screen w-full">
	<nav
		class="flex flex-row justify-between items-center p-5 border-b border-white/10 bg-neutral-900 mb-5"
	>
		<div>
			<a href="/" class="text-xl font-semibold">Space</a>
		</div>

		<div class="flex gap-3">
			<a href="/" class="hover:text-blue-200">Home</a>
			<a href="/banners" class="hover:text-blue-200">Banners</a>
			<a href="/github" class="hover:text-blue-200">Github</a>
		</div>

		<div class="flex gap-3 items-center">
			{#if data.loggedIn}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="focus-visible inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 border-border-input bg-background-alt text-sm font-medium text-foreground shadow-btn hover:bg-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
					>
						<img
							src={imageUrl(data.avatar.collectionId, data.avatar.id, data.avatar.image)}
							alt=""
							class="rounded-full"
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content
						class="w-full max-w-[199px] rounded-lg border border-white/10 border-muted bg-background p-2 shadow-popover backdrop-blur-sm"
						sideOffset={8}
					>
						<DropdownMenu.Item
							class="flex h-10 select-none items-center rounded-button text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
						>
							<form action="/auth/logout" method="post" class="w-full">
								<button
									type="submit"
									class="hover:bg-neutral-800 px-5 py-2 rounded-lg w-full text-left">Logout</button
								>
							</form>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="flex h-10 select-none items-center rounded-button text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
						>
							<a
								href="/user/settings"
								class="hover:bg-neutral-800 px-5 py-2 rounded-lg w-full text-left">Settings</a
							>
						</DropdownMenu.Item>
						<DropdownMenu.Item
							class="flex h-10 select-none items-center rounded-button text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
						>
							<a
								href="/submit"
								class="hover:bg-blue-500 bg-blue-400 px-5 py-2 rounded-lg w-full text-left"
								>Submit Image</a
							>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{:else}
				<a href="/auth/login" class="bg-blue-400 hover:bg-blue-500 px-5 py-1 rounded-lg">Login</a>
			{/if}
		</div>
	</nav>
	<main class="mb-5">
		<slot />
	</main>
	<footer
		class="flex flex-col items-center justify-center bg-neutral-900 border-t border-white/10 p-5 mt-auto"
	>
		<p class="text-neutral-500 text-sm">Space v0.1.2 ALPHA.</p>
		<p class="text-neutral-500 text-sm">
			Created by <a href="https://web.site" class="text-orange-400">Lunar</a> and powered by
			<a href="https://svelte.dev" class="text-orange-400">SvelteKit</a>.
		</p>
	</footer>
</div>
