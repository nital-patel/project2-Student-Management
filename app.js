const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index', { title: 'student student'});
});



const studentsRouter = require('./routes/students-routes');
app.use('/student', studentsRouter)



app.get('/', (req, res) => {
    res.render('index', { title: 'classes classes'});
});

const classesRouter = require('./routes/classes-routes');
app.use('/data', classesRouter)


