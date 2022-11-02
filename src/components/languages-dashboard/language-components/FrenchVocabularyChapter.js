import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";


export default function FrenchVocabularyChapter() {
    const [vocab, setVocab] = useState([]);

    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        axios
            .get(`/vocab/french/${id}`)
            .then((response) => {
                setVocab(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    return (
        <section className="vocabulary-page-wrapper">
            <div className="vocabulary-page-title">Les Duclos</div>
            {vocab.map((word) => (
                <div key={word.vocab_id}>
                    {word.word}
                </div>
            ))}
        </section>
    );
};