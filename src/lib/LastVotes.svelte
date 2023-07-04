<script lang="ts">
	import type { Vote } from '@prisma/client';
	import { twists } from './types/Twist';

	export let votes: any[];
</script>

<div>
	<h1 class="text-xl">Siste {votes.length} stemmer</h1>
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
</div>
