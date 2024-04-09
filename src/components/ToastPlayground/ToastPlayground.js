import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast/Toast";

import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [toasts, setToasts] = React.useState([
       { 
        id: crypto.randomUUID(),
        message: 'Oh no!',
        variant: 'error'},
        { 
            id: crypto.randomUUID(),
            message: 'Logged in!',
            variant: 'success'},

    ]);
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

    function handleCreateToast(){
        const nextToasts = [
            ...toasts,
         {
            id: crypto.randomUUID(),
            message,
            variant,
         }
        ];
        setToasts(nextToasts);
    }

    function handleDissmis() {
  /*       setIsRendered(false) */
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf 
            toasts={toasts} 
            />

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>

                    <div const className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        {VARIANT_OPTIONS.map((option) => {
                            const id = `variant - ${option}`;
                            return (
                                <label key={id} htmlFor={id}>
                                    <input
                                        id={id}
                                        type="radio"
                                        name="variant"
                                        value={option}
                                        checked={option === variant}
                                        onChange={(event) => {
                                            setVariant(event.target.value);
                                        }}
                                    />
                                    {option}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        <Button
                            onClick={handleCreateToast}
                        >
                            Pop Toast!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
