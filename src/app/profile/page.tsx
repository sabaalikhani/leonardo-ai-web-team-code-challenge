import { UserForm } from '@/components/user/user-form';
import { cookies } from 'next/headers';
import { PageWrapper } from '@/components/ui/page-wrapper';

const Profile = async () => {
	const cookieStore = await cookies();

	const userName = cookieStore.get('user_name');
	const jobTitle = cookieStore.get('job_title');

	return (
		<PageWrapper testId='profile-page'>
			<UserForm
				data={{
					userName: userName?.value ?? '',
					jobTitle: jobTitle?.value ?? '',
				}}
			/>
		</PageWrapper>
	);
};

export default Profile;
