import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf({handleDissmis}) {
  const {toasts}= React.useContext(ToastContext);

    return ( 
        <ol
        className={styles.wrapper}
        role="region"
        aria-live="assertive"
        aria-label="Notification"
        >
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
