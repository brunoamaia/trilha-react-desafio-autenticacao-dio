export interface IFormLogin {
    email: string;
    password: string;
    formState?: {
        errors: string;
        isValid: boolean;
    }
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}

export interface formStateTypes {
    errors: string;
    isValid: boolean;
}

