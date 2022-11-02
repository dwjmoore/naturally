import { Outlet, NavLink, useNavigate } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import useLogOut from "../hooks/useLogOut";
import Dropdown from "./Dropdown";

export default function Navbar() {
    const { loggedInStatus, onDashboard } = useGlobalState();
    const navigate = useNavigate();
    const handleLogOut = useLogOut();

    const logOut = () => {
        handleLogOut();
        navigate("/login");
    };

    return (
        <>
            { loggedInStatus === "NOT_LOGGED_IN" ? (
                <main>
                    <nav className="nav-wrapper">
                        <div>
                            <NavLink className="naturally-nav" to="/">
                                Naturally
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/login">
                                <button className="nav-btn">Log In</button>
                            </NavLink>
                            <NavLink to="/register">
                                <button className="nav-btn">Register</button>
                            </NavLink>
                            <NavLink to="/blog">
                                <button className="nav-btn">Blog</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button className="nav-btn">Contact</button>
                            </NavLink>
                            <NavLink to="/about">
                                <button className="nav-btn">About</button>
                            </NavLink>
                        </div>
                    </nav>

                    <Outlet />
                </main>
            ) : (onDashboard) ? (
                <main>
                    <nav className="nav-wrapper">
                        <div>
                            <NavLink className="naturally-nav" to="/">
                                Naturally
                            </NavLink>
                        </div>
                        <div className="post-auth-nav-btn-wrapper">
                            <div className="nav-dropdown">
                                <Dropdown />
                            </div>
                            <NavLink to="/dashboard">
                                <button className="nav-btn">Dashboard</button>
                            </NavLink>
                            <NavLink to="/blog">
                                <button className="nav-btn">Blog</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button className="nav-btn">Contact</button>
                            </NavLink>
                            <NavLink to="/about">
                                <button className="nav-btn">About</button>
                            </NavLink>
                            <div>
                                <button onClick={logOut} className="nav-btn">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </main>
            ) : (
                <main>
                    <nav className="nav-wrapper">
                        <div>
                            <NavLink className="naturally-nav" to="/">
                                Naturally
                            </NavLink>
                        </div>
                        <div className="post-auth-nav-btn-wrapper">
                            <NavLink to="/dashboard">
                                <button className="nav-btn">Dashboard</button>
                            </NavLink>
                            <NavLink to="/blog">
                                <button className="nav-btn">Blog</button>
                            </NavLink>
                            <NavLink to="/contact">
                                <button className="nav-btn">Contact</button>
                            </NavLink>
                            <NavLink to="/about">
                                <button className="nav-btn">About</button>
                            </NavLink>
                            <div>
                                <button onClick={logOut} className="nav-btn">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </nav>

                    <Outlet />
                </main>

            )}
        </>   
    );
};