import axios from "../api/axios";
import useGlobalState from "./useGlobalState";

export default function useLogInStatus() {
    const { loggedInStatus, setLoggedInStatus, setIsLoading } = useGlobalState();

    const checkLogIn = () => {
        axios
            .get(
                "/logged-in",
                {   
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then((response) => {
                const logged_in = response.data.logged_in;

                if (logged_in && loggedInStatus === "LOGGED_IN") {
                    setIsLoading(false);
                    return loggedInStatus;
                };
                if (logged_in && loggedInStatus === "NOT_LOGGED_IN") {
                    setLoggedInStatus("LOGGED_IN");
                    setIsLoading(false);
                    return loggedInStatus;
                };
                if (!logged_in && loggedInStatus === "LOGGED_IN") {
                    setLoggedInStatus("NOT_LOGGED_IN");
                    setIsLoading(false);
                    return loggedInStatus;
                };
                if (!logged_in && loggedInStatus === "NOT_LOGGED_IN") {
                    setIsLoading(false);
                    return loggedInStatus;
                };
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    return checkLogIn;
};