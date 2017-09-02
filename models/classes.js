const db = require('../db/config');

const Classes = {
    findAll() {
        return db.query('SELECT * FROM data ORDER BY id ASC');
    },
    findById(id) {
        return db.oneOrNone(`SELECT * FROM data WHERE id = $1`, [id]);
    }
};

Classes.create = (classes) => {
    return db.one(`
      INSERT INTO data
        (name, instructor, start_date, end_date)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING *
    `,
        [data.name, data.instructor, data.start_date, data.end_date, id]
    );
};
module.exports = Classes;
