import { useNavigate } from "react-router-dom";
import useLogInStatus from "../hooks/useLogInStatus";
import useGlobalState from "./useGlobalState";

export default function useDashboardRedirect () {
    const checkLogIn = useLogInStatus();
    const { loggedInStatus } = useGlobalState();
    const navigate = useNavigate();

    const redirect = () => {
        checkLogIn();

        if (loggedInStatus === "LOGGED_IN") {
            navigate("/dashboard");
        };
    };

    return redirect;
};