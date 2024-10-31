import { useState } from "react";
import styles from "../styles/form.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PropsForm } from "../types";

const schema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup
        .string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
});

const Form = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

    const [selected, setSeleted] = useState<boolean>(false);

    const onsubmit: SubmitHandler<PropsForm> = (data) => {
        const dataSend = {
            ...data,
            check: selected,
        };
        console.log(dataSend);
    };

    return (
        <form className={styles.containerForm} onSubmit={handleSubmit(onsubmit)}>
            <div className={styles.containerInputs}>
                <div className={styles.group}>
                    <label className={styles.labelText} htmlFor="name">
                        Nombre:
                    </label>

                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                className={styles.customInput}
                                alt="Campo para ingresar tu nombre"
                                type="text"
                                placeholder="Escribe tu nombre completo"
                                {...field}
                            />
                        )}
                    />
                    {errors.name && (
                        <p className={styles.textError}>{errors.name.message}</p>
                    )}
                </div>
                <div className={styles.group}>
                    <label className={styles.labelText} htmlFor="email">
                        Email:
                    </label>

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                className={styles.customInput}
                                alt="Campo para ingresar tu email"
                                type="email"
                                placeholder="Escribe tu email"
                                {...field}
                            />
                        )}
                    />
                    {errors.email && (
                        <p className={styles.textError}>{errors.email.message}</p>
                    )}
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
