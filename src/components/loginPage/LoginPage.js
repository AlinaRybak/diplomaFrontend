import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import axios from "axios"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LoginPage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        phoneNumber: "",
        confirmPassword: "",
    });

    const toggleMode = () => {
        setIsRegistering(!isRegistering);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegistering) {
            // Ви реєструєтеся
            const { name, email, phoneNumber, password, confirmPassword } = formData;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            try {
                // Відправка даних на сервер для реєстрації
                const response = await axios.post("/register", {
                    name,
                    email,
                    phoneNumber,
                    password,
                });
                // Обробка успішної реєстрації
                console.log("Registration successful:", response.data);

                // Перенаправлення на сторінку головню
                history.push("/");
            } catch (error) {
                // Обробка помилки реєстрації
                console.error("Registration failed:", error);
            }
        } else {
            // Ви увійшли
            const { email, password } = formData;

            try {
                // Відправка даних на сервер для входу
                const response = await axios.post("/login", {
                    email,
                    password,
                });
                // Обробка успішного входу
                console.log("Login successful:", response.data);

                // Перенаправлення на сторінку головню
                history.push("/");
            } catch (error) {
                // Обробка помилки входу
                console.error("Login failed:", error);
            }
        }
    };

    return (
        <div className="login-page">
            <h2 className="text-center mb-3 title-style">{isRegistering ? "Registration" : "Sign in"}</h2>
            <Form onSubmit={handleSubmit}>
                {isRegistering && (
                    <>
                        <Form.Group controlId="name">
                            <Form.Label className='form-style'>name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label className='form-style'>phone number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                required
                                pattern="[0-9]{10}"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </Form.Group>
                    </>
                )}
                <Form.Group controlId="email">
                    <Form.Label className='form-style'>email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className='form-style'>password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </Form.Group>
                {isRegistering && (
                    <Form.Group controlId="confirmPassword">
                        <Form.Label className='form-style'>confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </Form.Group>
                )}
                <Button className="mt-3" variant="success" type="submit">
                    {isRegistering ? "Registration" : "Sign in"}
                </Button>
            </Form>
                <p
            onClick={toggleMode}
            className={` mt-3 ${isRegistering ? "sign-in-text" : "register-now-text"}`}
                 >
            {isRegistering ? "Already have an account? Sign in!" : "Don't have an account? Register now!"}
                </p>
        </div>
    );
}

export default LoginPage;
