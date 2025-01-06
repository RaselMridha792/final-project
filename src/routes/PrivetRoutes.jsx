import { useContext } from 'react';
import { userContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/common/Loading';

const PrivetRoutes = ({children}) => {
    const {user, loader} = useContext(userContext)
    const location = useLocation();
    if(loader){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <>
        <Navigate to="/login" state={{from: location}} replace ></Navigate>
        </>
    );
};

export default PrivetRoutes;