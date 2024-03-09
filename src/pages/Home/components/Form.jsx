import React from "react";
import { useForm } from "react-hook-form";
import Map from "./Map";
import styles from "./Form.module.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <h1 className={styles.title}>Запись</h1>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                type="text"
                                className="name"
                                placeholder="Полное имя"
                                {...register("name", {
                                    required: "Необходимо ввести имя",
                                    maxLength: 20,
                                })}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Необходимо ввести email",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            <textarea
                                className={styles.message}
                                type="text"
                                maxLength={400}
                                placeholder="Текст сообщения..."
                                {...register("message", {})}
                            ></textarea>
                            <input
                                className={styles.submit}
                                type="submit"
                                value={"Отправить"}
                            />
                        </form>
                    </div>
                    <div className={styles.block}>
                        <h1 className={styles.title}>Контактная информация</h1>
                        <Map />
                        <ul className={styles.contacts}>
                            <li>
                                <span className="address">
                                    <strong>Адрес: &nbsp;</strong>
                                    Москва, ул. Любая, дом 9, подъезд 2
                                </span>
                            </li>
                            <li>
                                <span className="phone">
                                    <strong>Телефон: &nbsp;</strong>
                                    +7 (926)206-11-22
                                </span>
                            </li>
                            <li>
                                <span className="email">
                                    <strong>Email: &nbsp;</strong>
                                    example@list.ru
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
