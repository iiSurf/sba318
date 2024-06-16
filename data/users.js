// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "users" data will be simple information about
// the application's user base.
const users = [
    {
      id: 1,
      name: 'Carey',
      username: 'cyare23',
      email: 'cy23@example.com',
    },
    {
      id: 2,
      name: 'Mikoto',
      username: 'Miiko',
      email: 'mikoto_u@example.com',
    },
    {
      id: 3,
      name: 'Ronald',
      username: 'RonRonRon',
      email: 'mronald@example.com',
    },
    {
        id: 4,
        name: 'Jake',
        username: 'Carpenter',
        email: 'burton@example.com',
      },
      {
        id: 5,
        name: 'Craig',
        username: 'Kelly',
        email: 'craigkelly@example.com',
      },
      {
        id: 6,
        name: 'Dave',
        username: 'Downing',
        email: 'ddowning@example.com',
      },
      {
        id: 7,
        name: 'Shaun',
        username: 'Whitespace',
        email: 'whitespace@example.com',
      },
      {
        id: 8,
        name: 'Anna',
        username: 'AnnaBanana',
        email: 'annagasser@example.com',
      },
      {
        id: 9,
        name: 'Zoe',
        username: 'ZoeSyd',
        email: 'zoeSydowski@example.com',
      },
  ];
  
  module.exports = users;