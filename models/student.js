const db = require('../db/config');

const Student = {};

Student.findAll = () => {
    return db.query('SELECT * FROM student ORDER BY id ASC');
};

Student.findById = id => {
    return db.oneOrNone(`SELECT * FROM student WHERE id = $1`, [id]);
};
module.export = Student;
