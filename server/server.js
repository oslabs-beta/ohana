const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routers/userRouter');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/user', userRouter);


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(500).json(errorObj.message);
});


app.listen(3000, () => {
  console.log('Listening on port 3000...');
});