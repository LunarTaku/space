<script lang="ts">
	import { enhance } from '$app/forms';
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
	let title;
	let description;
	let tags;
	let image;
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
					type="title"
					id="title"
					name="title"
					class="bg-neutral-800 rounded-md p-1 p2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
					required
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="description" class="text-white/70">Description <span class="text-red-400">*</span></label>
				<input
					type="description"
					id="description"
					name="description"
					class="bg-neutral-800 rounded-md p-1 p2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
					required
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="tags" class="text-white/70">Tags <span class="text-red-600">(seperate by commas)</span></label>
				<input
					type="tags"
					id="tags"
					name="tags"
					class="bg-neutral-800 rounded-md p-1 p2 focus:outline-none focus:ring-2 focus:ring-blue-400/70 focus:border-transparent w-full"
				/>
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
					bg-neutral-800 rounded-md p-1 p2 w-full
					file:mr-4 file:ml-1 file:my-1 file:py-2 file:px-4
					file:rounded-lg file:border-0
					file:text-sm file:font-semibold file:bg-neutral-900 file:text-blue-400 hover:file:bg-neutral-900/80 file:cursor-pointer cursor-pointer"
					required
				/>
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
