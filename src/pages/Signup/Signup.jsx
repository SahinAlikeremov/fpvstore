import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import {
    FiUser,
    FiMail,
    FiLock,
    FiUserPlus
} from "react-icons/fi";
import { useState } from "react";

function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        setMessage("");
        setMessageType("");

        if (password !== confirmPassword) {

            setMessage("Passwords do not match!");
            setMessageType("error");

            return;
        }

        try {

            const response = await fetch(
                "http://localhost:8080/api/auth/signup",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                setMessage(
                    data.message || "Signup failed!"
                );

                setMessageType("error");

                return;
            }

            setMessage(
                "Your account has been created successfully."
            );

            setMessageType("success");

            setTimeout(() => {
                navigate("/");
            }, 800);

        } catch (error) {

            console.error("Signup error:", error);

            setMessage(
                "Cannot connect to the server. Make sure the backend is running."
            );

            setMessageType("error");
        }
    };

    return (
        <main className="signup-page">

            {message && (
                <div className={`signup-message ${messageType}`}>

                    <div className="signup-message-icon">
                        {messageType === "success" ? "✓" : "!"}
                    </div>

                    <div className="signup-message-content">

                        <strong>
                            {messageType === "success"
                                ? "ACCOUNT CREATED"
                                : "SIGN UP ERROR"}
                        </strong>

                        <span>
                            {message}
                        </span>

                    </div>

                </div>
            )}

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

                <form
                    className="signup-form"
                    onSubmit={handleSignup}
                >

                    <div className="signup-field">

                        <label>Username</label>

                        <div className="signup-input">

                            <FiUser />

                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                required
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
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
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
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
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
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="signup-button"
                    >
                        <FiUserPlus />
                        CREATE ACCOUNT
                    </button>

                </form>

                <div className="signup-footer">

                    <span>
                        Already have an account?
                    </span>

                    <Link to="/login">
                        LOGIN
                    </Link>

                </div>

            </div>

        </main>
    );
}

export default Signup;