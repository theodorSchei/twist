<script lang="ts">
	import type { Vote } from '@prisma/client';
	import { twists } from '../types/Twist';
	import StatsContainer from './StatsContainer.svelte';

	export let votes: Vote[];


	// Count number of wins for every twist
	const twistWinCount = votes.reduce((acc, vote) => {
		const winningTwistId = vote.winningTwistId;
		if (acc[winningTwistId]) {
			acc[winningTwistId] += 1;
		} else {
			acc[winningTwistId] = 1;
		}
		return acc;
	}, {} as Record<string, number>);

	// Sort by number of wins
	const sortedTwistWinCount = Object.entries(twistWinCount).sort((a, b) => b[1] - a[1]);

	// Add missing twists
	const twistIds = Object.keys(twistWinCount);
	twists.forEach((twist) => {
		if (!twistIds.includes(twist.id.toString())) {
			sortedTwistWinCount.push([twist.id.toString(), 0]);
		}
	});



</script>

<StatsContainer title={`Flest stemmer`} blueTitle={true}>
	<ul>
		{#each sortedTwistWinCount as [twistId, winCount]}
			<li>
				<div class="flex font-bold gap-4">
					<span class="whitespace-pre">{winCount.toString().padStart(3,' ')}</span>
					<span>{twists.find((twist) => twist.id.toString() == twistId)?.title}</span>
				</div>
			</li>
		{/each}
	</ul>
</StatsContainer>