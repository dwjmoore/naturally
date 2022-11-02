import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useDashboardRedirect from "../hooks/useDashboardRedirect";

export default function LandingPage() {
    const redirect = useDashboardRedirect();

    useEffect (() => {
        redirect();
    }, [redirect]);

    return (
        <section className="landingpage-wrapper">
            <div className="welcome-landing">Welcome to</div>
            <div className="naturally-landing">Naturally</div>
            <p className="subtext-landing">Where you can learn languages via the <span className="natural-method-landing">Natural Method</span></p>
            <div className="buttons-landing">
                <NavLink to="/login">
                    <button className="button-login-register">Log In</button>
                </NavLink>
                <NavLink to="/register">
                    <button className="button-login-register">Register</button>
                </NavLink>
            </div>
        </section>
    );
};