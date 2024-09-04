// Used for UI purposes to give different theming for different kinds of upgrades
export const LAITELA_UPGRADE_DIRECTION = {
  SELF_BOOST: 0,
  BOOSTS_MAIN: 1,
  BOOSTS_LAITELA: 2
};

export const singularityMilestones = {
  // Infinite
  continuumMult: {
    start: new Decimal(1),
    repeat: new Decimal(125),
    increaseThreshold: 20,
    limit: Infinity,
    description: "Continuum percentage multiplier",
    effect: completions => completions * 0.03,
    effectFormat: x => formatX(1 + x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkMatterMult: {
    start: new Decimal(2),
    repeat: new Decimal(20),
    increaseThreshold: 30,
    limit: Infinity,
    description: "Dark Matter production multiplier",
    effect: completions => Math.pow(1.5, completions),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkEnergyMult: {
    start: new Decimal(3),
    repeat: new Decimal(120),
    increaseThreshold: 10,
    limit: Infinity,
    description: "Dark Energy production multiplier",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionCostReduction: {
    start: new Decimal(4),
    repeat: new Decimal(40),
    increaseThreshold: 25,
    limit: Infinity,
    description: "Dark Matter Dimension upgrades are cheaper",
    effect: completions => Math.pow(0.4, completions),
    effectFormat: x => `/ ${format(1 / x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  singularityMult: {
    id: 5,
    start: new Decimal(50),
    repeat: new Decimal(3000),
    increaseThreshold: 5,
    limit: Infinity,
    description: "Singularity gain multiplier",
    effect: completions => Math.pow(2, completions),
    effectFormat: x => formatX(x, 2, 0),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionIntervalReduction: {
    start: new Decimal(10),
    repeat: new Decimal(100),
    increaseThreshold: 20,
    limit: Infinity,
    description: "Dark Matter Dimension interval decrease",
    effect: completions => Math.pow(0.6, completions),
    effectFormat: x => `/ ${format(1 / x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  improvedAscensionDM: {
    start: new Decimal(200000),
    repeat: new Decimal(4000),
    increaseThreshold: 15,
    limit: Infinity,
    description: "Ascension affects Dark Matter production more",
    effect: completions => 100 * completions,
    effectFormat: x => formatX(POWER_DM_PER_ASCENSION.add(x), 1, 0),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  // Limited
  ascensionIntervalScaling: {
    start: new Decimal(1.2e5),
    repeat: new Decimal(2400),
    limit: 8,
    description: "Dark Matter Dimensions Ascension increases the interval less",
    effect: completions => 1200 - 50 * completions,
    effectFormat: x => `×${formatInt(x)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  autoCondense: {
    start: new Decimal(8),
    repeat: new Decimal(80),
    limit: 8,
    description: "Automatically condense Singularities when reaching a threshold above the cap",
    effect: completions => [Infinity, 1.3, 1.22, 1.15, 1.1, 1.06, 1.03, 1.01, 1][completions],
    effectFormat: x => `Cap ${formatX(x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkDimensionAutobuyers: {
    start: new Decimal(30),
    repeat: new Decimal(170),
    limit: 4,
    description: "Dark Matter Dimension Autobuyers",
    effect: completions => completions,
    effectFormat: x => ((x === 0) ? "No autobuyers" : `Autobuy up to the ${["1st", "2nd", "3rd", "4th"][x - 1]} DMD`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  ascensionAutobuyers: {
    start: new Decimal(1e8),
    repeat: new Decimal(140),
    limit: 4,
    description: "DMD Ascension Autobuyers",
    effect: completions => completions,
    effectFormat: x => ((x === 0) ? "No autobuyers" : `Ascend up to the ${["1st", "2nd", "3rd", "4th"][x - 1]} DMD`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkAutobuyerSpeed: {
    start: new Decimal(45),
    repeat: new Decimal(650),
    limit: 8,
    description: "Autobuyer speed for all DMD Autobuyers",
    effect: completions => [30, 20, 15, 10, 5, 3, 2, 1, 0][completions],
    effectFormat: x => (x === 0 ? "Instant" : `${formatInt(x)}s`),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  realityDEMultiplier: {
    start: new Decimal(1500),
    repeat: new Decimal(10000),
    limit: 6,
    description: "Dark Energy multiplier based on disabled Dimension count within Lai'tela",
    effect: completions => Math.pow(1 + 0.06 * completions, Laitela.difficultyTier),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  improvedSingularityCap: {
    start: new Decimal(150),
    repeat: new Decimal(10000),
    limit: 5,
    description: "Increased Singularity gain per cap increase",
    effect: completions => 11 + completions,
    effectFormat: x => `${formatX(x)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  intervalCostScalingReduction: {
    start: new Decimal(130000),
    repeat: new Decimal(50000),
    limit: 5,
    description: "DMD Interval cost scaling is better",
    effect: completions => 1 - 0.03 * completions,
    effectFormat: x => `${formatPow(x, 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  // Unique
  darkFromTesseracts: {
    start: new Decimal(80),
    repeat: new Decimal(0),
    limit: 1,
    description: "Tesseracts boost Dark Matter and Dark Energy production",
    effect: () => Math.pow(1.1, Tesseracts.effectiveCount),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  multFromInfinitied: {
    start: new Decimal(3000),
    repeat: new Decimal(0),
    limit: 1,
    description: "Infinities boost Dark Matter and Dark Energy production",
    effect: () => Math.clampMin(Currency.infinitiesTotal.value.pLog10() / 1000, 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  dilatedTimeFromSingularities: {
    start: new Decimal(8e4),
    repeat: new Decimal(0),
    limit: 1,
    description: "Singularities improve the repeatable Dilated Time multiplier upgrade",
    // Note that at ~2.15x this causes a runaway purely because of cost scaling
    effect: () => 1 + Math.clampMax(Decimal.log10(Currency.singularities.value) / 100, 0.35),
    effectFormat: x => `${formatX(2)} ➜ ${formatX(2 * Math.clampMin(x, 1), 2, 2)}`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromGlyphLevel: {
    start: new Decimal(3e6),
    repeat: new Decimal(0),
    limit: 1,
    description: "Boost Dark Matter and Dark Energy production based on highest Glyph level",
    effect: () => Math.pow(Math.clampMin((player.records.bestReality.glyphLevel - 15000) / 2000, 1), 0.5),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  gamespeedFromSingularities: {
    start: new Decimal(8e7),
    repeat: new Decimal(0),
    limit: 1,
    description: "Singularities boost game speed",
    effect: () => Math.clampMin(Math.pow(Decimal.log10(Currency.singularities.value), 3), 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromTheorems: {
    start: new Decimal(3e9),
    repeat: new Decimal(0),
    limit: 1,
    description: "Time Theorems boost Dark Matter and Dark Energy gain",
    effect: () => Math.sqrt(Math.clampMin((Currency.timeTheorems.value.log10() - 1000) / 50, 1)),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  dim4Generation: {
    start: new Decimal(5e11),
    repeat: new Decimal(0),
    limit: 1,
    description: "Annihilation mult. generates 4th DMD when Annihilation is available",
    effect: () => Laitela.darkMatterMult,
    effectFormat: x => `${format(x, 2, 1)}/s`,
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  darkFromDM4: {
    start: new Decimal(5e12),
    repeat: new Decimal(0),
    limit: 1,
    description: "4th Dark Matter Dimension amount boosts Dark Matter and Dark Energy gain",
    effect: () => Math.clampMin(DarkMatterDimension(4).amount.pow(0.03).toNumber(), 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  annihilationAutobuyer: {
    start: new Decimal(4e18),
    repeat: new Decimal(0),
    limit: 1,
    description: "Unlock an Autobuyer for Annihilation",
    effect: completions => completions,
    effectFormat: x => (x === 1 ? "Unlocked" : "Locked"),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.SELF_BOOST,
  },
  theoremPowerFromSingularities: {
    start: new Decimal(3e21),
    repeat: new Decimal(0),
    limit: 1,
    description: "Singularities give a power effect to Time Theorem gain",
    effect: () => 1 + Decimal.log10(Currency.singularities.value.add(1)) / 70,
    effectFormat: x => formatPow(x, 2, 3),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromGamespeed: {
    start: new Decimal(8e22),
    repeat: new Decimal(0),
    limit: 1,
    description: "Game speed boosts Dark Matter and Dark Energy production",
    effect: () => Math.clampMin(Decimal.log10(getGameSpeedupFactor().div(1e120)) / 40, 1),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  glyphLevelFromSingularities: {
    start: new Decimal(3e24),
    repeat: new Decimal(0),
    limit: 1,
    description: "Singularities boost pre-instability Glyph level",
    effect: () => 1 + Math.clampMin((Decimal.log10(Currency.singularities.value) - 20) / 30, 0),
    effectFormat: x => formatX(Math.clampMin(x, 1), 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  darkFromDilatedTime: {
    start: new Decimal(8e33),
    repeat: new Decimal(0),
    limit: 1,
    description: "Dilated Time boosts Dark Matter production",
    effect: () => Decimal.pow(1.6, Decimal.log10(Currency.dilatedTime.value.plus(1)) / 1000),
    effectFormat: x => formatX(x, 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_LAITELA,
  },
  infinitiedPow: {
    start: new Decimal(3e38),
    repeat: new Decimal(0),
    limit: 1,
    description: "Infinities gain a power effect based on Singularities",
    effect: () => 1 + Decimal.log10(Currency.singularities.value.add(1)) / 300,
    effectFormat: x => formatPow(x, 2, 3),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  },
  tesseractMultFromSingularities: {
    start: new Decimal(2.5e45),
    repeat: new Decimal(0),
    limit: 1,
    description: "Singularities increase effective Tesseract count",
    effect: () => 1 + Decimal.log10(Currency.singularities.value) / 80,
    effectFormat: x => formatX(Math.clampMin(x, 1), 2, 2),
    upgradeDirection: LAITELA_UPGRADE_DIRECTION.BOOSTS_MAIN,
  }
};