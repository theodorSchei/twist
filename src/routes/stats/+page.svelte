<script lang="ts">
	import type { PageData } from './$types';
	import { twists } from '$lib/types/Twist';
	import LastVotes from '$lib/LastVotes.svelte';
	export let data: PageData;
	const lastTenVotes = data.feed.slice(0, 10);

	console.log(data);
</script>

<main class="flex h-full w-screen grow flex-col items-center gap-4 text-white">
	<LastVotes votes={lastTenVotes} />
</main>
