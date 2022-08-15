let reservations = require('../data/reservations');
const path = require('path');

module.exports = app => {
  app.get('/reserve', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/reserve.html'))
  );
  app.get('/reservationsPage', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/reservations.html'))
  );

  app.get('/reservations', (req, res) =>
    res.json(reservations.getReservations())
  );

  app.post('/reservations', (req, res) => {
    reservations.addReservation(req.body);
    res.sendStatus(200);
  });
};
