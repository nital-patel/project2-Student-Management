const db = require('../db/config');

const Classes = {
    findAll() {
        return db.query('SELECT * FROM data ORDER BY id ASC');
    },
    findById(id) {
        return db.oneOrNone(`SELECT * FROM data WHERE id = $1`, [id]);
    },

    update(classData) {
        return db.none(`
        UPDATE data SET        
            name = $2,
            instructor = $3,
            start_date = $4,
            end_date = $5
        WHERE
            id = $1
        `,
            [classData.id, classData.name, classData.instructor, classData.start_date, classData.end_date]
        );
    },

    create(classes) {
        return db.one(`
      INSERT INTO data
        (name, instructor, start_date, end_date)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING *
    `,
            [classData.name, classData.instructor, classData.start_date, classData.end_date]
        );
    },

    destroy(id) {
        return db.none(
            `    
      DELETE FROM data
      WHERE id = $1
    `,
            [id]
        );

    }
}

module.exports = Classes;
