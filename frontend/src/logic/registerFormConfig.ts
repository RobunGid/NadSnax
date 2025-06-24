import { Role } from '../types';
import { JSX } from 'react';

type FormConfig = {
	name: keyof RegisterFormValue;
} & JSX.IntrinsicElements['input'];

export const registerFormConfig: FormConfig[] = [
	{
		name: 'username',
		placeholder: 'Username',
		required: true,
		autoComplete: 'username',
		minLength: 5,
	},
	{
		name: 'firstName',
		placeholder: 'First name',
		required: true,
		autoComplete: 'name',
		minLength: 3,
	},
	{
		name: 'lastName',
		placeholder: 'Last name',
		autoComplete: 'name',
		minLength: 3,
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

export type RegisterFormValue = {
	firstName: string;
	lastName: string;
	role: Role;
	username: string;
	password: string;
};

export const registerFormInitialState: RegisterFormValue = {
	username: '',
	password: '',
	role: 'user',
	firstName: '',
	lastName: '',
};
