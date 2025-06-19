import { query } from './db';

export async function getPostsRecentesData(excludeIds: Number[] = []) {
    return query(`SELECT ID_POST, TITULO, DATA, FOTO FROM Posts WHERE ID_POST != ? ORDER BY DATA DESC LIMIT 4`, excludeIds);
}

export async function getPostsByYearMonth(year: number, month: number) {
    return query(`SELECT ID_POST, TITULO, TEXTO, FOTO, DATA FROM Posts WHERE YEAR(DATA) = ? AND MONTH(DATA) = ? ORDER BY DATA DESC`, [year, month]);
}
