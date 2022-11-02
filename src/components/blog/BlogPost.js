import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import axios from "../../api/axios";
import parse from "html-react-parser";

export default function BlogPost () {
    const [blogPost, setBlogPost] = useState([]);

    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        axios
            .get(`/blog/get/${id}`)
            .then((response) => {
                setBlogPost(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    return (
        <section className="blog-post-wrapper">
            <div className="blog-post-title">{blogPost.title}</div>
            <div className="blog-post-date">{blogPost.date}</div>
            <div className="blog-post-image-wrapper">
                <img className="blog-post-image"
                    src={blogPost.image}
                    alt="mountain"
                />
                { (blogPost.image_url) ? (
                    <div className="image-attribution">
                        Photo from <a href={blogPost.image_url} target="_blank" rel="noreferrer">Unsplash</a>
                    </div>
                ) : (
                    null
                )}
            </div>
            <div className="blog-post-body">{parse(String(blogPost.body))}</div>
        </section>
    );
}