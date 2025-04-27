type FormConfig = {
	name: keyof LoginFormValue;
} & JSX.IntrinsicElements['input'];

export const loginFormConfig: FormConfig[] = [
	{
		name: 'username',
		placeholder: 'Username',
		required: true,
	},
	{
		name: 'password',
		placeholder: 'Password',
		required: true,
		type: 'password',
		minLength: 4,
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
