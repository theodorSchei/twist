import type { Twist } from "./Twist";

export type Vote = {
	winner: Twist;
	loser: Twist;
	timestamp: number;
};
