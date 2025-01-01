import { useContext, createContext, useState } from 'react';
import router from '../router';

const AuthContext = createContext();
const TOKEN_KEY = "token";
const USER_KEY = "user";


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(USER_KEY, "{}")));
    const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || "");

    const login = async (data) => {
        try {
            const response = await fetch(
                'http://localhost:3001/auth/login/',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            if(result) {
                setToken(result.access_token);
                setUser(result.user)
                localStorage.setItem(TOKEN_KEY, result.access_token);
                localStorage.setItem(USER_KEY, JSON.stringify(result.user));
                router.navigate('/');
            }
            throw new Error(result.message);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setToken("");
        setUser(null);
        localStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
    }

    return (
        <AuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
