import { useState } from "react";
import axios from "../../api/axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

import RichTextEditor from "../forms/RichTextEditor";

export default function AdminBlogForm (props) {
    const [blogPost, setBlogPost] = useState({
        title: '',
        body: '',
        image: '',
        image_url: ''
    });

    const handleRichTextEditorChange = (body) => {
        setBlogPost(previousState => {
            return { ...previousState, body: body }
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post(
                "/blog/insert",
                blogPost,
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then((response) => {
                props.handleFormSubmission(response.data);
                setBlogPost({
                    title: '',
                    body:'',
                    image:'',
                    image_url: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const componentConfig = () => {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        };
    };

    const djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        };
    };

    const handleImageDrop = () => {
        return {
            addedfile: file => setBlogPost(previousState => {
                return { ...previousState, image: file }
            })
        };
    };

    return (
        <section className="blog-form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={blogPost['title']}
                    onChange={(event) => setBlogPost(previousState => {
                        return { ...previousState, title: event.target.value }
                    })}
                    placeholder="Blog Title"
                    required
                />

                <div>
                    <RichTextEditor 
                        handleRichTextEditorChange={handleRichTextEditorChange}
                    />
                </div>

                <div className="image-uploaders">
                        <DropzoneComponent
                            config={componentConfig()}
                            djsConfig={djsConfig()}
                            eventHandlers={handleImageDrop()}
                        >
                            <div className="dz-message">Blog-post Image</div>
                        </DropzoneComponent>
                </div>

                <input
                    type="text"
                    value={blogPost['image_url']}
                    onChange={(event) => setBlogPost(previousState => {
                        return { ...previousState, image_url: event.target.value }
                    })}
                    placeholder="Image URL"
                />

                <button>Save</button>
            </form>
        </section>
    );
};