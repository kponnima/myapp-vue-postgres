# myapp-vue-postgres
Vue Javascript framework with express and PostgreSQL

# client

## Project setup
`npm install`

### Compiles and hot-reloads for development
`npm run serve`

### Compiles and minifies for production
`npm run build`

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# server

## Postgres

### To start/stop/restart the server
`pg_ctl -D "C:\Program Files\PostgreSQL\11\data" start`
`pg_ctl -D "C:\Program Files\PostgreSQL\11\data" stop`
`pg_ctl -D "C:\Program Files\PostgreSQL\11\data" restart`

### To create a new database
`createdb -U postgres myappdb`
`psql -U postgres myappdb`

### Login as admin to default postgres database
`psql -U postgres`

### Create new user and role
postgres-# `CREATE ROLE kponnima86 WITH LOGIN PASSWORD 'Kushal86';`

### Login with the new user
`psql -U kponnima86 postgres`

### Grant access
`GRANT ALL PRIVILEGES ON DATABASE myappdb TO kponnima86;`

### Start the sequelize - generate the table to the database
`sequelize db:migrate`

### Misc
`SELECT version();` [GET_Current_version]
`\dt` or `SELECT * FROM pg_catalog.pg_tables;` [LIST_tables]
`SELECT * FROM "Books";` [GET_table_data]

#FAQs
On Windows servers the postgres user password is required upon installing.
To gain access to the database:

Modify file pg_hba.conf and change the line:
host    all    all    127.0.0.1/32    trust

Restart the postgres service and now login with psql or pgAdmin with user
postgres. None or any password will do as it will not be checked.

After changing the password modify again the line in pg_hba.conf to:
host    all    all    127.0.0.1/32    md5

Restart the postgres service