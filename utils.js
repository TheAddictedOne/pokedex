const elements = [
  "acier",
  "combat",
  "dragon",
  "eau",
  "électrik",
  "fée",
  "feu",
  "glace",
  "insecte",
  "normal",
  "plante",
  "poison",
  "psy",
  "roche",
  "sol",
  "spectre",
  "ténèbres",
  "vol",
]

const weaknesses = {
  acier: ["feu", "combat", "sol"],
  combat: ["vol", "psy", "fée"],
  dragon: ["glace", "dragon", "fée"],
  eau: ["électrik", "plante"],
  électrik: ["sol"],
  fée: ["poison", "acier"],
  feu: ["eau", "sol", "roche"],
  glace: ["feu", "combat", "roche", "acier"],
  insecte: ["feu", "vol", "roche"],
  normal: ["combat"],
  plante: ["feu", "glace", "poison", "vol", "insecte"],
  poison: ["sol", "psy"],
  psy: ["insecte", "spectre", "ténèbres"],
  roche: ["eau", "plante", "combat", "sol", "acier"],
  sol: ["eau", "plante", "glace"],
  spectre: ["spectre", "ténèbres"],
  ténèbres: ["combat", "insecte", "fée"],
  vol: ["électrik", "glace", "roche"],
}

const resistances = {
  acier: ["normal", "plante", "glace", "vol", "psy", "insecte", "roche", "dragon", "acier", "fée"],
  combat: ["insecte", "roche", "ténèbres"],
  dragon: ["feu", "eau", "électrik", "plante"],
  eau: ["feu", "eau", "glace", "acier"],
  électrik: ["électrik", "vol", "acier"],
  fée: ["combat", "insecte", "ténèbres"],
  feu: ["feu", "plante", "glace", "insecte", "acier", "fée"],
  glace: ["glace"],
  insecte: ["plante", "combat", "sol"],
  normal: [],
  plante: ["eau", "électrik", "plante", "sol"],
  poison: ["plante", "combat", "poison", "insecte", "fée"],
  psy: ["combat", "psy"],
  roche: ["normal", "feu", "poison", "vol"],
  sol: ["poison", "roche"],
  spectre: ["poison", "insecte"],
  ténèbres: ["spectre", "ténèbres"],
  vol: ["plante", "combat", "insecte"],
}

const immunities = {
  acier: ["poison"],
  combat: [],
  dragon: [],
  eau: [],
  électrik: [],
  fée: ["dragon"],
  feu: [],
  glace: [],
  insecte: [],
  normal: ["spectre"],
  plante: [],
  poison: [],
  psy: [],
  roche: [],
  sol: ["électrik"],
  spectre: ["normal", "combat"],
  ténèbres: ["psy"],
  vol: ["sol"],
}

export function getAffinities(types) {
  const affinities = {
    superWeaknesses: [],
    weaknesses: [],
    immunities: types.length === 1 ? immunities[types[0]] : immunities[types[0]].concat(immunities[types[1]]),
    resistances: [],
    superResistances: []
  }

  const ratios = {}

  elements.forEach((element) => {
    ratios[element] = 0
  })

  types.forEach((type) => {
    weaknesses[type].map((weakness) => {
      if (affinities.immunities.includes(weakness)) return
      ratios[weakness]--
    })

    resistances[type].map((resistance) => {
      if (affinities.immunities.includes(resistance)) return
      ratios[resistance]++
    })
  })

  for (const [key, value] of Object.entries(ratios)) {
    if (value === -2) affinities.superWeaknesses.push(key)
    if (value === -1) affinities.weaknesses.push(key)
    if (value === 1) affinities.resistances.push(key)
    if (value === 2) affinities.superResistances.push(key)
  }

  return affinities
}
