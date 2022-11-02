import axios from "../api/axios";
import useGlobalState from "./useGlobalState";

export default function useLogOut () {
    const { setLoggedInStatus } = useGlobalState();

    const handleLogOut = () => {
        axios
            .get(
                "/logout",
                {
                    withCredentials: true
                }
            )
            .then(() => {
                setLoggedInStatus("NOT_LOGGED_IN");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    return handleLogOut;
};