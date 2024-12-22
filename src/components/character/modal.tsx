'use client';

import type { ReactNode } from 'react';
import { DialogBody, VStack } from '@chakra-ui/react';
import {
	DialogRoot,
	DialogTrigger,
	DialogContent,
	DialogCloseTrigger,
} from '../ui/dialog';
import { Character } from '@/generated/graphql';

type ModalProps = {
	moreInfo: ReactNode;
	content: ReactNode;
} & Pick<Character, 'image' | 'name'>;

export const Modal = ({ content, moreInfo }: ModalProps) => {
	return (
		<DialogRoot size='xs' placement='center'>
			<DialogTrigger asChild>
				<VStack
					cursor='pointer'
					transition='transform 0.2s'
					_hover={{ transform: 'scale(1.05)' }}
					as='button'
					aria-label='Click to view character details'
					data-testid='character-modal-trigger'
				>
					{content}
				</VStack>
			</DialogTrigger>
			<DialogContent>
				<DialogBody pb='4'>{moreInfo}</DialogBody>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
};
