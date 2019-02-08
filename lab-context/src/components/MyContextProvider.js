import React, {useEffect, useState} from "react";

export const MyContext = React.createContext(null);

export const MyContextProvider = ({children}) => {

    const [ctx, setCtx] = useState(null);

    useEffect(() => {
        console.log("MyContextProvider.useEffect", ctx);
        if (!ctx) setCtx("yolo " + new Date().getTime());
    });

    console.log("MyContextProvider", ctx);

    return (
        <MyContext.Provider value={ctx}>{children}</MyContext.Provider>
    );

};
