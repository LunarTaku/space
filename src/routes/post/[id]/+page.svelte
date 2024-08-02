<script lang="ts">
	import type { PBPost } from '$lib/types';
	import { imageUrl } from '$lib/util';

	export let data: {
		post: PBPost;
		page: number;
		totalPosts: number;
		totalPages: number;
	};

	const fileUrl = imageUrl(data.post.collectionId, data.post.id, data.post.image);

	let tags = data.post.tags ? data.post.tags.toString().split(' ') : ['none'];

	async function downloadFile() {
		try {
			const response = await fetch(fileUrl);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = 'image.jpg'; // Specify the file name for download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Error downloading the file:', error);
		}
	}
</script>

<div class="flex justify-center">
	<div class="flex flex-col bg-neutral-900 border border-white/10 rounded-lg p-3">
		<img
			src={imageUrl(data.post.collectionId, data.post.id, data.post.image)}
			alt={data.post.title}
			class="h-96 w-96 object-cover rounded-lg border border-white/10"
		/>

		<div class="bg-neutral-800 rounded-lg my-2 p-2">
			<h3 class="text-2xl font-semibold">{data.post.title}</h3>
			<p class="text-neutral-300">
				Posted by: <span class="text-white">{data.post.expand.user.name}</span>
			</p>
		</div>

		<div class="flex flex-col flex-wrap gap-2 mb-5">
			<h3 class="text-lg text-neutral-300">Tags:</h3>
			<div class="flex flex-wrap gap-2">
				{#each tags as tag}
					{#if tag !== 'none'}
						<a href="/tag/{tag}" class="bg-blue-400 rounded-lg px-2 py-1">{tag}</a>
					{:else}
						<p class="bg-blue-400 rounded-lg px-2 py-1">{tag}</p>
					{/if}
				{/each}
			</div>
		</div>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="javascript:void(0)"
			on:click={downloadFile}
			class="bg-green-500 rounded-lg px-5 py-2 w-full text-center">Download Image</a
		>
	</div>
</div>
