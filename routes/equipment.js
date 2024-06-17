const express = require('express');
const router = express.Router();
const equipment = require('../data/equipment.js');

//GET route to get all equipmentItem data
router.get('/', (req, res) => {
  const links = [
    {
      href: 'equipment/:id',
      rel: ':id',
      type: 'GET',
    },
  ];

  res.json({ equipment, links });
});

// GET router to get a equipmentItem by ID
router.get('/:id', (req, res, next) => {
  // Using the Array.find method to find the equipmentItem with the same id as the one sent with the request
  const equipmentItem = equipment.find((u) => u.id == req.params.id);

  const links = [
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'PATCH',
    },
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'DELETE',
    },
  ];

  if (equipmentItem) res.json({ equipmentItem, links });
  else next();
});

// POST Create a equipmentItem
router.post('/', (req, res) => {
  // Within the POST request we will create a new equipmentItem.
  // The client will pass us data and we'll push that data into our equipment array.
  // the equipmentItem data that we want to create is inside the req.body
  if (req.body.model && req.body.product && req.body.unitsSold) {
    if (equipment.find((u) => u.product === req.body.product)) {
      // The above returns an object, we found an existing equipmentItem with the same equipmentItemname. So it's a no go
      res.json({ error: 'Product name Already Taken' });
      return;
    }

    // If the code gets to this point, we are good to create the equipmentItem
    const equipmentItem = {
      id: equipment.length + 1,
      model: req.body.model,
      product: req.body.product,
      unitsSold: req.body.unitsSold,
    };

    equipment.push(equipmentItem);
    res.json(equipmentItem);
  } else {
    res.status(400).json({ error: 'Insufficient Data' });
  }
});

//PATCH Update a equipmentItem
router.patch('/:id', (req, res, next) => {
  // Within the PATCH request route, we allow the client
  // to make changes to an existing equipmentItem in the database.
  const equipmentItem = equipment.find((u, i) => {
    if (u.id == req.params.id) {
      for (const key in req.body) {
        // Applying the updates within the req.body to the in-memory equipmentItem
        equipment[i][key] = req.body[key];
      }
      return true;
    }
  });

  if (equipmentItem) {
    res.json(equipmentItem);
  } else {
    res.status(404).json({error: 'Equipment Not Found'});
  }
});

// Delete a equipmentItem
router.delete('/:id', (req, res) => {
  // The DELETE request route simply removes a resource.
  const equipmentItem = equipment.find((u, i) => {
    if (u.id == req.params.id) {
      equipment.splice(i, 1);
      return true;
    }
  });

  if (equipmentItem) res.json(equipmentItem);
  else next();
});

module.exports = router;