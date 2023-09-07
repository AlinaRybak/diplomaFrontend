import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isRegistering, setIsRegistering] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber" && (!value || /^\d+$/.test(value))) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (name !== "phoneNumber") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      if (formData.password === formData.confirmPassword) {
        setPasswordsMatch(true);

        try {
          const response = await axios.post("/users/register", formData);
          console.log("Відповідь від бекенду (реєстрація):", response.data);
        } catch (error) {
          console.error("Помилка реєстрації:", error);
        }
      } else {
        setPasswordsMatch(false);
      }
    } else {
      try {
        const response = await axios.post("/users/login", {
          username: formData.username,
          password: formData.password,
        });
        console.log("Відповідь від бекенду (вхід):", response.data);
      } catch (error) {
        console.error("Помилка входу:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {!isRegistering && (
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        )}
        {isRegistering && (
          <>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {isRegistering && (
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {!passwordsMatch && (
                <p className="text-danger">Passwords do not match.</p>
              )}
            </div>
          </>
        )}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            {isRegistering ? "Sign Up" : "Log In"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Log In" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;








