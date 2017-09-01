const db = require('../db/config');

const Student = {};

    Student.findAll = () => {
        console.log(db);

        return db.query('SELECT * FROM student ORDER BY id ASC');
    },
    Student.findById = (id) =>  {
        return db.oneOrNone(`SELECT * FROM student WHERE id = $1`, [id]);
    };

Student.update = (student) => {
    return db.none(`
        UPDATE student SET        
            student_name = $2,
            email = $3,
            gender = $4,
            phone_number = $5
        WHERE
            id = $1
        `,
        [student.id, student.student_name, student.email, student.gender, student.phone_number]
    );
};

Student.create = (student) => {
    return db.one(`   
      INSERT INTO student
        (student_name, email, gender, phone_number)
      VALUES 
        ($1, $2, $3, $4, $5)
      RETURNING *
    `,
        [student.student_name, student.email, student.gender, student.phone_number, id]
    );
};

Student.destroy = (id) => {
    return db.none(
    `    
      DELETE FROM student
      WHERE id = $1
    `,
        [id]
    );
};


module.exports = Student;
