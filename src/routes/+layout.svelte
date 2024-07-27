<script>
	import '../app.css';
	export let data;
</script>

<div class="flex flex-row justify-center h-screen w-full">
	<div class="mt-5" style="min-width: calc(100vw - 40vw);">
		<nav class="flex flex-row justify-between items-center p-5 border rounded-xl border-white/10 bg-neutral-900 mb-5">
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
				<form action="/auth/logout" method="post">
					<button
						type="submit"
						class="bg-blue-400 hover:bg-blue-500 px-5 py-1 rounded-lg"
						>Logout</button
					>
				</form>
				{:else}
				<a href="/auth/register" class="text-white/60 hover:text-white/80">Register</a>
				<a href="/auth/login" class="bg-blue-400 hover:bg-blue-500 px-5 py-1 rounded-lg">Login</a>
				{/if}
			</div>
		</nav>
		
		<slot />
	</div>
</div>
