import React from "react";
import styles from "./form.module.scss";
import {UIButton} from "../button/UIButton";
type TFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    isSending: boolean;
    sendingError: string | null;
    isValid: boolean | undefined;
    children: React.ReactNode;
}
export default function Form({...props}: TFormProps) {
    const {
        handleSubmit,
        name,
        isSending,
        sendingError,
        isValid,
        children
    } = props;
    return (
        <form className={styles.form} noValidate onSubmit={handleSubmit}>
            <h2 className={styles.title}>{name}</h2>
            {children}
            <UIButton
                // className={styles.button}
                type='submit'
                disabled={isSending || !isValid}
            >
                {isSending ? "Вход..." : "Войти"}
            </UIButton>
            {sendingError && (
                <span className={styles.send_error}>
                                    {`Ошибка: ${sendingError}`}
                </span>
            )}
        </form>
    )
}