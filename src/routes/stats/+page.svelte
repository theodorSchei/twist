<script lang="ts">
	import type { PageData } from './$types';
	import { twists } from '$lib/types/Twist';
	import LastVotes from '$lib/stats/LastVotes.svelte';
	import MostVotes from '$lib/stats/MostVotes.svelte';
	export let data: PageData;
	const lastTenVotes = data.feed.slice(0, 10);

	console.log(data);
</script>

<main class="flex h-full w-screen md:flex-row items-stretch md:justify-center grow flex-col gap-4 text-white p-4">
	<LastVotes votes={lastTenVotes} />
	<MostVotes votes={data.feed} />
</main>
