import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

 //AuthProvider is a component, taking logic from App.js and put it here 
 //Provide and manage the state

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

    const onLoginSubmit = async (data) => {
        if(data.email === '' || data.password === ''){
            alert("All fields are required!");
            return;
        }
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/events');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            alert("Invalid data provided!");
            return;
        }else if(!/^[A-Za-z0-9+_.-]+@(.+)$/.test( values.email)){
            alert("Invalid email adress");
            return;
        }else if(values.email === '' || values.password === '' || values.confirmPassword === ''){
            alert("All fields are required!");
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/events');
        } catch (error) {
            console.log('There is a problem');
        }
    };
    

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};