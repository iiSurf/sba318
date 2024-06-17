const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const userRouter = require('./routes/users.js');
const postRouter = require('./routes/posts.js');
const equipmentRouter = require('./routes/equipment.js');

// Valid API Keys.
const apiKeys = ['perscholas', 'ps-example', 'hJAsknw-L198sAJD-l3kasx'];

app.use(express.static('public'));

// Body parser middleware
// We have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// New middleware to check for API keys!
app.use('/api', function (req, res, next) {
  var key = req.query['api-key'];

  // Check for the absence of a key.
  if (!key) {
    res.status(400);
    return res.json({ error: 'API Key Required' });
  }

  // Check for key validity.
  if (apiKeys.indexOf(key) === -1) {
    res.status(401);
    return res.json({ error: 'Invalid API Key' });
  }

  // Valid key! Store it in req.key for route access.
  req.key = key;
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// API Routes
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/equipment', equipmentRouter);

app.get('/', (req, res) => {
  res.json({
    links: [
      {
        href: '/api',
        rel: 'api',
        type: 'GET',
      },
    ],
  });
});

// Adding some HATEOAS links.
app.get('/api', (req, res) => {
  res.json({
    links: [
      {
        href: 'api/users',
        rel: 'users',
        type: 'GET',
      },
      {
        href: 'api/users',
        rel: 'users',
        type: 'POST',
      },
      {
        href: 'api/posts',
        rel: 'posts',
        type: 'GET',
      },
      {
        href: 'api/posts',
        rel: 'posts',
        type: 'POST',
      },
      {
        href: 'api/equipment',
        rel: 'equipment',
        type: 'GET',
      },
      {
        href: 'api/equipment',
        rel: 'equipment',
        type: 'POST',
      },
    ],
  });
});

app.get('/users/new', (req, res) => {
  res.send(`
    <div> 
      <h1>Create a User</h1>
      <form action="/api/users?api-key=perscholas" method="POST">
        Name: <input type="text" name="name" /> <br />
        Username: <input type="text" name="username" /> <br />
        Email: <input type="text" name="email" /> <br />
        <input type="submit" value="Create User" />
      </form>
    </div>
  `);
});

app.get('/users/edit/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === parseInt(userId));

  if (user) {
    res.send(`
      <div> 
        <h1>Edit User</h1>
        <form action="/api/users/${userId}?api-key=perscholas" method="POST">
          <input type="hidden" name="_method" value="PUT" />
          Name: <input type="text" name="name" value="${user.name}" /> <br />
          Username: <input type="text" name="username" value="${user.username}" /> <br />
          Email: <input type="text" name="email" value="${user.email}" /> <br />
          <input type="submit" value="Update User" />
        </form>
      </div>
    `);
  } else {
    res.status(404).send('User Not Found');
  }
});

app.get('/view/users', (req, res) => {
  res.render('index', { data: users });
});

const addHeader = (req, res, next) => {
  res.setHeader('myServerHeader', 'This Came From Me Server');
  next();
};

app.use(addHeader);

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log('Containing the data:');
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// The only way this middleware runs is if a route handler function runs the "next()" function
app.use((req, res) => {
  res.status(404);
  res.json({ error: 'Resource Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message }); // 'This is not working. - Says the server'
});

app.use((req, res, next) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    req.method = req.body._method;
    delete req.body._method;
  }
  next();
});


app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
