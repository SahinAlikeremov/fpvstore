import "./AccountMenu.css";

import { Link } from "react-router-dom";

import {
    FiLogIn,
    FiUserPlus
} from "react-icons/fi";

function AccountMenu({ isOpen, onClose }) {

    return (

        <div
            className={`account-menu ${
                isOpen ? "open" : ""
            }`}
        >

            <div className="account-menu-title">

                <span>
                    MY ACCOUNT
                </span>

            </div>

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

        </div>

    );
}

export default AccountMenu;