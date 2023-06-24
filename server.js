const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// In-memory user data
const users = [
  { username: 'admin', password: 'password' }
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform validation and authentication
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Successful login
    res.redirect('/admin');
  } else {
    // Invalid login
    res.redirect('/?error=1');
  }
});

// Root route (render login page)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Dashboard route
app.get('/admin', (req, res) => {
  // Check if the user is logged in (using a simple flag)
  if (!req.query.loggedIn) {
    res.redirect('/');
    return;
  }
  });


// Serve the files
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
  });
  
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/one.html', (req, res) => {
    res.sendFile(__dirname + '/one.html');
  });

  app.get('/one.css', (req, res) => {
    res.sendFile(__dirname + '/one.css');
  });

  app.get('/one.js', (req, res) => {
    res.sendFile(__dirname + '/one.js');
  });

  app.get('/two.html', (req, res) => {
    res.sendFile(__dirname + '/two.html');
  });

  app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
  });

// Login route
app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  
  // Logout route
  app.get('/logout', (req, res) => {
    // Redirect to the login page
    res.redirect('/login.html');
  });
  

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
