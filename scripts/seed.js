const db = require('mysql2/promise');
// const {
//     users
// } = require('../src/lib/fixtures.ts');
const bcrypt = require('bcrypt');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// @Todo: Get this data from '../src/lib/fixtures.ts'
// Currently it gives users as 'undefined' if imported
const users = [
    {
        id: 1,
        name: 'Abhishek',
        email: 'abhishek@acme.com'
    },
    {
        id: 2,
        name: 'Paul',
        email: 'paul@acme.com'
    }
];

async function testDBConnection(conn) {
    try {
        const _ = await conn.execute(
            'SELECT 1 + 1 AS `test`'
        );
        console.log('Successfully connected to database!'); // results contains rows returned by server
    } catch (err) {
        throw err;
    }
}

async function seedUsers(conn) {
    try {
        const createTable = `
            CREATE TABLE IF NOT EXISTS user (
                    id INT UNSIGNED AUTO_INCREMENT,
                    name VARCHAR(256),
                    email VARCHAR(256) NOT NULL UNIQUE,
                    constraint users_pk primary key (id)
            )
        `;
        await conn.query(createTable);

        console.log('Created Users Table');

        for (user of users) {
            // @Todo: Use prepared statement
            const insertUser = `
                INSERT IGNORE INTO user (id, name, email)
                VALUES ('${user.id}', '${user.name}', '${user.email}')
            `
            await conn.query(insertUser);
        }

        console.log(`Seeded ${users.length} users`);
    } catch
        (err) {
        throw err;
    }
}


async function main() {
    // Create the connection to database
    const conn = await db.createConnection({
        host: dbHost,
        port: dbPort,
        database: dbName,
        user: dbUsername,
        password: dbPassword,
    });

    await testDBConnection(conn);
    await seedUsers(conn);

    conn.close()
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
