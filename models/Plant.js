

function Plant(id, title, category, zone, commonName, variety, regionalName, botanicalName, description, notes, soilPH, soilType, water, sunlight, foliage, image, amount) {
  this.id = id;
  this.title = title;
  this.category = category;
  this.zone = zone;
  this.commonName = commonName;
  this.variety = variety;
  this.regionalName = regionalName;
  this.botanicalName = botanicalName;
  this.description = description;
  this.notes = notes;
  this.soilPH = soilPH;
  this.soilType = soilType;
  this.water = water;
  this.sunlight = sunlight;
  this.foliage = foliage;
  this.image = image;
  this.amount = amount;
}


module.exports = Plant;