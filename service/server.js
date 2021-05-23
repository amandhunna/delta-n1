const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// fire Store
const admin = require('firebase-admin');
const  router = require('./router');

const serviceAccount = require('./config/firebase.json');

const port = process.env.PORT || 6000;

const app = express();

app.use(cors());

// configure body parser
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


// register routes
app.use('/', router)


app.listen(port, () => {
  admin.initializeApp({credential: admin.credential.cert(serviceAccount)});
  const db = admin.firestore(); 
  console.log("-------db------", db);
  console.log('listening at port: ', `http://localhost:${port}/`);
});


module.exports = app;