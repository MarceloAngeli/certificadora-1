import mariadb from 'mariadb';
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'BonsFluidos',
    connectionLimit: 5
});
export async function queryTeste(query: string) {
  let conn;
  try {
	conn = await pool.getConnection();
	const result = await conn.query(query);
  return result;
  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.end();
  }
}