const db = require('../db/config');

const Student = {};

Student.findAll = () => {
    return db.query('SELECT * FROM student ORDER BY id ASC');
};

module.export = Student;
