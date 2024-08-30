export const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{6,}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export type TFormValidators<T> = {
    [key in keyof T]: {
        validator: (value: string) => boolean,
        message: string

    }
}
const formValidators = {
    email: {
        validator: (value: string) => EMAIL_REGEX.test(value),
        message: "Укажите корректный email.",
    },
    password: {
        validator: (value: string) => PWD_REGEX.test(value),
        message: "Укажите пароль посложнее.",
    }
};
export default formValidators;