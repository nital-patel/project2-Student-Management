const express = require('express');
const app = express();
const path = require('path')
const moviesRouter = require('./routes/movies-routes');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/movies', moviesRouter)


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});