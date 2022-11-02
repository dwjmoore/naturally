import { NavLink } from "react-router-dom";

export default function AdminHome () {
    return (
        <section className="admin-home-page-wrapper">
            <div className="admin-home-title">Welcome to the Admin homepage.</div>
            <div>
                <div className="admin-home-messages-wrapper">
                    <div>
                        Read messages submitted by users: 
                    </div>
                    <NavLink to="/admin-contact">
                        <button>Messages</button>
                    </NavLink>
                </div>
                <div className="admin-home-blog-wrapper">
                    <div>
                        Create blog posts: 
                    </div>
                    <NavLink to="/admin-blog">
                        <button>Blog</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};