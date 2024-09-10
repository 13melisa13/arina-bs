import styles from './modal.module.scss';
import {createPortal} from "react-dom";
import React, {useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";

type ModalProps = {
    children: React.ReactNode;
}
export default function Modal({ children }: ModalProps) {
    const modal = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate()
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            navigate(-1);
        }
    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyDown);
        }
    });
    return createPortal(
        <dialog className={styles.modal} ref={modal} id={"modal"} onClick={() => navigate(-1)}>

            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
                <div  onClick={() => navigate(-1)}>
                    <div className={styles.close}></div>
                </div>
            </div>

        </dialog>, document.getElementById("modal_root") as HTMLElement
    );

};