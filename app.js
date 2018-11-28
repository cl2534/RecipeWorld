
require('./db');
const express = require('express');
const logger = require("morgan");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const API_PORT = 3001;
const router = express.Router();
// enable sessions
const session = require('express-session');
// const sessionOptions = {
//     secret: 'secret cookie thang (store this elsewhere!)',
//     resave: true,
//       saveUninitialized: true
// };
// app.use(session(sessionOptions));
const mongoURL = "mongodb://cl2534:chfhd156@ds151951.mlab.com:51951/cl2534";
mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection failed:"));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
//
// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('index');
// });
//
// app.listen(process.env.PORT || 3000);
