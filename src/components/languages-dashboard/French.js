import TextbookImage from "./images/french-0.JPG";
import VocabImage from "./images/french-vocab-0.JPG";
import ExercisesImage from "./images/french-exercises-0.JPG";
import { NavLink } from "react-router-dom";

export default function French () {
    return (
        <section className="language-page-wrapper">
            <div className="language-page-column">
                <NavLink to="/french/textbook">
                    <img
                        className="language-page-image"
                        src={TextbookImage}
                        alt="textbook"
                    />
                </NavLink>
                <div className="language-page-description">Le Livre</div>
            </div>
            <div className="language-page-column">
                <NavLink to="/french/vocabulary">
                    <img
                        className="language-page-image"
                        src={VocabImage}
                        alt="vocabulary"
                    />
                </NavLink>
                <div className="language-page-description">Les Mots</div>
            </div>
            <div className="language-page-column">
                <NavLink to="/french/exercises">
                    <img
                        className="language-page-image"
                        src={ExercisesImage}
                        alt="exercises"
                    />
                </NavLink>
                <div className="language-page-description">Les Exercices</div>
            </div>
        </section>
    );
};