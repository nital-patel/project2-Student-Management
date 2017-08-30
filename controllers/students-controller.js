module.exports = {
    index: (req, res) => {
    res.render('students/index')
}
};

const Student = require('../models/student');

const studentsController = {};

studentsController.index = (req,res) => {
    Student.findAll()
        .then(students => {
            res.render('students/index', { students: students });
        })
        .catch(err => {
            res.status(400).json(err);
        });

};

module.exports = studentsController;