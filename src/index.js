import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

import mongoose from './db/connection.js'

var express = require("express");
// var mongoose= require("mongoose");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var app     = express();
var BirthdayPost = mongoose.model("BirthdayPost");
