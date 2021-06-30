const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [new Band("Example")];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
  }

  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.votes++;
      }
    });
  }

  changeBandName(id, newName) {
    this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
    });
  }
}

module.exports = BandList;
