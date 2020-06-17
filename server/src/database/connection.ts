import knex from 'knex'

const connection = knex({
    client: 'mssql',
    connection: {
        user: 'sa',
        password: '123456',
        server: 'localhost',
        port: 1433,
        database: 'JEFF',
      },
    useNullAsDefault: true
})

export default connection