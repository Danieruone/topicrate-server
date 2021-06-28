const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [
      new Band("Metallica"),
      new Band("SOAD"),
      new Band("Linkin Park"),
      new Band("Slipknot"),
    ];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
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
