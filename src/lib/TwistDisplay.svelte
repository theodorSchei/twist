<script lang="ts">
	import type { Twist } from './types/Twist';

	export let twist: Twist;
	export let otherTwist: Twist;
	export let handleVote: (winner: Twist, loser: Twist) => void;
	export let hasVoted: boolean;
	export let isLeft: boolean;
	export let funFact: string | undefined;
</script>

<div
	class="relative flex h-full w-3/4 max-w-md flex-col items-center justify-center gap-4 rounded-xl border sm:border-0 border-stone-800 p-4 sm:w-1/2 md:gap-8 md:p-8"
>
	{#if funFact}
		{#if isLeft}
			<p class="hidden sm:inline absolute lg:-left-8 top-0 sm:-top-8 max-w-xs -rotate-6 sm:-rotate-12 text-sm lg:text-lg font-thin">
				<span
					class="bg-gradient-to-br from-pink-500 to-pink-400 bg-clip-text font-bold text-transparent"
					>Fun-fact:
				</span>
				{funFact}
			</p>
		{:else}
			<p class="hidden sm:inline absolute lg:-right-8 top-0 sm:-top-8 max-w-xs rotate-6 sm:rotate-12 text-sm lg:text-lg font-thin">
				<span
					class="bg-gradient-to-br from-cyan-600 to-cyan-400 bg-clip-text font-bold text-transparent"
					>Fun-fact:
				</span>
				{funFact}
			</p>
		{/if}
	{/if}
	<img
		class="max-h-40"
		src={`/twists/${twist.name}.png`}
		alt={`Bilde av twist-biten ${twist.title}`}
	/>
	<p class="text-2xl font-bold">{twist.title}</p>
	<button
		on:click={() => handleVote(twist, otherTwist)}
		disabled={hasVoted}
		class="rounded-2xl border-2 px-6 py-4 font-bold hover:bg-slate-200 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 motion-safe:transition-colors"
	>
		Stem
	</button>
</div>
