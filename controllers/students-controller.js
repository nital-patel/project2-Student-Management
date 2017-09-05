
const Student = require('../models/student');
const Classes = require('../models/classes');

const studentsController = {};

studentsController.index = (req,res) => {
    Student.findAll()
        .then(students => {

            res.render('students/index', { students });
        })
        .catch(err => {
            res.status(500).json(err);
        });

};

function findStudentDetails (id) {
    return Promise.all([
        Student.findById(id),
        Classes.findAll(),
        Student.findClassesRegistered(id)
    ])
        .then(results => {
            const classes = results[1];
            const student = results[0];

            const classesRegistered = results[2].reduce((val, cur) => {
                return [...val, cur.class_id];
            }, []);

            return { student, classes, classesRegistered };
        })

}

studentsController.show = (req, res) => {
    findStudentDetails(req.params.id)
        .then((data) => {
            res.render('students/show', data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });


};

studentsController.edit = (req, res) => {
    findStudentDetails(req.params.id)
        .then((data) => {
            res.render ('students/edit', data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });


};

studentsController.update = (req, res) => {

    if (!Array.isArray(req.body.classes)) {
        req.body.classes = (req.body.classes) ? [req.body.classes] : [];
    }

    Student.update({
        id: req.params.id,
        student_name: req.body.student_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    }, req.params.id)

        .then(Student.deleteRegisteredClasses(req.params.id))
        .then(Promise.all(req.body.classes.map(classRegistered => {
            return Student.registerClass(req.params.id, classRegistered)
        })))
        .then(() => {
            res.redirect(`/students/${req.params.id}`)
        })
        .catch(err => {
            res.status(500).json(err);
        });

};

studentsController.new = (req, res) => {
    res.render('students/new')
};

studentsController.create = (req, res) => {
    Student.create({
        profile_image: req.body.profile_image,
        student_name: req.body.student_name,
        email: req.body.email,
        gender: req.body.gender,
        phone_number: req.body.phone_number
    })
        .then(student => {
            res.redirect(`/students/${student.id}`)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

studentsController.destroy = (req, res) => {
    Student.destroy(req.params.id)
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = studentsController;
