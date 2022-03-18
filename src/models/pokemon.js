class Pokemon {
  constructor (id, name, image, description, types, stats, abilities) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.types = [...types];
    this.stats = [...stats];
    this.abilities = [...abilities];
  }
}

export default Pokemon;
