var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },

  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  }
};

var modal = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    {
      locations: ['06', '16', '26'],
      hits: ['', '', '']
    },
    {
      locations: ['24', '34', '44'],
      hits: ['', '', '']
    },
    {
      locations: ['10', '11', '12'],
      hits: ['', '', '']
    }
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = 'hit';
        console.log(this.ships);
        return true
      }
    }
    return false;
  }
};


modal.fire('06');

view.displayHit(modal.ships[0].locations[0]);
view.displayHit(modal.ships[0].locations[1]);
view.displayHit(modal.ships[0].locations[2]);

view.displayHit(modal.ships[1].locations[0]);
view.displayHit(modal.ships[1].locations[1]);
view.displayHit(modal.ships[1].locations[2]);

view.displayHit(modal.ships[2].locations[0]);
view.displayHit(modal.ships[2].locations[1]);
view.displayHit(modal.ships[2].locations[2]);

