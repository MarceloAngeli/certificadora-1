import type { LayoutServerLoad } from './$types';
import { checkAuth } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export const load = (async ( { cookies } ) => {
    if (!await checkAuth(cookies)) {
        redirect(302, '/admin');
    }
    
    return {};
}) satisfies LayoutServerLoad;
