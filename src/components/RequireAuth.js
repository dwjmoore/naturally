import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useGlobalState from "../hooks/useGlobalState";
import useLogInStatus from "../hooks/useLogInStatus";

export default function RequireAuth () {
    const { loggedInStatus, isLoading } = useGlobalState();
    const location = useLocation();
    const checkLogIn = useLogInStatus();

    useEffect(() => {
        checkLogIn();
    }, [checkLogIn]);

    return (
        <>
            { (isLoading) ? 
                (
                    <section className="loading">
                        {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                    </section>
                )
                : loggedInStatus === "LOGGED_IN"
                    ? <Outlet />
                    : <Navigate to="/login" state={{ from: location }} replace />
            }
        </>
    );
};