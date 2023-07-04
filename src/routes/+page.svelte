<script lang="ts">
	import { onMount } from 'svelte';
	import LoadingSpinner from '../lib/LoadingSpinner.svelte';
	import TwistDisplay from '../lib/TwistDisplay.svelte';
	import { twists, type Twist } from '../lib/types/Twist';
	import { getRandomFunfacts } from '$lib/getRandomFunfacts';

	const getRandomTwist = () => {
		const randomIndex = Math.floor(Math.random() * twists.length);
		return twists[randomIndex];
	};

	let twist1: Twist;
	let twist2: Twist;
	let twist1Funfact: string | undefined;
	let twist2Funfact: string | undefined;
	
	const getRandomTwists = () => {
		console.log('Getting random twists');
		const random1 = getRandomTwist();
		let random2 = getRandomTwist();
		while (random1.id === random2.id) {
			twist2 = getRandomTwist();
		}
		twist1 = random1;
		twist2 = random2;
		[twist1Funfact, twist2Funfact] = getRandomFunfacts(random1, random2);

	};


	onMount(() => {
		getRandomTwists();
	});

	let hasVoted = false;

	async function add(winner: Twist, loser: Twist) {
		const winnerId = winner.id;
		const loserId = loser.id;

		const response = await fetch('/api/vote', {
			method: 'POST',
			body: JSON.stringify({ winnerId, loserId }),
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	const handleVote = async (winner: Twist, loser: Twist) => {
		if (hasVoted) return;
		hasVoted = true;

		console.log(`Voted for ${winner.title} over ${loser.title}`);

		await add(winner, loser);

		setTimeout(() => {
			getRandomTwists();
			hasVoted = false;
		}, 1000);
	};
</script>

<main
	class="flex h-full w-screen grow flex-col items-center justify-center gap-4 text-white sm:flex-row md:p-8"
>
	{#if twist1}
		<TwistDisplay funFact={twist1Funfact} isLeft={true} twist={twist1} otherTwist={twist2} {handleVote} {hasVoted} />
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
		<TwistDisplay funFact={twist2Funfact} isLeft={false} twist={twist2} otherTwist={twist1} {handleVote} {hasVoted} />
	{:else}
		<LoadingSpinner />
	{/if}
</main>
