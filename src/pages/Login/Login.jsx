import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
    FiMail,
    FiLock,
    FiLogIn
} from "react-icons/fi";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setMessage("");
        setMessageType("");

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                setMessage(
                    data.message || "Invalid email or password."
                );

                setMessageType("error");

                return;
            }

            setMessage("Login successful!");
            setMessageType("success");

            setTimeout(() => {
                navigate("/");
            }, 600);

        } catch (error) {

            console.error("Login error:", error);

            setMessage(
                "Cannot connect to the server. Make sure the backend is running."
            );

            setMessageType("error");
        }
    };

    return (
        <main className="login-page">

            {message && (
                <div className={`login-message ${messageType}`}>

                    <div className="login-message-icon">
                        {messageType === "success" ? "✓" : "!"}
                    </div>

                    <div className="login-message-content">

                        <strong>
                            {messageType === "success"
                                ? "WELCOME BACK"
                                : "LOGIN ERROR"}
                        </strong>

                        <span>
                            {message}
                        </span>

                    </div>

                </div>
            )}

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

                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >

                    <div className="login-field">

                        <label>Email</label>

                        <div className="login-input">

                            <FiMail />

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
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
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        <FiLogIn />
                        LOGIN
                    </button>

                </form>

                <div className="login-footer">

                    <span>
                        Don't have an account?
                    </span>

                    <Link to="/signup">
                        SIGN UP
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default Login;