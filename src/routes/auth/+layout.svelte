<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="flex flex-col items-center justify-center">
	<div class="min-w-96">
		<div
			class="flex flex-col items-center bg-neutral-900/35 border border-white/10 mt-5 rounded-md w-full max-w"
		>
			<div class="border-b border-white/10 mb-2 w-full p-5 text-center">
				<h2 class="text-blue-400/90 font-bold text-2xl">
					{$page.url.pathname.split('/')[2].charAt(0).toUpperCase() +
						$page.url.pathname.split('/')[2].slice(1)} an account!
				</h2>
				<p class="text-neutral-500 text-sm">
					{$page.url.pathname.split('/')[2] === 'login'
						? 'Welcome back! Please login to your account.'
						: 'Create an account to get started!'}
				</p>
			</div>
			<div class="w-full">
				<slot />
			</div>
		</div>
	</div>
</main>
