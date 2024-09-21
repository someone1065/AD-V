
export const eternityUG = [
  {
    name: "Eternal Forces",
    id: 0,
    requirement: () => `Reach ${format("1e350")} Infinity Points on your first Eternity (pre-Eternity)`,
    hasFailed: () => PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.infinityPoints.e >= 350 && !PlayerProgress.eternityUnlocked(),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain x5 more EP",
    effect: () => 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "Eternity Power",
    id: 1,
    requirement: () => `Reach ${format(Number.MAX_VALUE, 2)} Infinity Points on your second Eternity without Time Dimensions (pre-Reality)`,
    hasFailed: () => !player.dimensions.time[0].amount.equals(0) || PlayerProgress.realityUnlocked() || !player.eternities.equals(1),
    checkRequirement: () => player.dimensions.time[0].amount.equals(0) && player.eternities.equals(1) && !PlayerProgress.realityUnlocked() && player.infinityPoints.gte(1.79e308),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Free Tickspeed threshold decreased to 1.3",
    effect: () => 1.3,
    formatEffect: value => formatInt(value),
    isUseless: () => Pelle.isDoomed
  },
  {
  name: "Rifted",
    id: 2,
    requirement: () => `Have exactly ${format(15)} Replacnti Galaxies`,
    hasFailed: () => false,
    checkRequirement: () => player.replicanti.galaxies == 15,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Gain 3 additional RG",
    effect: () => 3,
    formatEffect: value => "+" + formatInt(value)
  },
  {
    name: "Study Forever",
    id: 3,
    requirement: () => `Reach ${format(1e20)} EP`,
    hasFailed: () => false,
    checkRequirement: () => player.eternityPoints.gte(1e20),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "150 free Tickspeed upgrades",
    effect: () => 150,
    formatEffect: value => "+" + formatInt(value),
  },
  {
    name: "Wrong Timeline",
    id: 4,
    requirement: "Complete any other EC first rather than EC1 (pre-Reality)",
    hasFailed: () => EternityChallenges.all[0].completions > 0 || PlayerProgress.realityUnlocked(),
    checkRequirement: () => EternityChallenges.completions >= 1 && EternityChallenges.all[0].completions == 0 && !PlayerProgress.realityUnlocked(),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "Get more EP based on IP",
    effect: () => player.infinityPoints.log10() ** 0.5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Logical Tictonics",
    id: 5,
    requirement: "get time study 181 without compleing EC1, EC2 or E3 5 times (pre-Reality)",
    hasFailed: () => EternityChallenges.all[0].completions == 5 || EternityChallenges.all[1].completions == 5 || EternityChallenges.all[2].completions == 5 || PlayerProgress.realityUnlocked(),
    checkRequirement: () => player.timestudy.studies.includes(181) && !(EternityChallenges.all[0].completions == 5) && !(EternityChallenges.all[1].completions == 5) && !(EternityChallenges.all[2].completions == 5) && !PlayerProgress.realityUnlocked(),
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "1500 free Tickspeed upgrades",
    effect: () => 1500,
    formatEffect: value => "+" + formatInt(value),
    isUseless: () => Pelle.isDoomed
  },

];
