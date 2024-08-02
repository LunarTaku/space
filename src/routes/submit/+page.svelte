<script lang="ts">
	import { enhance } from '$app/forms';
	export let data: { tags: [{ tagName: string }] };
	$: data;

	let selectedTags: any[] = [];
	let amountToShow = 5;
	$: limitedTags = data.tags.slice(0, amountToShow);

	$: formattedTags = selectedTags.join(' ');

	let image: any;

	const authorizedExtensions = [
		'.jpg',
		'.jpeg',
		'.png',
		'.webp',
		'.png',
		'.gif',
		'.webp',
		'.icon',
		'.svg',
		'.mp3',
		'.mp4',
		'.webm',
		'.matroska',
		'.m4v',
		'.mpeg',
		'.wav',
		'.mp4',
		'.m4a'
	];

	function updateArray(tagName: string) {
		if (!selectedTags.includes(tagName)) {
			selectedTags = [...selectedTags, tagName];
		} else {
			selectedTags = selectedTags.filter((tag) => tag !== tagName);
		}
	}

	function addNumber() {
		if (data.tags.length > amountToShow) {
			amountToShow = amountToShow + 5;
		} else {
			amountToShow;
		}
	}

	function handleFileChange(event: any) {
		const file = event.target?.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image = e.target?.result;
			};
			reader.readAsDataURL(file);
		}
	}
</script>

<section class="flex justify-center">
	<div class="flex flex-col max-w-96 bg-neutral-900 border border-white/10 rounded-lg">
		<div class="text-center p-5 border-b border-white/10">
			<h1 class="text-2xl font-semibold">Create Post</h1>
		</div>
		<form method="post" class="flex flex-col gap-5 p-5" use:enhance enctype="multipart/form-data">
			<div class="flex flex-col gap-1">
				<label for="title" class="text-white/70">Title <span class="text-red-400">*</span></label>
				<input
					type="text"
					id="title"
					name="title"
					class="bg-neutral-800 rounded-md p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
					required
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="description" class="text-white/70"
					>Description <span class="text-red-400">*</span></label
				>
				<input
					type="text"
					id="description"
					name="description"
					class="bg-neutral-800 rounded-md p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
					required
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="tags" class="text-white/70">Tags</label>
				<input
					type="text"
					id="tags"
					name="tags"
					class="bg-neutral-800 rounded-md p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full h-fit"
					bind:value={formattedTags}
					readonly
				/>

				<div class="flex flex-wrap gap-2">
					{#each limitedTags as tag, i}
						<button
							class="border border-white/10 bg-neutral-800 rounded-lg px-2 py-1"
							on:click={() => updateArray(tag.tagName)}>{tag.tagName}</button
						>
					{/each}
					{#if amountToShow < data.tags.length}
						<button
							on:click={() => addNumber()}
							class="border border-white/10 bg-neutral-800 rounded-lg px-2 py-1">...</button
						>
					{/if}
				</div>
			</div>

			<div class="flex flex-col gap-1">
				<label for="image" class="text-white/70">Image <span class="text-red-400">*</span></label>
				<input
					type="file"
					id="image"
					name="image"
					accept={authorizedExtensions.join(',')}
					class="
					flex flex-row items-center
					bg-neutral-800 rounded-md p-2 py-1 w-full
					file:mr-4 file:ml-1 file:my-1 file:py-2 file:px-4
					file:rounded-lg file:border-0
					file:text-sm file:font-semibold file:bg-neutral-900 file:text-blue-400 hover:file:bg-neutral-900/80 file:cursor-pointer cursor-pointer"
					required
					on:change={handleFileChange}
				/>
				{#if image}
					<img src={image} alt="alt" class="rounded-lg h-44 w-full object-cover" />
				{/if}
			</div>

			<button type="submit" class="bg-blue-400 rounded-lg p5 py-2">Create</button>
		</form>
	</div>
</section>

<style>
	input[type='file'] {
		font-size: 17px;
		color: #b8b8b8;
	}
</style>
