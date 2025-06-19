import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { newSession } from '$lib/db/auth';

export const actions = {
    login: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        if (!username || !password) {
            return fail(400, { error: 'Preencha todos os campos.' });
        }

        const token = await newSession(username, password);

        if (!token) {
            return fail(401, { error: 'Credenciais inválidas.' });
        }

        // Set the session cookie
        cookies.set('session', JSON.stringify({ username, token }), {
            path: '/admin',
            httpOnly: true,
            sameSite: 'strict'
        });

        throw redirect(302, '/admin/dashboard');
    }
} satisfies Actions;
