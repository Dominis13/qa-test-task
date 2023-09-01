const express = require('express');
const router = express();

router.post('/api/supply', function(req, res) {
  res.status(200).send('100000');
});

router.patch('/api/supply', function(req, res) {
  res.status(200);
  res.send();
});

router.post('/api/vehicle', function (req, res) {
  res.json({ phone: '+7(987)123-45-67', code: 'q1a2z3'});
});

router.get('/api/orders/:id', function(req, res){
  if (req.params.id == 1) {
    res.json({ id: 1, date: '01-09-2023 13' });
  }
  res.status(404);
  res.send();
});

module.exports = router;
