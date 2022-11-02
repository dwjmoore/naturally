import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";
import useCheckOnDashboard from "../hooks/useCheckOnDashboard";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    useEffect(() => {
        axios
            .get("/blog/get")
            .then((response) => {
                setBlogPosts(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
            ) : (
                <section className="blog-page-wrapper">
                    <div className="blog-page-title">The <span className="naturally-blog">Naturally</span> Blog</div>
                    {blogPosts.map((post) => (
                        <div className="blog-posts-wrapper" key={post.blog_post_id}>
                            <NavLink className="blog-title" to={`/blog/${post.blog_post_id}`} state={post.blog_post_id}>
                                {post.title}
                            </NavLink>
                            <div className="blog-date">{post.date}</div>
                            <div className="blog-body">{parse(String(post.body))}</div>
                        </div>
                    ))}
                </section>
                )
            }

        </>
    );
};