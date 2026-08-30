const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const studentRoutes = require('./routes/studentRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, progress ho rhi h juhi');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.use('/students', studentRoutes);
app.use('/books', bookRoutes);

// Keep this mounted last so it catches anything unhandled above.
app.use(errorHandler);

module.exports = app;
