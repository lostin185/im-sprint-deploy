const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).send('Hello, World!')
})

app.listen(5000, () => {
  console.log(`server listening on 5000`)
})