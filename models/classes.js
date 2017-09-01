const db = require('../db/config');

const Classes = {};

Classes.findAll = () => {
    console.log(db);

    return db.query('SELECT * FROM data ORDER BY id ASC');
};

module.exports = Classes;