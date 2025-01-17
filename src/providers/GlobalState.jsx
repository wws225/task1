import React , { createContext, useState } from "react"; { createContext }

export const GlobalContext = createContext([]);
export const InputProvider = (props) => {
    const { children } = props
    const [title, setTitle] = useState("")
    const [time, setTime] = useState(0)
    const [reload, setReload] = useState(false)
    return (
        <GlobalContext.Provider
            value={{
                title, setTitle,
                time, setTime,
                reload,setReload
            }}>
            {children}
        </GlobalContext.Provider>
    );
};
