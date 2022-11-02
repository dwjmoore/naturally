import axios from "../api/axios";
import useGlobalState from "./useGlobalState";

export default function useLanguageStatus() {
    const { setLanguage, setIsLoading } = useGlobalState();

    const checkLanguage = () => {
        axios
            .get(
                "/check-language",
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then((response) => {
                setLanguage(response.data.language);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    return checkLanguage;
};