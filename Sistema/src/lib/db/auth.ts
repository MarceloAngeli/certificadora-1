import { query } from './db';
import { sha256 } from 'js-sha256';

export async function isAuthenticated(id: string, token: string): Promise<boolean> {
    if (!id || !token) {
        console.error('Parâmetros inválidos para auth:', { id, token });
        return false;
    }

    // Verifica se o usuário existe e se o token é válido
    return query('SELECT * FROM users WHERE id = ? AND token = ?', [id, token]).then((rows) => {
        return rows.length > 0;
    }
    ).catch((err) => {
        console.error('Error checking authentication:', err);
        return false;
    }
    );
}

function generateToken(): string {
    const length = 64;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function checkCredentials(id: string, senha: string): Promise<boolean> {
    if (!id || !senha) {
        console.error('Parâmetros inválidos para checkCredentials:', { id, senha });
        return Promise.resolve(false);
    }

    const hashSenha = sha256(senha);

    // Verifica se o usuário existe e se a senha está correta
    return query('SELECT * FROM users WHERE id = ? AND senha = ?', [id, hashSenha]).then((rows) => {
        return rows.length > 0;
    }
    ).catch((err) => {
        console.error('Error checking credentials:', err);
        return false;
    }
    );
}

export async function newSession(id: string, senha: string): Promise<string | null> {
    if (!id || !senha) {
        console.error('Parâmetros inválidos para newSession:', { id, senha });
        return null;
    }

    // Verifica as credenciais do usuário
    const ehValido = await checkCredentials(id, senha);
    if (!ehValido) {
        console.error('Credenciais inválidas para o usuário:', id);
        return null;
    }

    // Gera um novo token e atualiza a sessão do usuário no BD
    const token = generateToken();
    try {
        await query('UPDATE users SET token = ? WHERE id = ?', [token, id]);
        return token;
    } catch (err) {
        console.error('Error updating session:', err);
        return null;
    }
}