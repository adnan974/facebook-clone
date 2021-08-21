const express = require('express');
const app = express();
const router = require('./app/routes');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const authRouter = require('./app/routes/auth')


app.use(bodyParser.json());

// -- Db connection
mongoose.connect('mongodb://localhost/facebookCloneDb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});
//

app.use('/',router);



app.listen(8080,()=>{
    console.log('server is listening on...');
})