export type Twist = {
	id: number;
	name: string;
	title: string;
	funFacts?: string[];
};

export const twists: Twist[] = [
	{
		id: 1,
		name: 'banan',
		title: 'Banan',
		funFacts: [
			'Kom i 1967.',
			'Ble tatt ut av produksjon i 2000 etter å ha fått dårlig resultat i en markedsundersøkelse fra 1999.',
			'Viste seg å være den mest populære Twist-biten basert på løssalg i Freias butikk på Karl Johans gate i Oslo.',
			'Kom tilbake i ny form i 2006 etter protester og kampanjer.'
		]
	},
	{
		id: 2,
		name: 'caramel',
		title: 'Caramel',
		funFacts: ['Kom på 90-tallet.', 'Erstattet Coin.']
	},
	{
		id: 3,
		name: 'chocolate_toffee',
		title: 'Chocolate Toffee',
		funFacts: ['Omdøpt til "Côte d’Or Chokotoff" i en liten periode.']
	},
	{
		id: 4,
		name: 'cocos',
		title: 'Cocos',
		funFacts: ['Har vært en del av Twist-sortimentet siden starten i 1957.']
	},
	{
		id: 5,
		name: 'daim',
		title: 'Daim',
		funFacts: [
			'Gammel klassiker og også et eget varemerke.',
			'Fra 2015 leveres den i en lukket plastemballasje uten twist.',
			'Het tidligere Dajm fram til 1990'
		]
	},
	{
		id: 6,
		name: 'eclairs',
		title: 'Eclairs',
		funFacts: ['Inspirert av det franske bakverket "eclair".']
	},
	{
		id: 7,
		name: 'fransk_nougat',
		title: 'Fransk Nougat',
		funFacts: [
			'Originalt en av få biter med twist kun i den ene enden av papiret.',
			'Forsvant tidlig på 90-tallet, kom tilbake høsten 2011.'
		]
	},
	{
		id: 8,
		name: 'golden_toffee',
		title: 'Golden Toffee',
		funFacts: ['Kom i 2006 og erstattet Engelsk toffee.']
	},
	{
		id: 9,
		name: 'japp',
		title: 'Japp',
		funFacts: ['Kom tilbake på 1990-tallet etter en lengre pause.']
	},
	{
		id: 10,
		name: 'lakris',
		title: 'Lakris',
		funFacts: ['Var med fra starten i 1957-63, 1965-66, 1967-68, 1970-81, 1984-85 og fra 1986.']
	},
	{
		id: 11,
		name: 'marsipan',
		title: 'Marsipan',
		funFacts: ['Finnes ikke noe morsomt med marsipan.']
	},
	{
		id: 12,
		name: 'nougat_crisp',
		title: 'Nougat Crisp'
	},
	{
		id: 13,
		name: 'notti',
		title: 'Nøtti',
		funFacts: ['Den eneste nålevende Twist-biten som leveres i brettet papir.']
	}
];
