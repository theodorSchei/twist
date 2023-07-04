<script lang="ts">
	import { onMount } from 'svelte';

	//import prisma from '$lib/prisma';
	import LoadingSpinner from '../lib/LoadingSpinner.svelte';
	import TwistDisplay from '../lib/TwistDisplay.svelte';
	import { twists, type Twist } from '../lib/types/Twist';

	const getRandomTwist = () => {
		const randomIndex = Math.floor(Math.random() * twists.length);
		return twists[randomIndex];
	};

	const getRandomTwists = () => {
		console.log('Getting random twists');
		const twist1 = getRandomTwist();
		let twist2 = getRandomTwist();
		while (twist1.id === twist2.id) {
			twist2 = getRandomTwist();
		}
		return [twist1, twist2];
	};

	let twist1: Twist;
	let twist2: Twist;

	onMount(() => {
		[twist1, twist2] = getRandomTwists();
	});

	let hasVoted = false;

	const handleVote = async (winner: Twist, loser: Twist) => {
		if (hasVoted) return;
		hasVoted = true;

		console.log(`Voted for ${winner.title} over ${loser.title}`);

		/*await prisma.vote.create({
			data: {
				winningTwistId: winner.id,
				losingTwistId: loser.id,
			}
		});*/

		setTimeout(() => {
			[twist1, twist2] = getRandomTwists();
			hasVoted = false;
		}, 1000);
	};
</script>

<main
	class="flex h-full w-screen grow flex-col items-center justify-center gap-4 text-white sm:flex-row"
>
	{#if twist1}
		<TwistDisplay twist={twist1} otherTwist={twist2} {handleVote} {hasVoted} />
	{:else}
		<LoadingSpinner />
	{/if}

	{#if hasVoted}
		<LoadingSpinner />
	{:else}
		<span
			class="flex h-16 w-16 items-center justify-center rounded-full text-center text-2xl font-extrabold underline"
			>vs</span
		>
	{/if}

	{#if twist2}
		<TwistDisplay twist={twist2} otherTwist={twist1} {handleVote} {hasVoted} />
	{:else}
		<LoadingSpinner />
	{/if}
</main>
