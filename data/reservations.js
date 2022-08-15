let reservations = [];

module.exports = {
  getReservations() {
    return reservations
  },
  addReservation(reservation) {
    if (reservations.length >= 5) {
      reservation.isWaitlisted = true;
      reservations.push(reservation);
    } else {
      reservation.isWaitlisted = false;
      reservations.push(reservation);
    }
  },
};
