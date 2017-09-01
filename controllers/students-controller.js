
const Student = require('../models/student');

const studentsController = {};

studentsController.index = (req,res) => {
    Student.findAll()
        .then(students => {

            res.render('students/index', { students: students });
        })
        .catch(err => {
            res.status(500).json(err);
        });

};

studentsController.show = (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            res.render('students/show', { student: student })
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

studentsController.edit = (req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            res.render ('students/edit', { student: student })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

studentsController.update = (req, res) => {

    console.log("UPDATING THE RECORD");

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
            res.status(500).json(err);
        });

};

studentsController.new = (req, res) => {
    res.render('students/new')

};

studentsController.create = (req, res) => {

    console.log('Create Student');

    Student.create({
        id: req.body.id,
        student_name: req.body.student_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    })
        .then(student => {
        res.redirect(`/student/${student.id}`)
    })
        .catch(err => {
        res.status(500).json(err);
        });
};


studentsController.destroy = (req, res) => {
    Student.destroy(req.params.id)
        .then(() => {
            res.redirect('/student')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};



module.exports = studentsController;
