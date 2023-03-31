import styles from './register.module.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <section className={styles["register-form-container"]}>
            <form id="register" method="post" onSubmit={onSubmit}>
                <h3>Register</h3>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ivan@email.com"
                    className={styles["box"]}
                    value={values.email}
                    onChange={changeHandler}
                />


                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    className={styles["box"]}
                    value={values.password}
                    onChange={changeHandler}
                />

                <label>Confirm Password</label>
                <input 
                type="password" 
                name="confirmPassword" 
                className={styles["box"]} 
                id="confirm-password"
                value={values.confirmPassword}
                onChange={changeHandler}
                />

                <input type="submit" value="Register" className={styles["btn"]} />
                <p>
                    Have an account ? <Link to="/login">Click here</Link>
                </p>
            </form>
        </section>
    )
}
