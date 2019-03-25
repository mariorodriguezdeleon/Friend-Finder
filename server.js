
// Constant variables =======================================
const express = require('express');
const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes to app assets and responses =======================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Initialize listening =====================================
app.listen(PORT, function() {
    console.log('frined-finder is running on ' + PORT);
});