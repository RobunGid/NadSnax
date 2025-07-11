import { Role } from '../types';
import { JSX } from 'react';

type FormConfig = {
	name: keyof RegisterFormValue;
	placeholderKey: string;
} & JSX.IntrinsicElements['input'];

export const registerFormConfig: FormConfig[] = [
	{
		name: 'username',
		placeholderKey: 'authorization_modal.placeholder.username',
		required: true,
		autoComplete: 'username',
		minLength: 5,
	},
	{
		name: 'firstName',
		placeholderKey: 'authorization_modal.placeholder.first_name',
		required: true,
		autoComplete: 'name',
		minLength: 3,
	},
	{
		name: 'lastName',
		placeholderKey: 'authorization_modal.placeholder.last_name',
		autoComplete: 'name',
		minLength: 3,
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
