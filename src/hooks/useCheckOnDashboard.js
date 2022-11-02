import { useLocation } from "react-router-dom";
import useGlobalState from "./useGlobalState";

export default function useCheckOnDashboard () {
    const { setOnDashboard } = useGlobalState();
    const location = useLocation();

    const checkOnDashboard = () => {
        const pathname = location.pathname;
        
        if (pathname === "/dashboard") {
            setOnDashboard(true);
        } else {
            setOnDashboard(false);
        };
    };

    return checkOnDashboard;
};