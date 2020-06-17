import path from 'path'

module.exports = {
    client: 'mssql',
    connection: {
        user: 'sa',
        password: '123456',
        server: 'localhost',
        port: 1433,
        database: 'JEFF',
      },
    useNullAsDefault: true,

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
}