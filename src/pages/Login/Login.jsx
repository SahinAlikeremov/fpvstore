import "./Login.css";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

function Login() {
    return (
        <main className="login-page">

            <div className="login-container">

                <div className="login-header">
                    <span>WELCOME BACK</span>
                    <h1>
                        LOGIN <strong>ACCOUNT</strong>
                    </h1>
                    <p>
                        Login to continue to your FPVStore account.
                    </p>
                </div>

                <form className="login-form">

                    <div className="login-field">
                        <label>Email</label>

                        <div className="login-input">
                            <FiMail />

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="login-field">
                        <label>Password</label>

                        <div className="login-input">
                            <FiLock />

                            <input
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-button">
                        <FiLogIn />
                        LOGIN
                    </button>

                </form>

                <div className="login-footer">
                    <span>Don't have an account?</span>
                    <Link to="/signup">
                        SIGN UP
                    </Link>
                </div>

            </div>

        </main>
    );
}

export default Login;