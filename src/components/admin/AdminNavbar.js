import { Outlet, NavLink, useNavigate } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";

export default function AdminNavbar() {
    const navigate = useNavigate();
    const handleLogOut = useLogOut();

    const logOut = () => {
        handleLogOut();
        navigate("/login");
    };

    return (
        <main>
            <nav className="nav-wrapper">
                <div className="admin-nav-left-column">
                    <NavLink className="naturally-nav" to="/">
                        Naturally
                    </NavLink>
                </div>
                <div className="admin-nav-right-column post-auth-nav-btn-wrapper">
                    <NavLink to="/admin-home">
                        <button className="nav-btn">Home</button>
                    </NavLink>
                    <NavLink to="/admin-contact">
                        <button className="nav-btn">Messages</button>
                    </NavLink>
                    <NavLink to="/admin-blog">
                        <button className="nav-btn">Blog</button>
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
    );
};