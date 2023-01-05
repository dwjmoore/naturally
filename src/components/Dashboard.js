import { useEffect } from "react";
import useGlobalState from "../hooks/useGlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useCheckOnDashboard from "../hooks/useCheckOnDashboard";
import useLanguageStatus from "../hooks/useLanguageStatus";

import French from "./languages-dashboard/French";
import German from "./languages-dashboard/German";
import Italian from "./languages-dashboard/Italian";
import Spanish from "./languages-dashboard/Spanish";

export default function Dashboard() {
    const { language, isLoading } = useGlobalState();
    const checkOnDashboard = useCheckOnDashboard();
    const checkLanguage = useLanguageStatus();

    useEffect(() => {
        checkOnDashboard();
        checkLanguage();
    }, [checkOnDashboard, checkLanguage]);

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
            ) : (
                language === "NO_LANGUAGE"
            ) ? (
                <section className="dashboard-wrapper">
                    <div>Welcome to your Naturally dashboard!</div>
                    <div>Select the language you would like to learn from the dropdown menu.</div>
                </section>
            ) : (
                language === "French"
            ) ? (
                <section className="dashboard-wrapper">
                    <French />
                </section>
            ) : (
                language === "German"
            ) ? (
                <section className="dashboard-wrapper">
                    <German />
                </section>
            ) : (
                language === "Italian"
            ) ? (
                <section className="dashboard-wrapper">
                    <Italian />
                </section>
            ) : (
                language === "Spanish"
            ) ? (
                <section className="dashboard-wrapper">
                    <Spanish />
                </section>
            ) : (
                null
            )
            }
        </>
    );
};