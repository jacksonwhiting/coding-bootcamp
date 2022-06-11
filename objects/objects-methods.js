let restaraunt = {
   name: 'Good Stuff',
   guestCapacity: 75,
   guestCount: 0,
   checkAvailability: function (partySize = 0) {
      let seatsLeft = this.guestCapacity - this.guestCount;
      console.log(seatsLeft);
      return partySize <= seatsLeft;
   },
   seatParty: function (partySize) {
      if (this.checkAvailability(partySize)) {
         this.guestCount += partySize;
      } else {
         console.log('There"s no more room');
      };
   },
   removeParty: function (partySize) {
      let seatsLeft = this.guestCapacity -= partySize;
      console.log(seatsLeft);
   }
};

console.log(restaraunt.checkAvailability(30));
restaraunt.seatParty(77);
console.log(restaraunt.checkAvailability());
restaraunt.seatParty(30);
console.log(restaraunt.checkAvailability());
restaraunt.removeParty(20);