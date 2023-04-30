const monsterInfoSchema = new mongoose.Schema({
	name: String,
	description: String,
	trigger: {
		when: String,
		actionType: String,
		from: String,
		to: String,
		type: String,
		target: String,
	},
	event: [
		{
			targetType: String,
			target: String,
			effects: [
				{
					type: String,
					power: 15,
				},
			],
		},
		{
			targetType: "double",
			target: "from",
			effects: [
				{
					type: "heal",
					power: 15,
				},
			],
		},
	],
});
