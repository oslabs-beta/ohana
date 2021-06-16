const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routers/userRouter');
<<<<<<< HEAD
const adminRouter = require('./routers/adminRouter')
const spacesRouter = require('./routers/spacesRouter');
=======
const adminRouter = require('./routers/adminRouter');
>>>>>>> 17973a421f580fec5662c147822791bd09027559
const clusterRouter = require('./routers/clusterRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/user', userRouter)
app.use('/admin', adminRouter)
<<<<<<< HEAD
app.use('/spaces', spacesRouter)
app.use('/clusters', clusterRouter)
=======
app.use('/clusters', clusterRouter)
// app.use('/spaces', spacesRouter)
>>>>>>> 17973a421f580fec5662c147822791bd09027559

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