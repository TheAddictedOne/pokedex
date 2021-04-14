const weaknesses = {
  "acier": ["feu", "combat", "sol"],
  "combat": ["vol", "psy", "fée"],
  "dragon": ["glace", "dragon", "fée"],
  "eau": ["électrik", "plante"],
  "électrik": ["sol"],
  "fée": ["poison", "acier"],
  "feu": ["eau", "sol", "roche"],
  "glace": ["feu", "combat", "roche", "acier"],
  "insecte": ["feu", "vol", "roche"],
  "normal": ["combat"],
  "plante": ["feu", "glace", "poison", "vol", "insecte"],
  "poison": ["sol", "psy"],
  "psy": ["insecte", "spectre", "ténèbres"],
  "roche": ["eau", "plante", "combat", "sol", "acier"],
  "sol": ["eau", "plante", "glace"],
  "spectre": ["spectre", "ténèbres"],
  "ténèbres": ["combat", "insecte", "fée"],
  "vol": ["électrik", "glace", "roche"],
}

export function getWeaknesses(types) {
  return types.length === 1
    ? weaknesses[types[0]]
    : weaknesses[types[0]].concat(weaknesses[types[1]])
}
