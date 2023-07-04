<script lang="ts">
	export let title = 'Stats';
	export let blueTitle = true;
</script>

<section class="flex flex-col min-w-full sm:min-w-[20rem]">
	{#if blueTitle}
		<h2 class="bg-gradient-to-br from-cyan-600 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
			{title}
		</h2>
	{:else}
		<h2 class="bg-gradient-to-br from-pink-500 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
			{title}
		</h2>
	{/if}
	<slot>
		<p>Nothing here!</p>
	</slot>
</section>
