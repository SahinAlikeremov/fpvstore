import "./Signup.css";
import { Link } from "react-router-dom";
import {
    FiUser,
    FiMail,
    FiLock,
    FiUserPlus
} from "react-icons/fi";

function Signup() {
    return (
        <main className="signup-page">

            <div className="signup-container">

                <div className="signup-header">
                    <span>JOIN FPVSTORE</span>

                    <h1>
                        CREATE <strong>ACCOUNT</strong>
                    </h1>

                    <p>
                        Create your account and start building your FPV setup.
                    </p>
                </div>

                <form className="signup-form">

                    <div className="signup-field">
                        <label>Username</label>

                        <div className="signup-input">
                            <FiUser />

                            <input
                                type="text"
                                placeholder="Enter your username"
                            />
                        </div>
                    </div>

                    <div className="signup-field">
                        <label>Email</label>

                        <div className="signup-input">
                            <FiMail />

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="signup-field">
                        <label>Password</label>

                        <div className="signup-input">
                            <FiLock />

                            <input
                                type="password"
                                placeholder="Create a password"
                            />
                        </div>
                    </div>

                    <div className="signup-field">
                        <label>Confirm Password</label>

                        <div className="signup-input">
                            <FiLock />

                            <input
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>

                    <button type="submit" className="signup-button">
                        <FiUserPlus />
                        CREATE ACCOUNT
                    </button>

                </form>

                <div className="signup-footer">
                    <span>Already have an account?</span>

                    <Link to="/login">
                        LOGIN
                    </Link>
                </div>

            </div>

        </main>
    );
}

export default Signup;