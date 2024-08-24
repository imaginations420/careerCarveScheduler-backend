const db = require('./db');
const fs = require('fs');
const path = require('path');

const initDb = () => {
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    db.exec(schema, (err) => {
        if (err) {
            console.error('Error initializing database:', err);
        } else {
            console.log('Database initialized.');
        }
    });
};

initDb();
