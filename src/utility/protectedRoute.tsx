
import { FC, useEffect } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import LoadingPage from '../components/Loading/LoadingPage';
import { useAppSelector } from '../hook';

const ProtectedRoute: FC = () => {
    
    const authState = useAppSelector((state) => state.auth);

    useEffect(() => {
        
    }, [authState])
    
    if (authState.loggedIn === true) { 
        return <Outlet />
    }
    else if(authState.loggedIn === false) {
        return <Navigate to="/login" />
    }
    else {
        return <LoadingPage/>
    }

   
}

export default ProtectedRoute;