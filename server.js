// Dependencies: express
const express = require('express');
const logger = require('./middleware/logger');
const { routes } = require('./routes/api');

// Initialize express
const app = express();

// Logger middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API endpoints
routes.forEach(route => {
    app.use(`/api/${route}`, require(`./routes/api/endpoints.js`));
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));