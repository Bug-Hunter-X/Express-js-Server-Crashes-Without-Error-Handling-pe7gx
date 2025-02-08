const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    //Process request data 
    console.log(req.body);
    res.send('User created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000, () => console.log('Server started on port 3000'));