module.exports = {
    index: (req, res) => {
    res.render('students/index')
}
};

const Student = require('../models/student');

const studentsController = {};

studentsController.index = (req,res) => {
    Student.findAll()
        .then(student => {
            res.render('students/index', { students: students });
        })
        .catch(err => {
            res.status(400).json(err);
        });

};

studentsController.show = (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            res.render('students/show', { students: students })
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports = studentsController;