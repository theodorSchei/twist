<script lang="ts">
	import type { Vote } from '@prisma/client';
	import { twists } from '../types/Twist';
	import StatsContainer from './StatsContainer.svelte';

	export let votes: any[];
</script>

<StatsContainer title={`Siste ${votes.length} stemmer`} blueTitle={false}>
	<ul>
		{#each votes as { id, winningTwist, losingTwist, createdAt }}
			<li>
				#{id} -
				<span class="font-bold">{twists.find((twist) => twist.id == winningTwist.id)?.title}</span>
				vant over
				<span class='font-bold'>{twists.find((twist) => twist.id == losingTwist.id)?.title}</span>
				<!-- - {createdAt.toLocaleDateString('no-NB', { hour: '2-digit', minute: '2-digit' })} -->
			</li>
		{/each}
	</ul>
</StatsContainer>
