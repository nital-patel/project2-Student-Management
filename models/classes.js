const db = require('../db/config');

const Classes = {
    findAll() {
        return db.query('SELECT * FROM data ORDER BY id ASC');
    },
    findById(id) {
        return db.oneOrNone(`SELECT * FROM data WHERE id = $1`, [id]);
    }
};

module.exports = Classes;
