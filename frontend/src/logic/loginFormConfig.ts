import { JSX } from 'react';

export type LoginFormValue = {
	username: string;
	password: string;
};

type FormConfig = {
	name: keyof LoginFormValue;
	validate?: (error: LoginFormValue) => string;
	placeholderKey: string;
} & JSX.IntrinsicElements['input'];

export const loginFormConfig: FormConfig[] = [
	{
		name: 'username',
		placeholderKey: 'authorization_modal.placeholder.username',
		required: true,
		autoComplete: 'username',
		minLength: 5,
	},
	{
		name: 'password',
		placeholderKey: 'authorization_modal.placeholder.password',
		required: true,
		type: 'password',
		autoComplete: 'current-password',
		minLength: 8,
	},
];

export const loginFormInitialState: LoginFormValue = {
	username: '',
	password: '',
};
