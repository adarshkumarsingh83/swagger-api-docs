'use strict';
/*
* @author Adarsh
* @author $LastChangedBy: adarsh $
* @version $Revision: 0001 $, $Date:: 3/7/20 11:12 AM#$
*/

const express = require('express');
var path = require('path');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + req.path));
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);