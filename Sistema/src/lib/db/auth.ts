import { query } from './db';
import { sha256 } from 'js-sha256';

async function checkSession(id: string, token: string): Promise<boolean> {
    if (!id || !token) {
        console.error('Parâmetros inválidos para auth:', { id, token });
        return false;
    }

    // Verifica se o usuário existe e se o token é válido
    return query('SELECT * FROM Usuarios WHERE Login = ? AND Cookies = ?', [id, token]).then((rows) => {
        return rows.length > 0;
    }
    ).catch((err) => {
        console.error('Erro ao verificar autenticação:', err);
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
    return query('SELECT * FROM Usuarios WHERE Login = ? AND HashSenha = ?', [id, hashSenha]).then((rows) => {
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
        console.error('Senha fornecida:', senha);
        console.error('Senha hashada:', sha256(senha));
        return null;
    }

    // Gera um novo token e atualiza a sessão do usuário no BD
    const token = generateToken();
    try {
        await query('UPDATE Usuarios SET Cookies = ? WHERE Login = ?', [token, id]);
        return token;
    } catch (err) {
        console.error('Erro ao atualizar sessão:', err);
        return null;
    }

}

function extractCookie(cookies: any): { id: string, token: string } | null {
    const sessionCookie = cookies.get('session');
    if (!sessionCookie) {
        return null;
    }

    try {
        const sessionData = JSON.parse(sessionCookie);
        if (sessionData && sessionData.username && sessionData.token) {
            return { id: sessionData.username, token: sessionData.token };
        }
    } catch (err) {
        console.error('Erro ao ler cookie:', err);
    }

    return null;
}

export async function checkAuth(cookies: any): Promise<boolean> {
    const session = extractCookie(cookies);
    if (!session) {
        console.error('Sessão não encontrada nos cookies');
        return Promise.resolve(false);
    }

    return checkSession(session.id, session.token);
}
