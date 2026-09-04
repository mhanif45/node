const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Hanif on Kubernetes</h1><p>Deployed with Node.js + K8s</p>');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
