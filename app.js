const express = require('express');
const app = express();
const path = require('path')


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Student!');
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const studentsRouter = require('./routes/students-routes');
app.use('/students', studentsRouter)
