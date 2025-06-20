import { query } from './db';

export async function getPostsRecentesData(excludeId: Number | null = null) {
    if (excludeId == null) {
        return query(`SELECT ID_POST, TITULO, DATA, FOTO FROM Posts ORDER BY DATA DESC LIMIT 4`, []);
    }
    return query(`SELECT ID_POST, TITULO, DATA, FOTO FROM Posts WHERE ID_POST != ? ORDER BY DATA DESC LIMIT 4`, [excludeId]);
}

export async function getPostsByYearMonth(year: number, month: number) {
    return query(`SELECT ID_POST, TITULO, TEXTO, FOTO, DATA FROM Posts WHERE YEAR(DATA) = ? AND MONTH(DATA) = ? ORDER BY DATA DESC`, [year, month]);
}
