import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faSpinner } from "@fortawesome/free-solid-svg-icons";


export default function FrenchExercisesChapter () {
    const [exercise, setExercise] = useState();
    const [userResponse, setUserResponse] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showAnswer, setShowAnswer] = useState(false);

    const location = useLocation();
    const id = location.state;

    useEffect(() => {
        axios
            .get(`/exercises/fill-in-blank/french/${id}`)
            .then((response) => {
                setExercise(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAnswer(true);
    };

    const handleToNextExercise = () => {
        setUserResponse('');
        axios
            .get(`/exercises/fill-in-blank/french/${id}`)
            .then((response) => {
                setExercise(response.data);
                setShowAnswer(false);
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
            ) : (
                showAnswer
            ) ? (
                <section className="exercises-page-wrapper">
                    <div className="exercises-page-title">Les Duclos</div>
                    <div className="question-wrapper">
                        <div>
                            {exercise.sentence_front}
                        </div>
                        <input
                            className="exercises-input-field"
                            type="text"
                            autoComplete="off"
                            onChange={(event) => setUserResponse(event.target.value)}
                            value={userResponse}
                        />
                        <div>
                            {exercise.sentence_back}
                        </div>
                    </div>
                    <div className="answer-sentence-wrapper">
                        {exercise.sentence_front} {exercise.answer} {exercise.sentence_back}
                    </div>
                    <FontAwesomeIcon className="fa-2xl icon-next-question" onClick={handleToNextExercise}  icon={faForward} />
                </section>
            ) : (
                <form className="exercises-page-wrapper" onSubmit={handleSubmit}>
                    <div className="exercises-page-title">Les Duclos</div>
                    <div className="question-wrapper">
                        <div>
                            {exercise.sentence_front}
                        </div>
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(event) => setUserResponse(event.target.value)}
                            value={userResponse}
                        />
                        <div>
                            {exercise.sentence_back}
                        </div>
                    </div>
                    <button>Soumettre</button>
                </form>
            )}
        </>
    );
};