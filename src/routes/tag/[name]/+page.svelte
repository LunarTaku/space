<script lang="ts">
	import { imageUrl } from '$lib/util.js';
	import type { Posts } from '$lib/types';
	import { goto } from '$app/navigation';

	export let data: {
		posts: [Posts];
		page: number;
		totalPosts: number;
		totalPages: number;
	};

	$: currentPage = data.page || 1;

	function goToPage(page: number) {
		goto(`?page=${page}`);
	}
</script>

<section class="flex flex-row justify-center items-center">
	<div style="min-width: calc(100vw - 41vw); max-width: calc(100vw - 41vw);">
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
			{#each data.posts as post}
				<div
					class="relative w-full h-52 overflow-hidden bg-neutral-900 border border-white/10 rounded-lg p-1"
				>
					<img
						src={imageUrl(post.collectionId, post.id, post.image)}
						alt=""
						class="w-full h-full object-cover transition-transform duration-500 rounded-lg"
					/>
					<div
						class="flex items-center justify-center absolute bottom-0 left-0 w-full p-2.5 bg-neutral-900/70 backdrop-blur-sm transition-all duration-500 opacity-0 hover:opacity-100 h-full"
					>
						<a href="/post/{post.id}" class="px-5 py-2 rounded-lg bg-blue-400">View</a>
					</div>
				</div>
			{/each}
		</section>
		
		<nav class="flex justify-center items-center my-4">
			<div class="flex bg-neutral-900/ border border-white/10 rounded-lg space-x-2 p-2">
				{#if currentPage > 1}
					<button class="p-2 rounded-lg bg-neutral-900/35" on:click={() => goToPage(currentPage - 1)}
						>Previous</button
					>
				{/if}
				{#each Array(data.totalPages) as _, i}
					<button
						class="p-2 rounded-lg {currentPage === i + 1
							? 'bg-neutral-900/80 text-white border border-white/10'
							: ''}"
						on:click={() => goToPage(i + 1)}
					>
						{i + 1}
					</button>
				{/each}
				{#if currentPage < data.totalPages}
					<button class="p-2 rounded-lg bg-neutral-900/35" on:click={() => goToPage(currentPage + 1)}
						>Next</button
					>
				{/if}
			</div>
		</nav>
	</div>
	
</section>