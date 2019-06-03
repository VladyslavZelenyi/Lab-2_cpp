const express  = require('express');
const path = require('path');
const mongoose = require('mongoose');
const postRouter =  require('./routes/post');
const keys = require('./keys');
const bodyParser = require('body-parser');

const port = process.env.Port || 5000;
const clientPath = path.join(__dirname, 'client');


mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(err  => console.error(err));

const app = express();
app.use(bodyParser.json())
app.use('/post', postRouter);
app.use(express.static(clientPath));


app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
});

