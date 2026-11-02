const cors = require('cors');
const express = require('express');
const healthRoutes = require('./routes/health.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', healthRoutes);

module.exports = app;
