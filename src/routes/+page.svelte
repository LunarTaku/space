<script lang="ts">
	import { imageUrl } from '$lib/util.js';
	import type { Posts } from '$lib/types';

	export let data: {
		posts: [Posts];
		page: number;
		totalPosts: number;
		totalPages: number;
	};
</script>

<section class="flex flex-wrap gap-3">
	{#each data.posts as post}
		<div
			class="flex flex-col items-center gap-2 bg-neutral-900 border border-white/10 rounded-lg p-2"
		>
			<img
				src={imageUrl(post.collectionId, post.id, post.image)}
				alt=""
				class="w-40 h-40 object-cover rounded-lg"
			/>
			<h3>{post.title}</h3>
		</div>
	{/each}
</section>
