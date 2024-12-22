'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export type UserData = {
	userName: string;
	jobTitle: string;
};

export const submitUserData = async (state: UserData, data: FormData) => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const userName = data.get('userName');
		const jobTitle = data.get('jobTitle');

		if (!userName || !jobTitle) {
			// TODO: Throw error
		}

		const cookieStore = await cookies();

		// NOTE: add expiration time if required
		cookieStore.set('user_name', userName as string);
		cookieStore.set('job_title', jobTitle as string);
	} catch (error) {
		// TODO: Throw error
	}
	redirect('/');
};
