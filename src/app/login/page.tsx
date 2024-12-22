import { UserForm } from '@/components/user/user-form';
import { PageWrapper } from '@/components/ui/page-wrapper';

export default function Login() {
	return (
		<PageWrapper testId='login-page' h='100vh' pt={[50, 100]}>
			<UserForm />
		</PageWrapper>
	);
}
