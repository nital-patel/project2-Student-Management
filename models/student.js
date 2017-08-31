const db = require('../db/config');

const Student = {};

    Student.findAll = () => {
        console.log(db);

        return db.query('SELECT * FROM student ORDER BY id ASC');
    },
    Student.findById = id =>  {
        return db.oneOrNone(`SELECT * FROM student WHERE id = $1`, [id]);
    };

Student.update = (student, id) => {
    return db.none(
        `
        UPDATE students SET
        id = $1,
        student_name = $2,
        email = $3,
        gender = $4,
        phone_number = $5
        WHERE id = $6 
        `,
        [student.id, student.student_name, student.email, student.gender, student.phone_number, id]
    );
};


module.exports = Student;
