import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import useGlobalState from "../hooks/useGlobalState";
import useDashboardRedirect from "../hooks/useDashboardRedirect";

export default function LogIn() {
    const { setLoggedInStatus } = useGlobalState();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [errorMsg, setErrorMsg] = useState('');

    const redirect = useDashboardRedirect();

    useEffect (() => {
        redirect();
    }, [redirect]);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(
                "/login",
                user,
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then(() => {
                setLoggedInStatus("LOGGED_IN");
                setUser({
                    email:'',
                    password:''
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    setErrorMsg('The email address or password is incorrect.');
                } else if (!error?.request) {
                    setErrorMsg('No server response.')
                } else {
                    setErrorMsg('Log in failed.');
                }
            });
    }

    return (
        <section className="login-page-wrapper">
            <div>Log in to access your <span className="naturally-login">Naturally</span> account.</div>
            <div>{errorMsg}</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
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
                </div>
                <div className="buttons-login">
                    <button className="button-login-register" disabled={(user['email'] === '') || (user['password']) === '' ? true : false}>
                        Log in
                    </button>
                    <NavLink to="/register">
                        <button className="button-login-register">Register</button>
                    </NavLink>
                </div>
            </form>
        </section>
    );
}