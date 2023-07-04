import type { Twist } from "./types/Twist";

export const getRandomFunfacts = (twist1: Twist, twist2: Twist) => {
	const funFacts1 = twist1.funFacts;
	const funFacts2 = twist2.funFacts;

	let twist1FunFact: string | undefined;
	let twist2FunFact: string | undefined;

	if (funFacts1 && funFacts1.length > 0 && Math.random() > 0.5) {
		twist1FunFact = funFacts1[Math.floor(Math.random() * funFacts1.length)];
	}

	if (funFacts2 && funFacts2.length > 0 && Math.random() > 0.5) {
		twist2FunFact = funFacts2[Math.floor(Math.random() * funFacts2.length)];
	}

	return [twist1FunFact, twist2FunFact];
}