// module.exports = {
//     index: (req, res) => {
//         res.render('classes/index')
//     }


const Classes = require('../models/classes');

const classesController = {};

classesController.index = (req,res) => {
    Classes.findAll()
        .then(classes => {

        res.render('classes/index', { classes });
    })
.catch(err => {
        res.status(500).json(err);
    });

};

classesController.show = (req, res) => {
    Classes.findById(req.params.id)
        .then(classData => {
            res.render('classes/show', { classData })
        })
        .catch(err => {
            res.status(500).json(err);
        });
};

module.exports = classesController;
