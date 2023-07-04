import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

// /** @type {import('./$types').RequestHandler} */
// export function GET({ url }) {
//     const min = Number(url.searchParams.get('min') ?? '0');
//     const max = Number(url.searchParams.get('max') ?? '1');

//     const d = max - min;

//     if (isNaN(d) || d < 0) {
//         throw error(400, 'min and max must be numbers, and min must be less than max');
//     }

//     const random = min + Math.random() * d;

//     return new Response(String(random));
// }

///** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const max = Number(url.searchParams.get('max') ?? '0');

	if (isNaN(max)) throw error(400, 'max must be number');

	const res = await prisma.vote.findMany({ take: -max });

	console.log(res);

	return new Response(JSON.stringify(res));
}

export async function POST({ request }) {
	const { winnerId, loserId } = await request.json();

	console.log(winnerId, loserId);

	const res = await prisma.vote.create({
		data: {
			winningTwist: {
				connect: {
					id: winnerId
				}
			},
			losingTwist: {
				connect: {
					id: loserId
				}
			}
		}
	});

	return new Response(JSON.stringify(res));
}
