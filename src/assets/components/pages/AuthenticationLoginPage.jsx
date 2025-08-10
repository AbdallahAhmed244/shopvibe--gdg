import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Authentication.css";

export default function AuthenticationLoginPage({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (handleLogin(email, password)) {
      setError("");
      navigate("/home");
    } else {
      setError("Please enter an email address");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login to ShopVibe</h2>
        {error && <div className="error">{error}</div>}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
