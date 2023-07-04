import prisma from '$lib/prisma';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	const response = await prisma.vote.findMany({
		take: -100,
		include: {
			winningTwist: true,
			losingTwist: true
		}
	});

	return { feed: response };
}) satisfies PageServerLoad;
