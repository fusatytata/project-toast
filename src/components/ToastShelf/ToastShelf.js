import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({toasts, handleDissmis}) {
    return ( 
            <ol className={styles.wrapper}>
            {toasts.map((toast) => 
                (<li key={toast.id} className={styles.toastWrapper}>
                    <Toast 
                    id={toast.id}
                    variant={toast.variant}
                    handleDissmis={handleDissmis}
                    >{toast.message}
                    </Toast>
                </li>) /* Proč jsou za "toast.map((toast)=>" kulaté závorky a ne složené?? */
            )}
        </ol>
    );
}

export default ToastShelf;
