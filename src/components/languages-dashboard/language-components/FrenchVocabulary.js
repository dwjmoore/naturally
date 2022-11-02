import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCheckOnDashboard from "../../../hooks/useCheckOnDashboard";

export default function FrenchVocabulary() {
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    return (
        <section className="textbook-page-wrapper">
            <div className="textbook-title-wrapper">
                <div className="textbook-title">«Le Français par la Méthode Nature»</div>
                <div className="textbook-subtitle">Les Mots</div>
            </div>
            <div key="1">
                <NavLink to='/french/vocabulary/1' state={1}>
                    <button>1. Les Duclos</button>
                </NavLink>
            </div>
        </section>
    )
}

/*
!!!Use the below code when additional chapters get loaded to the database.

const [chapters, setChapters] = useState([])
const [isLoading, setIsLoading] = useState(true);

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

<>
    {(isLoading) ? (
        <section className="loading">
            {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
        </section>
    ) : (
        <section className="textbook-page-wrapper">
            <div className="textbook-title-wrapper">
                <div className="textbook-title">«Le Français par la Méthode Nature»</div>
                <div className="textbook-subtitle">Les Mots</div>
            </div>
            {chapters.map((chapter) => (
                <div key={chapter.chapter}>
                    <NavLink to={`/french/vocabulary/${chapter.chapter}`} state={chapter.chapter}>
                        <button>{chapter.chapter}. {chapter.title}</button>
                    </NavLink>
                </div>
            ))}
        </section>
    )}
</>
*/