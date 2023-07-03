<script lang="ts">
	import LoadingSpinner from '../lib/LoadingSpinner.svelte';
	import TwistDisplay from '../lib/TwistDisplay.svelte';
	import { twists, type Twist } from '../lib/types/Twist';

	const getRandomTwist = () => {
		const randomIndex = Math.floor(Math.random() * twists.length);
		return twists[randomIndex];
	};

	const getRandomTwists = () => {
		const twist1 = getRandomTwist();
		let twist2 = getRandomTwist();
		while (twist1.id === twist2.id) {
			twist2 = getRandomTwist();
		}
		return [twist1, twist2];
	};

	let [twist1, twist2] = getRandomTwists();
	let hasVoted = false;

	const handleVote = (winner: Twist, loser: Twist) => {
		if (hasVoted) return;
		hasVoted = true;

		console.log(`Voted for ${winner.title} over ${loser.title}`);

		setTimeout(() => {
			[twist1, twist2] = getRandomTwists();
			hasVoted = false;
		}, 1000);
	};
</script>

<main class="flex h-full w-screen flex-col sm:flex-row grow items-center justify-center gap-4 text-white">
	<TwistDisplay twist={twist1} otherTwist={twist2} {handleVote} {hasVoted} />

	{#if hasVoted}
		<LoadingSpinner />
	{:else}
		<span
			class="flex h-16 w-16 items-center justify-center rounded-full text-center text-2xl font-extrabold underline"
			>vs</span
		>
	{/if}

	<TwistDisplay twist={twist2} otherTwist={twist1} {handleVote} {hasVoted} />
</main>
