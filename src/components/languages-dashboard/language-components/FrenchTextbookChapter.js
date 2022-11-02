import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import parse from "html-react-parser";

export default function FrenchTextbookChapter() {
    const [chapter, setChapter] = useState([]);

    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        axios
            .get(`/textbook/french/${id}`)
            .then((response) => {
                setChapter(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    return (
        <section className="chapter-page-wrapper">
            <div className="chapter-title">{chapter.title}</div>
            <iframe
                width="560"
                height="315"
                src={chapter.link}
                title="YouTube video player"
                frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
            <div className="chapter-text">{parse(String(chapter.text))}</div>
        </section>
    );
};