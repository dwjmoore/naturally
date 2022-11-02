import { createContext, useState } from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
    const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
    const [adminLoggedInStatus, setAdminLoggedInStatus] = useState("NOT_LOGGED_IN");
    const [language, setLanguage] = useState("NO_LANGUAGE");
    const [onDashboard, setOnDashboard] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <GlobalStateContext.Provider
            value={{
                loggedInStatus, setLoggedInStatus,
                adminLoggedInStatus, setAdminLoggedInStatus,
                language, setLanguage,
                onDashboard, setOnDashboard,
                isLoading, setIsLoading
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalStateContext;