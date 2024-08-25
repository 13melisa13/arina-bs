import styles from './modal.module.scss';
import {createPortal} from "react-dom";
import React from "react";

type ModalProps = {
    children: React.ReactNode;
    onClick: () => void;
}
export default function Modal({ children, onClick }: ModalProps) {
    return createPortal(
        <dialog className={styles.modal} onClick={onClick}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </dialog>, document.getElementById("modal_root") as HTMLElement
    );

};