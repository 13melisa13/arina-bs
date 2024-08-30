import {ForwardedRef, InputHTMLAttributes} from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputRef?: ForwardedRef<HTMLInputElement>,
    error?: string,
    value?: string
    className?: string
}
export const Input = (
    {
        inputRef,
        error = "",
        value = "",
        className = undefined,
        ...props
    }: InputProps
) => {
    return (
        <label className={styles.label}>
            <input
                            className={className}
                            ref={inputRef}
                            {...props}
                            value={value}
            />
            <span className={styles.error}>
                {error || ""}
            </span>
        </label>
    )
};