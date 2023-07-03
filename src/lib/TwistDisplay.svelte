<script lang='ts'>
	import type { Twist } from "./types/Twist";

	export let twist: Twist;
	export let otherTwist: Twist;
	export let handleVote : (winner: Twist, loser: Twist) => void;
	export let hasVoted : boolean;

</script>

<div class="flex h-full w-3/4  sm:w-1/2 max-w-md flex-col items-center justify-center md:p-8 md:gap-8 border border-stone-800 p-4 rounded-xl">
	<img src={`/twists/${twist.name}_closed.png`} alt={`Bilde av twisten ${twist.title}`} />
	<p class="text-2xl font-bold">{twist.title}</p>
	<button
		on:click={() => handleVote(twist, otherTwist)}
		disabled={hasVoted}
		class="rounded-2xl border-2 px-6 py-4 font-bold hover:bg-slate-200 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 motion-safe:transition-colors"
	>
		Stem
	</button>
</div>