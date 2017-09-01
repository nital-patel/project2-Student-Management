// module.exports = {
//     index: (req, res) => {
//         res.render('classes/index')
//     }
// };

const Classes = require('../models/classes');

const classesController = {};

classesController.index = (req,res) => {
    Classes.findAll()
        .then(classes => {

        res.render('classes/index', { classes: classes });
    })
.catch(err => {
        res.status(500).json(err);
    });

};

module.exports = classesController;