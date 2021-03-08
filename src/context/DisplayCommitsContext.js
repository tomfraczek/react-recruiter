import {createContext} from "react";

const DisplayCommitsContext = createContext({
    display: false,
    setDisplay: () => {}
});

export default DisplayCommitsContext;