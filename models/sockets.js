const BandList = require("./bandList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("connected", socket.id);

      socket.emit("current-bands", this.bandList.getBands());

      socket.on("create-band", (data) => {
        this.bandList.addBand(data.name);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on("change-band-name", (data) => {
        this.bandList.changeBandName(data.id, data.newName);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on("vote-band", (data) => {
        this.bandList.increaseVotes(data.id);
        this.io.emit("current-bands", this.bandList.getBands());
      });

      socket.on("delete-band", (data) => {
        this.bandList.removeBand(data.id);
        this.io.emit("current-bands", this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
