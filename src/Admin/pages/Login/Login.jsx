import "./Login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);

    function handleLogin() {
        if (isLoading) return;

        if (!username.trim() || !password.trim()) {
            setError("Please enter username and password");
            return;
        }

        if (username.trim().length < 3) {
            setError("Username must be at least 3 characters");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        setError("");
        setIsLoading(true);

        setTimeout(() => {
            if (
                username.trim() === "admin" &&
                password === "kuccps2025"
            ) {
                setIsLoggedIn(true);
                navigate("/admin/dashboard");
            } else {
                setError("Invalid username or password");
            }

            setIsLoading(false);
        }, 1000);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2>Admin Login</h2>
                <p>Login to continue to KUCCPS Admin Portal</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        minLength={3}
                        maxLength={30}
                        autoComplete="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setError("");
                        }}
                    />

                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            minLength={8}
                            maxLength={100}
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                        />

                        <button
                            type="button"
                            className="toggle-password"
                            aria-label="Toggle password visibility"
                            onClick={() =>
                                setShowPassword((prev) => !prev)
                            }
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={
                            !username.trim() ||
                            !password.trim() ||
                            isLoading
                        }
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}
                </form>
            </div>

            <img
                src="/kuccps-logo.png"
                alt="KUCCPS"
                 className="login-logo"
            />

            <div className="login-footer">
                 © 2026 KUCCPS Admin Portal
            </div>
        </div>
    );
}

export default Login;