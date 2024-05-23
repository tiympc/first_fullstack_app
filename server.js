const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 4000;
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();
const app = express();

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
    cors({
    origin: ['http://localhost:4000', 'http://localhost:3000'],
    credentials: true}));

app.get('/', (req, res) => { 
    res.json({message: 'welcome to the randomideas api'});
});

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));