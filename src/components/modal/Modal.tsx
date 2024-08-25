import styles from './modal.module.scss';
import {createPortal} from "react-dom";
import React from "react";

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
}
export default function Modal({ children, onClose }: ModalProps) {
    return createPortal(
        <dialog className={styles.modal} onClose={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </dialog>, document.getElementById("modal_root") as HTMLElement
    );

};