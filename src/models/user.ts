export default interface User {
	uuid: string;
	firstName?: string;
	lastName?: string;
	password?: string;
	passwordConfirm?: string;
	email?: string;
}
