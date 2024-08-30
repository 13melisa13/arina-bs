import styles from './modal.module.scss';
import {createPortal} from "react-dom";
import React, {useEffect, useRef} from "react";

type ModalProps = {
    children: React.ReactNode;
}
export default function Modal({ children }: ModalProps) {
    const modal = useRef<HTMLDialogElement>(null);



    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const onEscKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                modal.current?.close();
            }
        };
        document.addEventListener('keydown', onEscKeyDown);
        

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', onEscKeyDown);
        }
    });
    return createPortal(
        <dialog className={styles.modal} ref={modal} id={"modal"}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </dialog>, document.getElementById("modal_root") as HTMLElement
    );

};