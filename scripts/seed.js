const db = require('mysql2/promise');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
async function testDBConnection(conn) {
// A simple SELECT query
    try {
        const [results, fields] = await conn.query(
            'SELECT 1 + 1 AS `test`'
        );

        console.log(results); // results contains rows returned by server
    } catch (err) {
        console.log(err);
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

    conn.close()
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
