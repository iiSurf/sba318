// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "equipment" data will be simple information about
// the snowboarding equipment.
const equipment = [
    {
      id: 1,
      model: 'Mission',
      product: 'Bindings',
      unitsSold: '123456789',
    },
    {
      id: 2,
      model: 'Malavita',
      product: 'Bindings',
      unitsSold: '12345678',
    },
    {
      id: 3,
      model: 'Step On',
      product: 'Bindings',
      unitsSold: '1234567',
    },
    {
        id: 4,
        model: 'Custom',
        product: 'Snowboard',
        unitsSold: '123456',
      },
      {
        id: 5,
        model: 'Process',
        product: 'Snowboard',
        unitsSold: '12345',
      },
      {
        id: 6,
        model: 'Flight Attendant',
        product: 'Snowboard',
        unitsSold: '1234',
      },
      {
        id: 7,
        model: 'Photon',
        product: 'Boots',
        unitsSold: '123',
      },
      {
        id: 8,
        model: 'Ruler',
        product: 'Boots',
        unitsSold: '12',
      },
      {
        id: 9,
        model: 'SLX',
        product: 'Boots',
        unitsSold: '1',
      },
  ];
  
  module.exports = equipment;