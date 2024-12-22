'use client';

import { useActionState } from 'react';
import { Input, Fieldset } from '@chakra-ui/react';
import { submitUserData } from '@/actions/user';
import type { UserData } from '@/actions/user';
import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';

const initialState = {
	userName: '',
	jobTitle: '',
};

type UserFormProps = {
	data?: UserData;
	testId?: string;
};

export const UserForm = ({
	data = initialState,
	testId = 'user-form',
}: UserFormProps) => {
	const [_, formAction, isPending] = useActionState(submitUserData, data); // eslint-disable-line @typescript-eslint/no-unused-vars 

	return (
		<form action={formAction} data-testid={testId}>
			<Fieldset.Root maxW='md' margin='auto'>
				<Fieldset.Legend>User details</Fieldset.Legend>
				<Fieldset.Content>
					<Field label='User name' required>
						<Input
							name='userName'
							defaultValue={data.userName}
							appearance='primary'
						/>
					</Field>
					<Field label='Job title' required>
						<Input
							name='jobTitle'
							defaultValue={data.jobTitle}
							appearance='primary'
						/>
					</Field>
				</Fieldset.Content>
				<Button
					type='submit'
					alignSelf='flex-start'
					loading={isPending}
					appearance='primary'
					w={['full', 'auto']}
					data-testid='user-form-submit'
				>
					Submit
				</Button>
			</Fieldset.Root>
		</form>
	);
};
