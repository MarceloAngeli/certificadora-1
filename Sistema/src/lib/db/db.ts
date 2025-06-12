import mariadb from 'mariadb';
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'BonsFluidos',
    connectionLimit: 5
});
export async function query(query: string, values: any[]) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(query, values);
    return result;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}