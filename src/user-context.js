import React, {useState} from 'react';

export const UserContext = React.createContext();
export const ContextWrapper = (props) => {

    const defaultValueHandler = () =>{
        const user = localStorage.getItem('user')
        if(user) return true;
        return false;
    }

    const [isLoggedIn, setIsloggedIn] = useState(defaultValueHandler)
    const user = {
        isLoggedIn,
        setIsloggedIn
    }
    return(
        <UserContext.Provider value={user}> 
            {props.children}
        </UserContext.Provider>
    )
} 