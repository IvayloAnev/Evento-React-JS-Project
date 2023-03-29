

export default function Login() {
    return (
        <>
            <div className="login">
                <section className="login-form-container">
                    <form action="/auth/login" method="POST">
                        <h3>Login</h3>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="box"
                            id="email"
                            defaultValue="mnbv@abv.bg"
                        />
                        <label>Password</label>
                        <input type="password" name="password" className="box" id="password" />
                        <input type="submit" defaultValue="Login" className="btn" />
                        <p>
                            Don't have an account ? <a href="/auth/register">Create one</a>
                        </p>
                    </form>
                </section>
              
            </div>
        </>
    )
}