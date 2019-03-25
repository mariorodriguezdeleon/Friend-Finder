
// Constant variables =======================================
const express = require('express');
const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Appending additional resources to app ====================
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routes to app assets and responses =======================
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Initialize, listening on... =====================================
app.listen(PORT, function() {
    console.log('frined-finder is running on ' + PORT);
});