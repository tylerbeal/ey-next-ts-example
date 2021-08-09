import { useState } from "react";
import { createContext, Dispatch, SetStateAction, ReactChild } from "react";

interface AuthenticatedUser {
    id: number;
    username: string;
    roles: string[];
}

interface AuthenticationContextData {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>
    user: AuthenticatedUser;
    setUser: Dispatch<SetStateAction<AuthenticatedUser>>
}

export const AuthenticationContext = createContext<AuthenticationContextData>({
    isAuthenticated: false,
    user: {
        id: -1,
        username: "Anonymous",
        roles: [] as string[]
    }
} as AuthenticationContextData);

interface AuthenticationProviderProps {
    children?: ReactChild | ReactChild[];
}

export const AuthenticationProvider = (props: AuthenticationProviderProps) => {
    const [user, setUser] = useState({
        id: -1,
        username: "Anonymous",
        roles: [] as string[]
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}