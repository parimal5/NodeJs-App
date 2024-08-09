const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple Node.js App!</h1><p>This app is used to practice build and deployment with Jenkins, Kubernetes, and Ansible.</p>');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

