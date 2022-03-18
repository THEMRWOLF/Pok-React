export function importAssets (directory) {
  const assets = {};
  directory.keys().map((asset) => (
    assets[asset.replace('./', '')] = directory(asset)
  ));
  return assets;
}

export function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}

export function classNamesIsActive (func, ...classes) {
  return classes.filter(Boolean).join(' ');
}

export function colorType (type) {
  switch (type) {
    case 'bug': return 'bg-bug shadow-center shadow-bug';
    case 'dark': return 'bg-dark shadow-center shadow-dark';
    case 'dragon': return 'bg-dragon shadow-center shadow-dragon';
    case 'electric': return 'bg-electric shadow-center shadow-electric';
    case 'fairy': return 'bg-fairy shadow-center shadow-fairy';
    case 'fighting': return 'bg-fighting shadow-center shadow-fighting';
    case 'fire': return 'bg-fire shadow-center shadow-fire';
    case 'flying': return 'bg-flying shadow-center shadow-flying';
    case 'ghost': return 'bg-ghost shadow-center shadow-ghost';
    case 'grass': return 'bg-grass shadow-center shadow-grass';
    case 'ground': return 'bg-ground shadow-center shadow-ground';
    case 'ice': return 'bg-ice shadow-center shadow-ice';
    case 'normal': return 'bg-normal shadow-center shadow-normal';
    case 'poison': return 'bg-poison shadow-center shadow-poison';
    case 'psychic': return 'bg-psychic shadow-center shadow-psychic';
    case 'rock': return 'bg-rock shadow-center shadow-rock';
    case 'steel': return 'bg-steel shadow-center shadow-steel';
    case 'water': return 'bg-water shadow-center shadow-water';
    default: return 'bg-default shadow-center shadow-default';
  }
}
