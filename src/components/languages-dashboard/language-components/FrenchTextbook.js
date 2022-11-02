import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import useCheckOnDashboard from "../../../hooks/useCheckOnDashboard";


export default function FrenchTextbook() {
    const [chapters, setChapters] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    useEffect(() => {
        axios
            .get("/textbook/french")
            .then((response) => {
                setChapters(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    },[])

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
            ) : (
                <section className="textbook-page-wrapper">
                    <div className="textbook-title-wrapper">
                        <div className="textbook-title">«Le Français par la Méthode Nature»</div>
                        <div className="textbook-subtitle">Le Livre</div>
                    </div>
                    {chapters.map((chapter) => (
                        <div key={chapter.chapter}>
                            <NavLink to={`/french/textbook/${chapter.chapter}`} state={chapter.chapter}>
                                <button>{chapter.chapter}. {chapter.title}</button>
                            </NavLink>
                        </div>
                    ))}
                </section>
            )}
        </>
    )
}