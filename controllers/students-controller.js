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

            console.log(students);
            res.render('students/index', { students: students });
        })
        .catch(err => {
            res.status(400).json(err);
        });

};

studentsController.show = (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            res.render('students/show', { student: student })
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

studentsController.edit = (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            res.render ('students/edit', { student: student })
        })
        .catch(err => {
            res.status(400).json(err);
        })
};

studentsController.update = (req, res) => {
    Student.update({
        id: req.body.id,
        student_name: req.body.student_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    }, req.params.id)
        .then(() => {
            res.redirect(`/student/${req.params.id}`)
        })
        .catch(err => {
            res.status(400).json(err);
        });

}

module.exports = studentsController;
