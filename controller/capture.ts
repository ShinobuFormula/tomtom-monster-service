const zone = {
	1: {
		nom: "Prairie du prélude",
		niveauDonjon: 0,
		donjons: [1545466],
		monsters: [
			{ mid: 1231, appearRate: 70 },
			{ mid: 1241, appearRate: 30 },
		],
	},
};

const monsters = {
	1231: {
		name: "Rond-Carrétoile",
		type: "spatiale" /* typeID */,
		caractere: "osef",
		passif: [
			{ name: "0 Gravity" },
			{ name: "1 Gravity" },
			{ name: "2 Gravity" },
			{ name: "3 Gravity" },
		],
		stats: {
			hp: 50,
			stamina: 60,
			attaque: 40,
		},
	},
	1241: {
		name: "Tetraèdre",
		type: "Fantôme" /* typeID */,
		caractere: "osef",
		passif: [
			{ name: "0 Fréquence" },
			{ name: "1 Fréquence" },
			{ name: "2 Fréquence" },
			{ name: "3 Fréquence" },
		],
		stats: {
			hp: 55,
			stamina: 45,
			attaque: 50,
		},
	},
};

const actions = {
	1: [
		{ name: "carresser", type: "caresse", taux: 12 },
		{ name: "aggresser", type: "aggression", taux: 30 },
		{ name: "attendre", type: "attente", taux: 5 },
		{ name: "nourrir", type: "nourrir", taux: 18 },
	],
};

const zoneIntegrity = (zone) => {
	let totalAppearRate = 0;
	zone.monsters.map((monster) => {
		totalAppearRate += monster.appearRate;
	});
	if (totalAppearRate != 100) return false;
	return true;
};

const getActions = (playerLevel) => {
	return actions[playerLevel];
};

const getMonster = (mid) => {
	return monsters[mid];
};

const getZone = (zid) => {
	return zone[zid];
};

const encounter = (monstersID) => {
	const intervals = [];
	let finalMonster = {};
	let lastRate = 0;
	const rand = Math.floor(Math.random() * (100 - 1 + 1) + 1);
	monstersID.map((elem) => {
		intervals.push({ min: lastRate + 1, max: lastRate + elem.appearRate });
		lastRate = elem.appearRate;
	});

	intervals.map((elem, index) => {
		if (elem.min <= rand && elem.max >= rand) {
			finalMonster = getMonster(monstersID[index].mid);
		}
	});

	return finalMonster;
};

const launchCapture = (zoneID) => {
	const zone = getZone(zoneID);
	const monster = encounter(zone.monsters);
	const actions = getActions(1 /*player.level*/);
	return { monster, actions };
};

export { launchCapture };
