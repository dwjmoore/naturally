import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useGlobalState from "../../hooks/useGlobalState";

export default function AdminAuth () {
    const [isLoading, setIsLoading] = useState(true);
    const { adminLoggedInStatus, setAdminLoggedInStatus } = useGlobalState();

    useEffect(() => {
        axios
            .get(
                "/admin",
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then((response) => {
                const auth = response.data.auth;

                if (auth && adminLoggedInStatus === "LOGGED_IN") {
                    setIsLoading(false);
                    return adminLoggedInStatus;
                };
                if (auth && adminLoggedInStatus === "NOT_LOGGED_IN") {
                    setAdminLoggedInStatus("LOGGED_IN");
                    setIsLoading(false);
                    return adminLoggedInStatus;
                };
                if (!auth && adminLoggedInStatus === "LOGGED_IN") {
                    setAdminLoggedInStatus("NOT_LOGGED_IN");
                    setIsLoading(false);
                    return adminLoggedInStatus;
                };
                if (!auth && adminLoggedInStatus === "NOT_LOGGED_IN") {
                    setIsLoading(false);
                    return adminLoggedInStatus;
                };
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }, [adminLoggedInStatus, setAdminLoggedInStatus]);

    return (
        <>
            { (isLoading) ?
                (
                    <section className="loading">
                        {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                    </section>
                )
                : adminLoggedInStatus === "LOGGED_IN"
                    ? <Outlet />
                    : <Navigate to="*" />
            }
        </>
    );
};