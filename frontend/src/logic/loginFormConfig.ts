import { JSX } from 'react';

type FormConfig = {
	name: keyof LoginFormValue;
	validate?: (error: LoginFormValue) => string;
} & JSX.IntrinsicElements['input'];

export const loginFormConfig: FormConfig[] = [
	{
		name: 'username',
		placeholder: 'Username',
		required: true,
		autoComplete: 'username',
		minLength: 5,
	},
	{
		name: 'password',
		placeholder: 'Password',
		required: true,
		type: 'password',
		autoComplete: 'current-password',
		minLength: 8,
	},
];

export type LoginFormValue = {
	username: string;
	password: string;
};

export const loginFormInitialState: LoginFormValue = {
	username: '',
	password: '',
};
