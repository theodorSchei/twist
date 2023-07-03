<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data);
</script>

<main class="flex-colgrow flex h-full w-screen items-center justify-center gap-4 text-white">
	<h1 class="text-2xl">Stats</h1>
	{#each data.feed as { id, winningTwistId, losingTwistId, createdAt, updatedAt }}
		<div class="flex flex-col">
			<span class="text-xl">{id}</span>
			<span class="text-2xl">{winningTwistId}</span>
			<span class="text-2xl">{losingTwistId}</span>
			<span class="text-2xl">{createdAt}</span>
			<span class="text-2xl">{updatedAt}</span>
		</div>
	{/each}
</main>
