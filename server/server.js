const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter')
const spacesRouter = require('./routers/spacesRouter');
const vClusterRouter = require('./routers/vClusterRouter');
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/user', userRouter)
app.use('/admin', adminRouter)
app.use('/spaces', spacesRouter)
app.use('/vclusters', vClusterRouter)

app.get('*', (req, res) => {
  console.log('req.cookies', req.cookies)
  if (!req.cookies.AuthToken) return res.redirect('/')
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    message: 'An error occurred',
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(500).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});