const express = require('express');
const app = express();
const path = require('path');

const getPath = path.join(__dirname,'Public');

app.use(express.static(getPath));

app.listen(5000);