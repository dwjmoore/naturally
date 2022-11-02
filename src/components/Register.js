import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";
import useDashboardRedirect from "../hooks/useDashboardRedirect";

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /^.{8,24}$/;

export default function Register() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [matchPassword, setMatchPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const redirect = useDashboardRedirect();

    useEffect (() => {
        redirect();
    }, [redirect]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const validEmail = emailRegex.test(user['email']);
        const validPassword = passwordRegex.test(user['password']);

        if (!validEmail) {
            setErrorMsg("Enter a valid email.");
            return;
        }
        if (!validPassword) {
            setErrorMsg("Enter a valid password.");
            return;
        }

        axios
            .post(
                "/register",
                user,
                {headers: { "Content-Type": "application/json" }}
            )
            .then(() => {
                setSuccess(true);
                setUser({
                    email:'',
                    password:''
                });
                setMatchPassword('');
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    setErrorMsg('Email already registered.');
                } else if (!error?.request) {
                    setErrorMsg('No server response.')
                } else {
                    setErrorMsg('Registration failed.');
                }
            });
    }
    
    return (
        <>
            {success ? (
                <section className="register-page-wrapper">
                    <div>Your <span className="naturally-register">Naturally</span> account has been created!</div>
                    <NavLink to="/login">
                        <button className="button-login-register-created">Log In</button>
                    </NavLink>
                </section>
            ) : (
                <section className="register-page-wrapper">
                    <div>Create a new <span className="naturally-register">Naturally</span> account.</div>
                    <div>{errorMsg}</div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Email
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                onChange={(event) => setUser(previousState => {
                                    return { ...previousState, email: event.target.value }
                                })}
                                value={user['email']}
                                required
                            />
                        </div>
                        <div>
                            <label>
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={(event) => setUser(previousState => {
                                    return { ...previousState, password: event.target.value }
                                })}
                                value={user['password']}
                                required
                            />
                            <div className="pwd-regex">
                                Password must be 8 to 24 characters
                            </div>
                        </div>
                        <div>
                            <label>
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                onChange={(event) => setMatchPassword(event.target.value)}
                                value={matchPassword}
                                required
                            />
                        </div>
                        <div className="buttons-register">
                            <button className="button-login-register" disabled={(user['email'] !== '') && (user['password'] !== '') && (matchPassword === user['password']) ? false : true}>
                                Register
                            </button>
                            <NavLink to="/login">
                                <button className="button-login-register">Log In</button>
                            </NavLink>
                        </div>
                    </form>
                </section>
            )}
        </>
    );
};