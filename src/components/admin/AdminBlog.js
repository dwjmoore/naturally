import { useEffect, useState } from "react";
import axios from "../../api/axios";
import BlogModal from "../modals/BlogModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function AdminBlog () {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [blogModalIsOpen, setBlogModalIsOpen] = useState(false);

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

    const handleCreateBlogPost = () => {
        setBlogModalIsOpen(true);
    };

    const handleModalClose = () => {
        setBlogModalIsOpen(false);
    };

    const handleNewBlogSubmission = (blog) => {
        setBlogModalIsOpen(false);
        setBlogPosts([blog].concat(blogPosts));
    };

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
                ) : (
                <section>
                    <BlogModal
                        handleNewBlogSubmission={handleNewBlogSubmission}
                        modalIsOpen={blogModalIsOpen}
                        handleModalClose={handleModalClose}
                    />
                    <div className="blog-page-title">
                        <div>Welcome to the AdminBlog page!</div>
                        <button onClick={handleCreateBlogPost} className="admin-create-blog-btn">Create New Blog Post</button>
                    </div>
                </section>
                )
            }
        </>
    );
};