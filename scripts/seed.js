const db = require('mysql2/promise');
// const {
//     users
// } = require('../src/lib/fixtures.js');
const bcrypt = require('bcrypt');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

// @Todo: Get this data from '../src/lib/fixtures.js'
// Currently it gives users as 'undefined' if imported
const users = [
    {
        id: 1,
        name: 'Abhishek',
        email: 'abhishek@acme.com',
        password: 'abhishek@acme.com'
    },
    {
        id: 2,
        name: 'Paul',
        email: 'paul@acme.com',
        password: 'paul@acme.com'
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
            CREATE TABLE IF NOT EXISTS users (
                    id INT UNSIGNED AUTO_INCREMENT,
                    name VARCHAR(256),
                    email VARCHAR(256) NOT NULL UNIQUE,
                    password TEXT NOT NULL,
                    constraint users_pk primary key (id)
            )
        `;
        await conn.query(createTable);

        console.log('Created Users Table');

        for (user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);

            // @Todo: Use prepared statement
            const insertUser = `
                INSERT IGNORE INTO users (id, name, email, password)
                VALUES ('${user.id}', '${user.name}', '${user.email}', '${hashedPassword}')
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
