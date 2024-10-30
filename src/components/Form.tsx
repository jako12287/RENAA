import { useState } from "react";
import styles from "../styles/form.module.css";
const Form = () => {
    const [selected, setSeleted] = useState<boolean>(false)
    return (

        <form className={styles.containerForm}>
            <div className={styles.containerInputs}>

                <div className={styles.group}>
                    <label className={styles.labelText} htmlFor="name">Nombre:</label>
                    <input className={styles.customInput} type="text" id="name" name="name" required />
                </div>
                <div className={styles.group}>
                    <label className={styles.labelText} htmlFor="email">Email:</label>
                    <input className={styles.customInput} type="email" id="email" name="email" required />
                </div>
            </div>
            <div className={styles.containerDown}>
                <div className={styles.checkbox} onClick={() => setSeleted(!selected)}>
                    <div className={selected ? styles.circleInt : styles.displayNone} />
                </div>
                <h6 className={styles.subText} onClick={() => setSeleted(!selected)}>
                    Quiero recibir más información sobre RENAA cuando esté disponible
                </h6>
            </div>
            <button className={styles.btnSubmit}>Registra tu interés</button>
        </form>

    );
};

export default Form;
