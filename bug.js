const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('User created');
});

//This will cause error because we didn't handle errors
app.listen(3000, () => console.log('Server started on port 3000'));