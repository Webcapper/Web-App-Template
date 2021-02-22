var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://prskid1000:nIELmPiB3vZ4YkWQ@cluster0-qxsqv.mongodb.net/cehg?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));
db.on('open', console.error.bind(console, 'MongoDB Connected Succesfully'));

var express = require('express');
var multer = require('multer');

var cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
var upload = multer();

app.use(cors({ origin: true }));
app.use(upload.array('files', 12));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const control = require('./controller/control');

app.post('/post', control.Post);
app.get('/get', control.Get);

app.listen(process.env.PORT || 3001,
    () => console.log("Server is running..."));
console.log('CE BackEnd');
