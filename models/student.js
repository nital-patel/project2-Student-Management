const db = require('../db/config');

const Student = {
    findAll() {
        return db.query('SELECT * FROM student ORDER BY id ASC');
    },
    findById(id) {
        return db.oneOrNone(`SELECT * FROM student WHERE id = $1`, [id]);
    },
    update(student) {
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
    },
    create(student) {
        return db.one(`   
            INSERT INTO student
                (student_name, email, gender, phone_number, profile_image)
            VALUES 
                ($1, $2, $3, $4, $5)
            RETURNING *
        `,
            [student.student_name, student.email, student.gender, student.phone_number, student.profile_image]
        );
    },
    findClassesRegistered(id) {
        return db.query(
            `SELECT * FROM student_classes
             WHERE 
             student_id = ${id}`
        );
    },
    deleteRegisteredClasses(id) {
        return db.none(`DELETE FROM student_classes WHERE student_id = ${id}`);
    },
    registerClass (student_id, class_id) {
        return db.one(`
            INSERT INTO student_classes (student_id, class_id)
            VALUES 
                ($1, $2)
            RETURNING *
        `, [student_id, class_id]);
    },
    destroy(id) {
        return db.none(
            `    
            DELETE FROM student
            WHERE id = $1
            `,
            [id]
        );
    }
};

module.exports = Student;
