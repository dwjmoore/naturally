import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCheckOnDashboard from "../../../hooks/useCheckOnDashboard";

export default function FrenchExercises() {
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    return (
        <section className="textbook-page-wrapper">
            <div className="textbook-title-wrapper">
                <div className="textbook-title">«Le Français par la Méthode Nature»</div>
                <div className="textbook-subtitle">Les Exercices</div>
            </div>
            <div key="1">
                <NavLink to='/french/exercises/1' state={1}>
                    <button>1. Les Duclos</button>
                </NavLink>
            </div>
        </section>
    )
}