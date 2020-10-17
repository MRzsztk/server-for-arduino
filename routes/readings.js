const express = require('express');
const MoistureReading = require('../models/moistureReading');
const router = express.Router();

router.post('/', (req, res) => {
  const { probe, moisture } = req.body;
  MoistureReading.create({
    probe: probe,
    moisture: moisture
  }).then(reading => {
    res.status(201).send(`Entry saved.`);
    console.log(`Sensor reading added to the database (probe ${probe}, moisture ${moisture}%).`);
  }).catch(err => {
    console.log(err);
  })
})

router.get('/', (req, res) => {
  MoistureReading.find().then(allReadings => {
    allReadings.forEach(reading => {reading.time=reading.createdAt.toLocaleTimeString() + ", " + reading.createdAt.toLocaleDateString()})
    allReadings.sort((a,b) =>(b.createdAt-a.createdAt))
    res.render('readings', { readings: allReadings });
  }).catch(err => {
    console.log(err);
  })
});


module.exports = router;