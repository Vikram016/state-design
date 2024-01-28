import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider ({children}) {
    const [current, setCurrentPath] = useState(window.location.pathname);

    useEffect (() => {
        const handler = () => {
       setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        return () => {
          window.removeEventListener('popstate', handler);
        };

    },[]);

    const navigate = (to) => {
        window.history.pushState({}, '',to);
        setCurrentPath(to);
    };

return (
    <NavigationContext.Provider value={{ current, navigate}}>
        {children}
    </NavigationContext.Provider>
);
};

export {NavigationProvider};
export default NavigationContext;