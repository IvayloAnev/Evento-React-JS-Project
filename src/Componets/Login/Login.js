import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../../contexts/AuthContext";
import {useForm} from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login() {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <>
            <div className="login-form-container">
                <section className="login-form-container">
                    <form id="login" method="POST" onSubmit={onSubmit}>
                        <h3>Login</h3>
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="mnbv@abv.bg"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler}
                            className="box"
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            name={LoginFormKeys.Password}
                            value={values[LoginFormKeys.Password]}
                            onChange={changeHandler}
                            className="box"
                        />
                        <input type="submit"  className="btn" value="Login" />
                        <p>
                            Don't have an account ? <Link to="/register">Create one</Link>
                        </p>
                    </form>
                </section>

            </div>
        </>
    );
}