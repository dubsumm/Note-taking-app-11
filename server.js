const express = require('express')
const path = require('path');
const app = express();
const PORT = 3001 || process.env.PORT
const htmlRoutes = require('./routes/htmlRoute');
const notesRoutes = require('./routes/notesRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', notesRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
