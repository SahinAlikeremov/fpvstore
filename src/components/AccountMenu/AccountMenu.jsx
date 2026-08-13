import "./AccountMenu.css";

import {
    FiLogIn,
    FiUserPlus,
    FiUser,
    FiLogOut
} from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AccountMenu({ isOpen, onClose }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {

        if (!isOpen) return;

        fetch("http://localhost:8080/api/auth/me", {
            credentials: "include"
        })
            .then(async (response) => {

                if (!response.ok) {
                    setUser(null);
                    return;
                }

                const data = await response.json();
                setUser(data);

            })
            .catch(() => {
                setUser(null);
            });

    }, [isOpen]);

    const handleLogout = async () => {

        try {

            await fetch(
                "http://localhost:8080/api/auth/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            );

        } catch (error) {
            console.error(error);
        }

        setUser(null);
        onClose();
        navigate("/");
    };

    return (

        <div className={`account-menu ${isOpen ? "open" : ""}`}>

            <div className="account-menu-header">

                <span className="account-menu-label">
                    MY ACCOUNT
                </span>

            </div>

            {user ? (

                <>

                    <div className="account-user">

                        <div className="account-user-icon">
                            <FiUser />
                        </div>

                        <div className="account-user-info">

                            <strong>
                                {user.username}
                            </strong>

                            <span>
                                {user.email}
                            </span>

                        </div>

                    </div>

                    <div className="account-menu-divider" />

                    <Link
                        to="/account"
                        className="account-menu-item"
                        onClick={onClose}
                    >

                        <FiUser />

                        <span>
                            MY ACCOUNT
                        </span>

                    </Link>

                    <button
                        className="account-menu-item logout"
                        onClick={handleLogout}
                    >

                        <FiLogOut />

                        <span>
                            LOG OUT
                        </span>

                    </button>

                </>

            ) : (

                <>

                    <Link
                        to="/login"
                        className="account-menu-item"
                        onClick={onClose}
                    >

                        <FiLogIn />

                        <span>
                            LOGIN
                        </span>

                    </Link>

                    <Link
                        to="/signup"
                        className="account-menu-item"
                        onClick={onClose}
                    >

                        <FiUserPlus />

                        <span>
                            SIGN UP
                        </span>

                    </Link>

                </>

            )}

        </div>

    );
}

export default AccountMenu;