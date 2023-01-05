import { useState } from "react";
import axios from "../api/axios";
import useGlobalState from "../hooks/useGlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const { setLanguage } = useGlobalState();

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleLanguage = (event) => {
        setOpen(!open);
        const language = event.target.value
        setLanguage(language);

        axios
            .put(
                "/set-language",
                {
                    "language": language
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            .then(() => {
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div>
            <div className="dropdown">
                <button onClick={handleOpen}>
                    {<FontAwesomeIcon icon={faCaretDown} className={!open ? "fa-rotate-270" : "fa-rotate-0"} />} Language
                </button>
            </div>
            {open ? (
                <div className="menu">
                    <div>
                        <button onClick={handleLanguage} value={"French"}>French</button>
                    </div>
                    <div>
                        <button onClick={handleLanguage} value={"German"}>German</button>
                    </div>
                    <div>
                        <button onClick={handleLanguage} value={"Italian"}>Italian</button>
                    </div>
                    <div>
                        <button onClick={handleLanguage} value={"Spanish"}>Spanish</button>
                    </div>
                </div>
            ) : (
                null
            )}
        </div>

    );
};