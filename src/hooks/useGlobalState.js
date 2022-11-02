import { useContext } from "react";
import GlobalStateContext from "../context/GlobalStateProvider";

export default function useGlobalState () {
    return useContext(GlobalStateContext);
};