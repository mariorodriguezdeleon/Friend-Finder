const express = require('express');
const path = require('path');

const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');

const app = express();
const PORT = process.argv[2] || 3000;

app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, function() {
    console.log('frined-finder is running on ' + PORT);
})