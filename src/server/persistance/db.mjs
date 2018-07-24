import knex from 'knex';
import path from 'path';

const persistancePath = path.join(__basedir, 'data', 'list.sqlite');

const conn = knex({
  client: 'sqlite3',
  connection: {
    filename: persistancePath,
  },
});

export default conn;
